import { FC, memo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import VendorDialog from '../../VendorDialog';
import { formatVendorData } from '../../../utils';
import { useUpdateVendor } from '../../../services/hooks';
import { IWrapperEditVendorDlgProps } from './WrapperEditVendorDlg.type';
import { getChangedValues } from '../../../utils';
import { IVendorInput } from '../../WindowCreateDialog/WrapperCreateVendorDlg/WrapperCreateVendorDlg.types';
import { generateCustomer } from '../../../utils';
import { useAppSelector } from '../../../redux/hooks';

const WrapperEditVendorDlg: FC<IWrapperEditVendorDlgProps> = ({
  states,
  subUsers,
  paymentTerms,
  closeWindowDlg,
  vendorInfo,
}) => {
  const methods = useForm();
  const { cid_var, ak_var } = useAppSelector((state) => state.grids);

  const formattedData = generateCustomer(
    vendorInfo,
    states,
    subUsers,
    paymentTerms
  );
  methods.reset(formattedData);

  const { mutate: updateVendor } = useUpdateVendor(closeWindowDlg);

  const onSubmitUpdateVendorInfo = (variables: IVendorInput) => {
    const formattedData = formatVendorData(variables, subUsers, paymentTerms);

    try {
      const changes = getChangedValues(formattedData, vendorInfo);
      if (Object.keys(changes).length > 0) {
        updateVendor({
          id: vendorInfo.IDNo,
          cid: cid_var,
          ak: ak_var,
          ...changes,
        });
      }
    } catch (e) {
      alert(`error while saving data: ${String(e)}`);
    }
  };

  return (
    <FormProvider {...methods}>
      <VendorDialog
        title="Vendor Info"
        states={states}
        subUsers={subUsers}
        onSubmit={onSubmitUpdateVendorInfo}
        onClose={closeWindowDlg}
        paymentTerms={paymentTerms}
      />
    </FormProvider>
  );
};
export default memo(WrapperEditVendorDlg);
