
import { TriangleArrow } from '../svgs/TriangleArrow';


export const PaginationControls = ({
	id,
	changePage,
	currentPage,
	totalPages,
	
}) => {
	
	return (
		
		<div id={id} className='page-controls'>
			<button
				id='prev'
				className='pagination-button'
				onClick={(e) => changePage(e)}
			>
				<TriangleArrow styles='prev-button-icon' />
			</button>
			<span>
				Page {currentPage} of {totalPages}
			</span>
			<button
				id='next'
				className='pagination-button'
				onClick={(e) => changePage(e)}
			>
				<TriangleArrow styles='next-button-icon' />
			</button>
		</div>
	);
};
