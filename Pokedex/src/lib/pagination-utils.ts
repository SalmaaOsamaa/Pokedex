export const calculatePageNumbers = (
  currentPage: number,
  totalPages: number,
  maxVisiblePages: number = 5
): number[] => {
  const pages: number[] = [];

  if (totalPages <= maxVisiblePages + 2) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    if (currentPage <= 3) {
      for (let i = 1; i <= 5; i++) {
        pages.push(i);
      }
      pages.push(-1);
      pages.push(totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(1);
      pages.push(-1);
      for (let i = totalPages - 4; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      pages.push(-1);
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pages.push(i);
      }
      pages.push(-1);
      pages.push(totalPages);
    }
  }

  return pages;
};

