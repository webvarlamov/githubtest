export interface SearchState {
  search: string;
  page: number;
  usedFilters: {[key: string]: string};
  availableFilters: {[key: string]: string[]};
}
