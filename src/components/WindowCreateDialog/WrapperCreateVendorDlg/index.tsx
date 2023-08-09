import { FC, memo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import VendorDialog from '../../VendorDialog';
import {
  IWrapperCreateVendorDlgProps,
  IVendorInput,
} from './WrapperCreateVendorDlg.types';
import { formatVendorData } from '../../../utils';
import { useCreateVendor } from '../../../services/hooks';
import { useAppSelector } from '../../../redux/hooks';

const WrapperCreateVendorDlg: FC<IWrapperCreateVendorDlgProps> = ({
  states,
  subUsers,
  paymentTerms,
  closeWindowDlg,
}) => {
  const methods = useForm();
  const { cid_var, ak_var } = useAppSelector((state) => state.grids);

  const { mutate: createVendor } = useCreateVendor(closeWindowDlg);

  const onSubmitVendorInfo = (variables: IVendorInput) => {
    const formattedData = formatVendorData(variables, subUsers, paymentTerms);

    createVendor({ cid_var, ak_var, ...formattedData });
  };

  return (
    <FormProvider {...methods}>
      <VendorDialog
        title="New Vendor"
        states={states}
        subUsers={subUsers}
        onSubmit={onSubmitVendorInfo}
        onClose={closeWindowDlg}
        paymentTerms={paymentTerms}
      />
    </FormProvider>
  );
};
export default memo(WrapperCreateVendorDlg);
