import { FC, memo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import CustomerDialog from '../../CusomerDialog';
import { IWrapperEditCustomerDlgProps } from './WrapperEditCustomerDlg.types';
import { formatCustomerData, getChangedValues } from '../../../utils';
import { useUpdateCustomer } from '../../../services/hooks/useCustomer';
import { ICustomerInput } from '../../WindowCreateDialog/WrapperCreateCustomerDlg/WrapperCreateCustomerDlg.types';
import { generateCustomer } from '../../../utils';
import { useAppSelector } from '../../../redux/hooks';

const WrapperEditCustomerDlg: FC<IWrapperEditCustomerDlgProps> = ({
  states,
  subUsers,
  paymentTerms,
  closeWindowDlg,
  customerInfo,
}) => {
  const methods = useForm();
  const { cid_var, ak_var } = useAppSelector((state) => state.grids);

  const formattedData = generateCustomer(
    customerInfo,
    states,
    subUsers,
    paymentTerms
  );
  methods.reset(formattedData);

  const closeCustomerDialog = () => {
    closeWindowDlg();
    methods.reset({ EntityName: '' });
  };

  const { mutate: updateCustomer } = useUpdateCustomer(closeCustomerDialog);

  const onSubmitUpdateCustomerInfo = (variables: ICustomerInput) => {
    try {
      const formattedData = formatCustomerData(
        variables,
        subUsers,
        paymentTerms
      );

      const changes = getChangedValues(formattedData, customerInfo);
      if (Object.keys(changes).length > 0) {
        updateCustomer({
          id: customerInfo.IDNo,
          cid: cid_var,
          ak: ak_var,
          ...changes,
        });
      }
    } catch (e: unknown) {
      alert(`error while saving data: ${String(e)}`);
    }
  };

  return (
    <FormProvider {...methods}>
      <CustomerDialog
        title="Customer Info"
        states={states}
        subUsers={subUsers}
        onSubmit={onSubmitUpdateCustomerInfo}
        onClose={closeCustomerDialog}
        paymentTerms={paymentTerms}
      />
    </FormProvider>
  );
};
export default memo(WrapperEditCustomerDlg);
