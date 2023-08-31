import { GenreControls } from "./GenreControls";
import { SortControls } from "./SortControls";
import { PaginationControls } from "./PaginationControls";

export const OptionsPanel = ({ changePage, currentPage, totalPages }) => {
  return (
    <div className="options-panel">
      <div className="filter-buttons-container">
        <GenreControls />
        <SortControls />
      </div>
      <PaginationControls
        id="top-pagination-controls"
        changePage={changePage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
};
