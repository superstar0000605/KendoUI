import { FC, useState, useEffect, memo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Window } from '@progress/kendo-react-dialogs';
import { FloatingLabel } from '@progress/kendo-react-labels';
import {
  Input,
  MaskedTextBox,
  NumericTextBox,
} from '@progress/kendo-react-inputs';
import {
  DropDownList,
  MultiColumnComboBox,
} from '@progress/kendo-react-dropdowns';
import Button from '../Button';
import { validateForm, validateWebSite } from '../../utils/validate';
import { IntlProvider } from '@progress/kendo-react-intl';
import {
  CreditWrapper,
  BillingWrapper,
  Form,
  Fieldset,
  VendorWrapper,
  InputWrapper,
  BillingAndCreditWrapper,
  FieldsWrapper,
  BillingShippingWrapper,
  CreditFieldWrapper,
  Notes,
  ButtonWrapper,
  StyledWindow
} from './VendorDialog.styled';
import { IVendorDialogProps } from './VendorDialog.types';

const statesColumns = [
  {
    field: 'StateAbb',
    header: 'Abbreviation',
    width: '70px',
  },
  {
    field: 'StateName',
    header: 'Name',
    width: '130px',
  },
];

const regex: { [key: string]: RegExp } = {
  FID: /^_{7}-_{2}$/,
  MainPhone: /^_{3}-_{3}-_{4}$/,
  OtherPhone: /^_{3}-_{3}-_{4}$/,
  Zip: /^_{5}$/,
};

