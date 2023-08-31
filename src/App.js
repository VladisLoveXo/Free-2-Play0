import './App.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGames } from './features/gameDataSlice';
import { useEffect, useState } from 'react';
import { Nav } from './components/Nav';
import { Modal } from './components/Modal';
import { GameContainer } from './components/GameContainer';



function App() {
	const dispatch = useDispatch();
	const gameStatus = useSelector((state) => state.game.status);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalData, setModalData] = useState(null);

	useEffect(() => {
		if (gameStatus === 'idle') {
			dispatch(fetchGames());
		}
	}, [gameStatus, dispatch]);

	const handleModal = async (gameId) => {
	
		try{
			if (!isModalOpen) {
			
			fetch(
			  `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`,
			  {
				method: 'GET',
				headers: {
				  'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
				  'X-RapidAPI-Key': 'fb38b74c5emsh15e2e20836043d4p150947jsn61e82dd17170',
				},
			  }
			)
			  .then((response) => response.json())
			  .then((response) => {
				
				setModalData(response);
				setIsModalOpen(true);
			  })
		  } else {
			
			setIsModalOpen(false);
			setModalData(null);
		  };
		} catch(error) {
			error("Something went wrong. Please try again later.")
		} 
		}

	return (
		<div className='app-wrapper'>
			{!isModalOpen && (
				<>
					<Nav />
					<main className='App'>
					<GameContainer 
  toggleModal={handleModal}

/>
					</main>
				</>
			)}
			{isModalOpen && <Modal data={modalData} closeModal={handleModal} />}
		</div>
	);
}

export default App;
