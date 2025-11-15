import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PaginationButton } from "./PaginationButton";
import { PaginationEllipsis } from "./PaginationEllipsis";
import { calculatePageNumbers } from "@/lib/pagination-utils";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const PaginationControls = ({ currentPage, totalPages, onPageChange }: PaginationControlsProps) => {
  const pages = calculatePageNumbers(currentPage, totalPages);

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        Previous
      </Button>

      {pages.map((page, index) => {
        if (page === -1) {
          return <PaginationEllipsis key={`ellipsis-${index}`} index={index} />;
        }
        return <PaginationButton key={page} page={page} currentPage={currentPage} onPageChange={onPageChange} />;
      })}

      <Button
        variant="ghost"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
        <ChevronRight className="h-4 w-4 ml-1" />
      </Button>
    </div>
  );
};

