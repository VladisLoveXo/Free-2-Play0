import { useEffect } from 'react';
import { MinusIcon } from '../svgs/MinusIcon';

export const HamburgerMenu = ({ sidebarState, handleSidebar }) => {
	const toggleMenu = () => {
		const HAMBURGER_MENU = document.getElementById('hamburger-menu');
		const TOP_BAR = document.getElementById('hamburger-top');
		const MIDDLE_BAR = document.getElementById('hamburger-middle');
		const BOTTOM_BAR = document.getElementById('hamburger-bottom');

		if (HAMBURGER_MENU.classList.contains('closed')) {
			MIDDLE_BAR.classList.add('hamburger-menu-fade-bar');
			TOP_BAR.classList.add('hamburger-menu-rotate-ccw');
			BOTTOM_BAR.classList.add('hamburger-menu-rotate-cw');
			HAMBURGER_MENU.classList.remove('closed');
			HAMBURGER_MENU.classList.add('open');
			handleSidebar();
		} else {
			TOP_BAR.classList.remove('hamburger-menu-rotate-ccw');
			BOTTOM_BAR.classList.remove('hamburger-menu-rotate-cw');
			setTimeout(() => {
				MIDDLE_BAR.classList.remove('hamburger-menu-fade-bar');
			}, 500);
			HAMBURGER_MENU.classList.remove('open');
			HAMBURGER_MENU.classList.add('closed');
			handleSidebar();
		}
	};

	useEffect(() => {
		const HAMBURGER_MENU = document.getElementById('hamburger-menu');
		const TOP_BAR = document.getElementById('hamburger-top');
		const MIDDLE_BAR = document.getElementById('hamburger-middle');
		const BOTTOM_BAR = document.getElementById('hamburger-bottom');
		if (
			sidebarState === true &&
			HAMBURGER_MENU.classList.contains('closed')
		) {
			MIDDLE_BAR.classList.add('hamburger-menu-fade-bar');
			TOP_BAR.classList.add('hamburger-menu-rotate-ccw');
			BOTTOM_BAR.classList.add('hamburger-menu-rotate-cw');
			HAMBURGER_MENU.classList.remove('closed');
			HAMBURGER_MENU.classList.add('open');
		} else if (
			sidebarState === false &&
			HAMBURGER_MENU.classList.contains('open')
		) {
			TOP_BAR.classList.remove('hamburger-menu-rotate-ccw');
			BOTTOM_BAR.classList.remove('hamburger-menu-rotate-cw');
			setTimeout(() => {
				MIDDLE_BAR.classList.remove('hamburger-menu-fade-bar');
			}, 500);
			HAMBURGER_MENU.classList.remove('open');
			HAMBURGER_MENU.classList.add('closed');
		}
	}, [sidebarState]);

	return (
		<div
			id='hamburger-menu'
			className='hamburger-menu closed'
			onClick={toggleMenu}
		>
			<MinusIcon id='hamburger-top' styles='hamburger-top' />
			<MinusIcon id='hamburger-middle' styles='hamburger-middle' />
			<MinusIcon id='hamburger-bottom' styles='hamburger-bottom' />
		</div>
	);
};
