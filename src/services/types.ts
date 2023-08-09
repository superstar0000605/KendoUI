export interface IAccountsData {
  AccountName: string;
  AccountNo: string;
  AccountType: string;
  Company_ID: number;
  IDNo: number;
  InactiveYN: boolean | null;
  ParentAccount: string | null;
}

export interface IBankAccountsData {
  ChkClearedYN: string | null;
  ChkVoidYN: string | null;
  IDNo: number;
  Notes: string | null;
  RunningBalance: number;
  TransAccount: string;
  TransCreditAmount: number;
  TransDate: string;
  TransDebitAmount: number | null;
  TransDocRef: string;
  TransEntityName: string;
  TransNo: number;
  TransPmtMethod: string;
  TransType: string;
  TransTypeDesc: string;
}

export interface ICustomersData {
  City: string;
  DefExpAcct: string | null;
  EmailMain: string;
  EntityName: string;
  IDNo: number;
  MainPhone: string;
  Notes: string;
  PrimaryContact: string;
  State: string;
}

export interface IVendorsData {
  Address1: string;
  Address2: string;
  City: string;
  CreditHoldYN: boolean | null;
  CreditLimit: number;
  CreditRating: number | null;
  CreditReportingAgency: string;
  EmailMain: string;
  EntityName: string;
  FID: string;
  IDNo: number;
  MainPhone: string;
  Notes: string | null;
  OtherPhone: string | null;
  PrimaryContact: string;
  State: string;
  TermsDiscDay: number;
  TermsDiscPct: number;
  TermsDueDays: number;
  TimeClose: string;
  TimeOpen: string;
  Website: string;
  Zip: string;
}
