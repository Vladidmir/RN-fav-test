export interface PaginationProps {
  currentPage: number;
  totalPage: number;
  nextPage: () => void;
  prevPage: () => void;
}
