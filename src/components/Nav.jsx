import { MobileFilterMenu } from "./MobileFilterMenu";
import { GenreControls } from "./GenreControls";
import { SortControls } from "./SortControls";
import { PaginationControls } from "./PaginationControls";

export const Nav = ({ changePage, currentPage, totalPages }) => {
  return (
    <nav>
      <div className="options-panel">
        <div className="filter-buttons-container">
          <GenreControls />
          <SortControls />
        </div>
        <MobileFilterMenu />
        <PaginationControls
          id="top-pagination-controls"
          changePage={changePage}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </nav>
  );
};
