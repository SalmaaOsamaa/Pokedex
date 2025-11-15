import { PaginationControls } from "./PaginationControls";
import { PaginationInfo } from "./PaginationInfo";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  itemsPerPage?: number;
}

export class Pagination {
  static render({ currentPage, totalPages, onPageChange, itemsPerPage }: PaginationProps) {
    return (
      <div className="flex flex-col items-center gap-4 mt-8">
        {PaginationControls.render({ currentPage, totalPages, onPageChange })}
        {PaginationInfo.render({ currentPage, totalPages, itemsPerPage })}
      </div>
    );
  }
}

export const PaginationComponent = (props: PaginationProps) => {
  return Pagination.render(props);
};
