export type PaginationType<DATA> = {
  current_page: number;
  first_page_url: number;
  from: number;
  total: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: null;
  to: number;
  data: DATA[];
};
