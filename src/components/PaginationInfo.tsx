interface PaginationInfoProps {
  currentPage: number;
  totalPages: number;
  itemsPerPage?: number;
}

export class PaginationInfo {
  static render({ currentPage, totalPages, itemsPerPage = 10 }: PaginationInfoProps) {
    return (
      <p className="text-sm text-muted-foreground">
        Page {currentPage} of {totalPages} ({itemsPerPage} Pokémon shown)
      </p>
    );
  }
}