const VendorDialog: FC<IVendorDialogProps> = ({
  title,
  states,
  onClose,
  onSubmit,
  subUsers,
  paymentTerms,
}) => {
  const { handleSubmit, control, watch, setValue } = useFormContext();
  const handleFormSubmit = handleSubmit(onSubmit);
  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      setIsValid(validateForm(value));
      if (
        name &&
        Object.keys(regex).includes(name) &&
        regex[name].test(value[name])
      ) {
        setValue(name, '');
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, setValue]);

  return (
    <StyledWindow
      title={title}
      onClose={onClose}
      resizable={false}
      width={800}
      height={505}
    >
      <Form onSubmit={handleFormSubmit}>
        <Fieldset>
          <VendorWrapper width="50.5%">
            <Controller
              control={control}
              name="EntityName"
              render={({ field }) => (
                <Input
                  autoComplete="off"
                  style={{ width: '100%' }}
                  {...field}
                  label="Vendor Name"
                />
              )}
            />
          </VendorWrapper>
          <VendorWrapper width="25%">
            <Controller
              control={control}
              name="FID"
              render={({ field }) => (
                <MaskedTextBox
                  width="100%"
                  {...field}
                  label="Federal ID"
                  mask="0000000-00"
                  value={field.value || ''}
                />
              )}
            />
          </VendorWrapper>
          <VendorWrapper width="25%">
            <Controller
              control={control}
              name="Website"
              render={({ field }) => (
                <Input
                  autoComplete="off"
                  style={{ width: '100%' }}
                  {...field}
                  label="Website"
                  valid={validateWebSite(field.value)}
                />
              )}
            />
          </VendorWrapper>
        </Fieldset>

        <Fieldset>
          <legend>Contact Information</legend>
          <InputWrapper>
            <Controller
              control={control}
              name="PrimaryContact"
              render={({ field }) => (
                <Input
                  autoComplete="off"
                  style={{ width: '100%' }}
                  {...field}
                  label="Primary Contact"
                />
              )}
            />
          </InputWrapper>
          <InputWrapper>
            <Controller
              control={control}
              name="MainPhone"
              render={({ field }) => (
                <MaskedTextBox
                  width="100%"
                  {...field}
                  label="Main Phone"
                  mask="000-000-0000"
                  value={field.value || ''}
                />
              )}
            />
          </InputWrapper>
          <InputWrapper>
            <Controller
              control={control}
              name="OtherPhone"
              render={({ field }) => (
                <MaskedTextBox
                  width="100%"
                  {...field}
                  label="Other Phone"
                  mask="000-000-0000"
                  value={field.value || ''}
                />
              )}
            />
          </InputWrapper>
          <InputWrapper>
            <Controller
              control={control}
              name="EmailMain"
              render={({ field }) => (
                <Input
                  autoComplete="off"
                  style={{ width: '100%' }}
                  {...field}
                  label="Email Address"
                  type="email"
                />
              )}
            />
          </InputWrapper>
        </Fieldset>

        <BillingAndCreditWrapper>
          <Fieldset className="address">
            <legend>Billing Address</legend>
            <BillingWrapper>
              <Controller
                control={control}
                name="Address1"
                render={({ field }) => (
                  <Input
                    autoComplete="off"
                    style={{ flex: '1 1 100%' }}
                    {...field}
                    label="Address 1"
                  />
                )}
              />
              <Controller
                control={control}
                name="Address2"
                render={({ field }) => (
                  <Input
                    autoComplete="off"
                    style={{ flex: '1 1 100%' }}
                    {...field}
                    label="Address 2"
                  />
                )}
              />
              <FieldsWrapper className="address">
                <BillingShippingWrapper width="45%">
                  <Controller
                    control={control}
                    name="City"
                    render={({ field }) => (
                      <Input
                        autoComplete="off"
                        {...field}
                        style={{ width: '100%' }}
                        label="City"
                      />
                    )}
                  />
                </BillingShippingWrapper>
                <BillingShippingWrapper width="25%">
                  <Controller
                    control={control}
                    name="State"
                    render={({ field }) => (
                      <MultiColumnComboBox
                        {...field}
                        label="State"
                        columns={statesColumns}
                        textField="StateAbb"
                        data={states}
                      />
                    )}
                  />
                </BillingShippingWrapper>
                <BillingShippingWrapper width="30%">
                  <Controller
                    control={control}
                    name="Zip"
                    render={({ field }) => (
                      <MaskedTextBox
                        {...field}
                        label="Zip"
                        mask="00000"
                        value={field.value || ''}
                      />
                    )}
                  />
                </BillingShippingWrapper>
              </FieldsWrapper>
            </BillingWrapper>
          </Fieldset>

          <Fieldset className="credit">
            <legend>Credit Information</legend>
            <CreditWrapper>
              <FieldsWrapper>
                <CreditFieldWrapper width="60%">
                  <Controller
                    control={control}
                    name="TermsDueDays"
                    render={({ field }) => (
                      <DropDownList
                        fillMode={"outline"}
                        {...field}
                        style={{ width: '100%' }}
                        data={paymentTerms.map((term) => term?.TermsCode)}
                        label="Payment Terms"
                      />
                    )}
                  />
                </CreditFieldWrapper>

                <CreditFieldWrapper width="40%">
                  <Controller
                    control={control}
                    name="CreditLimit"
                    render={({ field }) => (
                      <IntlProvider locale="en">
                        <NumericTextBox
                          label="Credit Limit"
                          {...field}
                          format="n0"
                          min={0}
                          max={99999999}
                          style={{ width: '100%' }}
                        />
                      </IntlProvider>
                    )}
                  />
                </CreditFieldWrapper>
              </FieldsWrapper>
              <FieldsWrapper>
                <CreditFieldWrapper width="60%">
                  <Controller
                    control={control}
                    name="CreditReportingAgency"
                    render={({ field }) => (
                      <Input
                        autoComplete="off"
                        style={{ width: '100%' }}
                        {...field}
                        value={field.value || ''}
                        type="text"
                        label="Credit Agency"
                      />
                    )}
                  />
                </CreditFieldWrapper>
                <CreditFieldWrapper width="40%">
                  <Controller
                    control={control}
                    name="CreditRating"
                    render={({ field }) => (
                      <Input
                        autoComplete="off"
                        style={{ width: '100%' }}
                        {...field}
                        value={field.value || ''}
                        label="Credit Rating"
                      />
                    )}
                  />
                </CreditFieldWrapper>
              </FieldsWrapper>

              <CreditFieldWrapper width="100%">
                <Controller
                  control={control}
                  name="CreditApprovedBy"
                  render={({ field }) => (
                    <DropDownList
                      fillMode={"outline"}
                      {...field}
                      style={{ width: '100%' }}
                      data={subUsers.map((user) => user?.LoginUserName)}
                      label="Approved By"
                    />
                  )}
                />
              </CreditFieldWrapper>
            </CreditWrapper>
          </Fieldset>
        </BillingAndCreditWrapper>

        <Fieldset>
          <Controller
            control={control}
            name="Notes"
            render={({ field }) => (
              <FloatingLabel
                label="Notes"
                editorId="textarea-id"
                editorValue={field.value}
                style={{ width: '100%' }}
              >
                <Notes {...field} id="textarea-id" autoSize={true} />
              </FloatingLabel>
            )}
          />
        </Fieldset>

        <ButtonWrapper>
          <Button
            disabled={!isValid}
            isValid={isValid}
            variant="secondary"
            hotkey="s"
            onHotkeyPress={handleFormSubmit}
          >
            <span className="hotkey">s</span>
            <span>ave</span>
          </Button>
          <Button
            onClick={onClose}
            type="button"
            hotkey="c"
            onHotkeyPress={() => onClose()}
          >
            <span className="hotkey">c</span>
            <span>ancel</span>
          </Button>
        </ButtonWrapper>
      </Form>
    </StyledWindow>
  );
};
export default VendorDialog;
