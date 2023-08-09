import { FC, Fragment } from 'react';
import { IWindowCreateDialogProps } from './WindowCreateDialog.types';
import WrapperCreateCustomerDlg from './WrapperCreateCustomerDlg';
import WrapperCreateVendorDlg from './WrapperCreateVendorDlg';
import { useQueries } from '@tanstack/react-query';
import { paymentTermsService } from '../../services/paymentTermsService';
import { subUsersService } from '../../services/subUsersService';
import { statesService } from '../../services/statesService';
import { useAppSelector } from '../../redux/hooks';

const WindowCreateDialog: FC<IWindowCreateDialogProps> = ({
  variant,
  closeWindowDlg,
}) => {
  const { cid_var, ak_var } = useAppSelector((state) => state.grids);

  const resultData = useQueries({
    queries: [
      {
        queryKey: ['get_states'],
        queryFn: async () => {
          const { data } = await statesService.getStates(cid_var, ak_var);
          return [...data];
        },
      },
      {
        queryKey: ['subusers'],
        queryFn: async () => {
          const { data } = await subUsersService.getUsers(cid_var, ak_var);
          return data;
        },
      },
      {
        queryKey: ['paymentTerms'],
        queryFn: async () => {
          const { data } = await paymentTermsService.getPaymentTerms(
            ['IDNo', 'TermsCode'],
            cid_var,
            ak_var
          );
          return data;
        },
      },
    ],
  });

  const dialog = () => {
    switch (variant) {
      case 'customers':
        return resultData[0].status === 'success' &&
          resultData[1].status === 'success' &&
          resultData[2].status === 'success' ? (
          <WrapperCreateCustomerDlg
            states={resultData[0].data}
            subUsers={resultData[1].data}
            paymentTerms={resultData[2].data}
            closeWindowDlg={closeWindowDlg}
          />
        ) : null;
      case 'vendors':
        return resultData[0].status === 'success' &&
          resultData[1].status === 'success' &&
          resultData[2].status === 'success' ? (
          <WrapperCreateVendorDlg
            states={resultData[0].data}
            subUsers={resultData[1].data}
            paymentTerms={resultData[2].data}
            closeWindowDlg={closeWindowDlg}
          />
        ) : null;
      default:
        return;
    }
  };

  return <Fragment>{dialog()}</Fragment>;
};
export default WindowCreateDialog;
