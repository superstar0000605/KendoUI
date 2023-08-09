import { FC, memo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import CustomerDialog from '../../CusomerDialog';
import { formatCustomerData } from '../../../utils';
import { useCreateCustomer } from '../../../services/hooks';
import {
  IWrapperCreateCustomerDlgProps,
  ICustomerInput,
} from './WrapperCreateCustomerDlg.types';
import { useAppSelector } from '../../../redux/hooks';

const WrapperCreateCustomerDlg: FC<IWrapperCreateCustomerDlgProps> = ({
  states,
  subUsers,
  paymentTerms,
  closeWindowDlg,
}) => {
  const methods = useForm();

  const { cid_var, ak_var } = useAppSelector((state) => state.grids);

  const closeCustomerDialog = () => {
    closeWindowDlg();
    methods.reset({ EntityName: '' });
  };

  const { mutate: createCustomer } = useCreateCustomer(closeCustomerDialog);

  const onSubmitCustomerInfo = (variables: ICustomerInput) => {
    try {
      const formattedData = formatCustomerData(
        variables,
        subUsers,
        paymentTerms
      );
      createCustomer({ cid_var, ak_var, ...formattedData });
    } catch (e: unknown) {
      alert(`error while saving data: ${String(e)}`);
    }
  };

  return (
    <FormProvider {...methods}>
      <CustomerDialog
        title="New Customer"
        states={states}
        subUsers={subUsers}
        onSubmit={onSubmitCustomerInfo}
        onClose={closeCustomerDialog}
        paymentTerms={paymentTerms}
      />
    </FormProvider>
  );
};
export default memo(WrapperCreateCustomerDlg);
