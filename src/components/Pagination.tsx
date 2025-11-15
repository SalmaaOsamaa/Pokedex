import { PaginationControls } from "./PaginationControls";
import { PaginationInfo } from "./PaginationInfo";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  itemsPerPage?: number;
}

export const Pagination = ({ currentPage, totalPages, onPageChange, itemsPerPage }: PaginationProps) => {
  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      <PaginationControls currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
      <PaginationInfo currentPage={currentPage} totalPages={totalPages} itemsPerPage={itemsPerPage} />
    </div>
  );
};
