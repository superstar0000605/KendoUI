export interface IWindowCreateDialogProps {
  variant: string;
  closeWindowDlg: () => void;
}

export interface IState {
  StateAbb: string;
  StateName: string;
}

export interface IApprovingUser {
  IDNo: number;
  LoginUserName: string;
}
export interface ITermsCode {
  IDNo: number;
  TermsCode: string;
}
