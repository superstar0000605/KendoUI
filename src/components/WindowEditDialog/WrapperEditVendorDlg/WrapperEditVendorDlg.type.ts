import { IState, IApprovingUser,ITermsCode } from "../../WindowCreateDialog/WindowCreateDialog.types";
import { IVendor } from "../../WindowCreateDialog/WrapperCreateVendorDlg/WrapperCreateVendorDlg.types";

export interface IWrapperEditVendorDlgProps {
  states: IState[];
  subUsers: IApprovingUser[];
  paymentTerms: ITermsCode[];
  closeWindowDlg: () => void;
  vendorInfo: IVendor;
}
