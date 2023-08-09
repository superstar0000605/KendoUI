export const getCustomersFields: string[] = [
  'IDNo',
  'EntityName',
  'City',
  'State',
  'PrimaryContact',
  'MainPhone',
  'EmailMain',
  'Notes',
  'DefExpAcct',
];

export const getVendorsFields: string[] = [
  'IDNo',
  'EntityName',
  'FID',
  'PrimaryContact',
  'EmailMain',
  'Address1',
  'MainPhone',
  'Address2',
  'OtherPhone',
  'City',
  'State',
  'Zip',
  'Notes',
  'TimeOpen',
  'TimeClose',
  'Website',
  'TermsDueDays',
  'TermsDiscDay',
  'TermsDiscPct',
  'CreditHoldYN',
  'CreditLimit',
  'CreditReportingAgency',
  'CreditRating',
];

export const editFields: string[] = [
  'IDNo',
  'CreditApprovedBy',
  'EntityName',
  'FID',
  'PrimaryContact',
  'EmailMain',
  'Address1',
  'MainPhone',
  'Address2',
  'OtherPhone',
  'City',
  'State',
  'Zip',
  'Notes',
  'TimeOpen',
  'TimeClose',
  'Website',
  'ShipAddress1',
  'ShipAddress2',
  'ShipCity',
  'ShipSt',
  'ShipZip',
  'TermsDueDays',
  'CreditHoldYN',
  'CreditLimit',
  'CreditReportingAgency',
  'CreditRating',
];

export const getStatesFields: string[] = ['StateAbb', 'StateName'];

export const getUsersFields: string[] = [
  'IDNo',
  'AccIDNo',
  'Company_ID',
  'LoginUserName',
  'FirstName',
  'LastName',
  'MiddleName',
];

export const getBankAccountFields = [
  'IDNo',
  'TransNo',
  'TransAccount',
  'TransType',
  'TransPmtMethod',
  'TransEntityName',
  'Notes',
  'ChkClearedYN',
  'ChkVoidYN',
];

export const getAccountsFields = [
  'IDNo',
  'Company_ID',
  'AccountNo',
  'AccountName',
  'AccountType',
  'InactiveYN',
  'ParentAccount'
];

export const getEmployeesFields = [
  'IDNo',
  'EntityName',
  'City',
  'State',
  'LocCode',
  'JobTitle',
  'Department',
  'MainPhone',
  'EmailMain',
  'Notes',
];