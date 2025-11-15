import { Button } from "@/components/ui/button";

interface PaginationButtonProps {
  page: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export class PaginationButton {
  static render({ page, currentPage, onPageChange }: PaginationButtonProps) {
    return (
      <Button
        key={page}
        variant={currentPage === page ? "default" : "ghost"}
        size="sm"
        onClick={() => onPageChange(page)}
        className="min-w-[40px]"
      >
        {page}
      </Button>
    );
  }
}

