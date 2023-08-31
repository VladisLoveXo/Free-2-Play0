import { Image } from './Image';


export const GameCard = ({ gameData, toggleModal, isOpen }) => {
	
	function formateDate(date) {
		let dateParts = date.split('-');
		return (`${dateParts[2]}.${dateParts[1]}.${dateParts[0]}`)
	}

	return (
		
		<div className={`game-card ${isOpen ? 'opened' : ''}`} onClick={() => toggleModal(gameData.id)}>
			<Image data={gameData} height='206' width='365' />
			<div className='bottom-game-card'>
				<h2>{gameData.title}</h2>
				<div>
					<div className='description-game-card'>Студия <span>«{gameData.developer}»</span></div>
					<div className='description-game-card'>Год релиза: <span>{formateDate(gameData.release_date)}</span></div>
					<div className='description-game-card-genre'>{gameData.genre}</div>
					
					</div>
			</div>
		</div>
	);
};
