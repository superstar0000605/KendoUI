export type TPage = {
  pageNum: number;
  selectedGrids: string[];
};

export interface IGridsState {
  currentPage: number;
  selectedGrids: string[];
  // selectedGridRow: object;
  cid_var: string;
  ak_var: string;
}
