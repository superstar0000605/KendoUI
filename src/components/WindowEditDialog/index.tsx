import { FC, Fragment } from 'react';
import { useQueries } from '@tanstack/react-query';
import { IWindowEditDlgProps } from './WindowEditDialog.type';
import { statesService } from '../../services/statesService';
import { subUsersService } from '../../services/subUsersService';
import { paymentTermsService } from '../../services/paymentTermsService';
import { customersService } from '../../services/customersService';
import { vendorsService } from '../../services/vendorsService';
import WrapperEditCustomerDlg from './WrapperEditCustomerDlg';
import WrapperEditVendorDlg from './WrapperEditVendorDlg';
import { useAppSelector } from '../../redux/hooks';

const WindowEditDialog: FC<IWindowEditDlgProps> = ({
  variant,
  closeWindowDlg,
  id,
}) => {
  const { cid_var, ak_var } = useAppSelector((state) => state.grids);

  let serviceFunc: any;
  let key: string;
  switch (variant) {
    case 'customers':
      serviceFunc = customersService.getCustomerById;
      key = `get_user_by_id_${id}`;
      break;
    case 'vendors':
      serviceFunc = vendorsService.getVendorById;
      key = `get_vendor_by_id_${id}`;
      break;
    default:
      serviceFunc = null;
      key = '';
  }

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
      {
        queryKey: [key],
        queryFn: async () => {
          const { data } = await serviceFunc(id, cid_var, ak_var);
          return data;
        },
      },
    ],
  });

  const editDialog = () => {
    switch (variant) {
      case 'customers':
        return resultData[0].status === 'success' &&
          resultData[1].status === 'success' &&
          resultData[2].status === 'success' &&
          resultData[3].status === 'success' ? (
          <WrapperEditCustomerDlg
            states={resultData[0].data}
            subUsers={resultData[1].data}
            paymentTerms={resultData[2].data}
            customerInfo={resultData[3].data.at(0)}
            closeWindowDlg={closeWindowDlg}
          />
        ) : null;
      case 'vendors':
        return resultData[0].status === 'success' &&
          resultData[1].status === 'success' &&
          resultData[2].status === 'success' &&
          resultData[3].status === 'success' ? (
          <WrapperEditVendorDlg
            states={resultData[0].data}
            subUsers={resultData[1].data}
            paymentTerms={resultData[2].data}
            vendorInfo={resultData[3].data.at(0)}
            closeWindowDlg={closeWindowDlg}
          />
        ) : null;
    }
  };

  return <Fragment>{editDialog()}</Fragment>;
};
export default WindowEditDialog;
