import { FilterIcon } from '../svgs/FilterIcon';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { SelectInput } from './SelectInput';
import { setGenreFilter } from '../features/filterStateSlice';

const compare = (a, b) => {
	const genreA = a.toLowerCase();
	const genreB = b.toLowerCase();
	if (genreA < genreB) {
		return -1;
	}
	if (genreA > genreB) {
		return 1;
	}
	return 0;
};

export const GenreControls = () => {
	const dispatch = useDispatch();
	const games = useSelector((state) => state.game.games);
	const genreState = useSelector((state) => state.filters.genreFilter);
	const [genreList, setGenreList] = useState([]);

	useEffect(() => {
		if (games.length === 0) {
			return;
		}
		const genres = ['ALL'];
		games.forEach((gameObj) => {
			
			if (genres.includes(gameObj.genre)) {
				return;
			} else {
				genres.push(gameObj.genre);
				console.log(gameObj.genre)
			}
		});
		genres.sort(compare);
		setGenreList(genres);
	}, [games]);

	const toggleTooltip = () => {
		const tooltip = document.getElementsByClassName('filter-tooltip')[0];
		if (tooltip.classList.contains('tooltip-active')) {
			tooltip.classList.remove('tooltip-active');
		} else {
			tooltip.classList.add('tooltip-active');
		}
	};

	const handleClick = () => {
		const INPUT = document.getElementById('genre-select');
		const MENU = document.getElementById('genre-select-menu');
		if (INPUT.classList.contains('select-active')) {
			MENU.classList.remove('menu-active');
			setTimeout(() => {
				INPUT.classList.remove('select-active');
			}, 300);
		} else {
			INPUT.classList.add('select-active');
			setTimeout(() => {
				MENU.classList.add('menu-active');
			}, 300);
		}
	};

	const handleSelection = (selection) => {
		dispatch(setGenreFilter(selection));
	};

	return (
		<div className='options-item-conatiner'>
			<p className='filter-tooltip'>Filter</p>
			<button
				className='icon-button'
				onClick={handleClick}
				onMouseEnter={toggleTooltip}
				onMouseLeave={toggleTooltip}
			>
				<FilterIcon styles='filter-icon' />
			</button>
			<SelectInput
				inputID='genre-select'
				state={genreState}
				dropdownList={genreList}
				handleState={handleSelection}
			/>
		</div>
	);
};
