interface PaginationEllipsisProps {
  index: number;
}

export class PaginationEllipsis {
  static render({ index }: PaginationEllipsisProps) {
    return (
      <span key={`ellipsis-${index}`} className="px-3 py-2 text-muted-foreground">
        ...
      </span>
    );
  }
}

