interface PaginationEllipsisProps {
  index: number;
}

export const PaginationEllipsis = ({ index }: PaginationEllipsisProps) => {
  return (
    <span className="px-3 py-2 text-muted-foreground">
      ...
    </span>
  );
};

