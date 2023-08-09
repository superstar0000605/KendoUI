import {
  IState,
  ITermsCode,
  IApprovingUser,
} from '../WindowCreateDialog/WindowCreateDialog.types';

export interface ICustomerDialogProps {
  title: string;
  subUsers: IApprovingUser[];
  states: IState[];
  paymentTerms: ITermsCode[];
  onClose: () => void;
  onSubmit: (variables: any) => void;
}
