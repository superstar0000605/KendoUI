import {
  IState,
  IApprovingUser,
  ITermsCode,
} from '../WindowCreateDialog.types';

export interface IWrapperCreateVendorDlgProps {
  states: IState[];
  subUsers: IApprovingUser[];
  paymentTerms: ITermsCode[];
  closeWindowDlg: () => void;
}

export interface IVendorInput {
  CreditApprovedBy?: IApprovingUser;
  EntityName: string;
  FID?: string;
  PrimaryContact?: string;
  EmailMain?: string;
  Address1?: string;
  MainPhone?: string;
  Address2?: string;
  OtherPhone?: string;
  City?: string;
  State?: IState;
  Zip?: string;
  Notes?: string;
  Website?: string;
  TermsDueDays?: ITermsCode;
  CreditLimit?: string;
  CreditReportingAgency?: string;
  CreditRating?: string;
}

export interface IVendor {
  IDNo: number;
  CreditApprovedBy?: number;
  EntityName: string;
  FID?: string;
  PrimaryContact?: string;
  EmailMain?: string;
  Address1?: string;
  MainPhone?: string;
  Address2?: string;
  OtherPhone?: string;
  City?: string;
  State?: string;
  Zip?: string;
  Notes?: string;
  Website?: string;
  TermsDueDays?: number;
  CreditLimit?: number;
  CreditReportingAgency?: string;
  CreditRating?: string;
}
