import {
  IState,
  IApprovingUser,
  ITermsCode,
} from '../WindowCreateDialog.types';

export interface IWrapperCreateCustomerDlgProps {
  states: IState[];
  subUsers: IApprovingUser[];
  paymentTerms: ITermsCode[];
  closeWindowDlg: () => void;
}

export interface ICustomerInput {
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
  TimeOpen?: string;
  TimeClose?: string;
  Website?: string;
  ShipAddress1?: string;
  ShipAddress2?: string;
  ShipCity?: string;
  ShipSt?: string;
  ShipZip?: string;
  TermsDueDays?: ITermsCode;
  CreditHoldYN?: 'Yes' | 'No';
  CreditLimit?: string;
  CreditReportingAgency?: string;
  CreditRating?: string;
}

export interface ICustomer {
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
  TimeOpen?: string;
  TimeClose?: string;
  Website?: string;
  ShipAddress1?: string;
  ShipAddress2?: string;
  ShipCity?: string;
  ShipSt?: string;
  ShipZip?: string;
  TermsDueDays?: number;
  CreditHoldYN?: boolean;
  CreditLimit?: number;
  CreditReportingAgency?: string;
  CreditRating?: string;
}
