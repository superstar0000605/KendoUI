import {
  IState,
  IApprovingUser,
  ITermsCode,
} from '../../WindowCreateDialog/WindowCreateDialog.types';
import { ICustomer } from '../../WindowCreateDialog/WrapperCreateCustomerDlg/WrapperCreateCustomerDlg.types';

export interface IWrapperEditCustomerDlgProps {
  states: IState[];
  subUsers: IApprovingUser[];
  paymentTerms: ITermsCode[];
  closeWindowDlg: () => void;
  customerInfo: ICustomer;
}
