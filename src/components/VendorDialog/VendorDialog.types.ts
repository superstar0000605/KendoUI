import {
  IState,
  ITermsCode,
  IApprovingUser,
} from '../WindowCreateDialog/WindowCreateDialog.types';

export interface IVendorDialogProps {
  title: string;
  subUsers: IApprovingUser[];
  states: IState[];
  paymentTerms: ITermsCode[];
  onClose: () => void;
  onSubmit: (variables: any) => void;
}
