export interface IGridComponentProps {
  heightData?: string;
  variant: string;
}

export interface IGridContentProps {
  variant: string;
  heightData?: string;
  gridData: any;
}

export type TAccountsGridTemplate = {
  title: string;
  field: string;
  hasColumnMenu: boolean;
  width: string;
  classNameStyle: string;
};

export type TBankAccountsGridTemplate = {
  title: string;
  field: string;
  hasColumnMenu: boolean;
  width: string;
  classNameStyle: string;
};

export type TCustomersGridTemplate = {
  title: string;
  field: string;
  hasColumnMenu: boolean;
  width: string;
  classNameStyle: string;
};

export type TVendorsGridData = {
  title: string,
  field: string,
  hasColumnMenu: boolean,
  width: string,
  classNameStyle: string,
}