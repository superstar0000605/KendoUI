import { FC, useState, useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Window } from '@progress/kendo-react-dialogs';
import { FloatingLabel } from '@progress/kendo-react-labels';
import { TimePicker } from '@progress/kendo-react-dateinputs';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import {
  Input,
  MaskedTextBox,
  NumericTextBox,
} from '@progress/kendo-react-inputs';
import { MultiColumnComboBox } from '@progress/kendo-react-dropdowns';
import Button from '../Button';
import { validateForm, validateWebSite } from '../../utils/validate';
import {
  BillingWrapper,
  Form,
  Fieldset,
  InputWrapper,
  FieldsWrapper,
  BillingShippingWrapper,
  CreditFieldWrapper,
  Notes,
  ButtonWrapper,
  BillingAndShippingWrapper,
  ShippingWrapper,
  ShippingCol3,
  ShippingCol1,
  TimeWrapper,
  StyledWindow,
} from './CustomerDialog.styled';
import { ICustomerDialogProps } from './CustomerDialog.types';

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
  ShipZip: /^_{5}$/,
};

const CustomerDialog: FC<ICustomerDialogProps> = ({
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
    const subscription = watch((value, { name }) => {
      console.log('value: ', value);
      console.log('validateForm(value): ', validateForm(value));
      if (validateForm(value)) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
      if (name && Object.keys(regex).indexOf(name) !== -1) {
        if (regex[name].test(value[name])) setValue(name, '');
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, setValue]);

  return (
    <StyledWindow
      title={title}
      onClose={onClose}
      resizable={false}
      width={900}
      height={580}
    >
      <Form onSubmit={handleFormSubmit}>
        {/* Customer information */}
        <Fieldset>
          <Controller
            control={control}
            name="EntityName"
            render={({ field }) => (
              <Input
                autoComplete="off"
                style={{ flex: '1 1 47%' }}
                {...field}
                label="Customer Name"
              />
            )}
          />

          <InputWrapper>
            <Controller
              control={control}
              name="FID"
              defaultValue={''}
              render={({ field }) => {
                return (
                  <MaskedTextBox
                    {...field}
                    width="100%"
                    label="Federal ID"
                    mask="0000000-00"
                    value={field.value || ''}
                  />
                );
              }}
            />
          </InputWrapper>

          <InputWrapper>
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
          </InputWrapper>
        </Fieldset>

        {/* Contact information */}
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

        {/* Billing and Shipping information */}
        <BillingAndShippingWrapper>
          {/* Billing Address information */}
          <Fieldset>
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
                    render={({ field }) => <Input autoComplete="off" {...field} label="City" />}
                  />
                </BillingShippingWrapper>
                <BillingShippingWrapper width="30%">
                  <Controller
                    control={control}
                    name="State"
                    render={({ field }) => (
                      <MultiColumnComboBox
                        fillMode={"outline"}
                        {...field}
                        label="State"
                        columns={statesColumns}
                        textField="StateAbb"
                        data={states}
                      />
                    )}
                  />
                </BillingShippingWrapper>
                <BillingShippingWrapper width="25%">
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

          {/* Shipping Address information */}
          <Fieldset>
            <legend>Shipping Address</legend>
            <ShippingWrapper>
              <ShippingCol3>
                <Controller
                  control={control}
                  name="ShipAddress1"
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
                  name="ShipAddress2"
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
                      name="ShipCity"
                      render={({ field }) => <Input autoComplete="off" {...field} label="City" />}
                    />
                  </BillingShippingWrapper>
                  <BillingShippingWrapper width="30%">
                    <Controller
                      control={control}
                      name="ShipSt"
                      render={({ field }) => (
                        <MultiColumnComboBox
                          {...field}
                          fillMode={"outline"}
                          header={null}
                          data={states}
                          label="State"
                          columns={statesColumns}
                          textField="StateAbb"
                        />
                      )}
                    />
                  </BillingShippingWrapper>
                  <BillingShippingWrapper width="25%">
                    <Controller
                      control={control}
                      name="ShipZip"
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
              </ShippingCol3>
              <ShippingCol1>
                <TimeWrapper>
                  <Controller
                    control={control}
                    name="TimeOpen"
                    render={({ field }) => (
                      <TimePicker
                        fillMode={"outline"}
                        {...field}
                        format="hh:mm a"
                        formatPlaceholder={{
                          hour: "hh",
                          minute: "mm",
                        }}
                        value={
                          typeof field.value === 'string'
                            ? new Date(field.value)
                            : field.value
                        }
                        label="Time Open"
                        placeholder=""
                        width="100%"
                      />
                    )}
                  />
                  <Controller
                    control={control}
                    name="TimeClose"
                    render={({ field }) => (
                      <TimePicker
                        fillMode={"outline"}
                        {...field}
                        format="hh:mm a"
                        formatPlaceholder={{
                          hour: "hh",
                          minute: "mm",
                        }}
                        value={
                          typeof field.value === 'string'
                            ? new Date(field.value)
                            : field.value
                        }
                        placeholder=""
                        label="Time Close"
                        width="100%"
                      />
                    )}
                  />
                </TimeWrapper>
              </ShippingCol1>
            </ShippingWrapper>
          </Fieldset>
        </BillingAndShippingWrapper>

        {/* Credit information */}
        <Fieldset>
          <legend>Credit Information</legend>
          <CreditFieldWrapper width="20%">
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

          <CreditFieldWrapper width="10%">
            <Controller
              control={control}
              name="CreditHoldYN"
              render={({ field }) => (
                <DropDownList
                  {...field}
                  fillMode={"outline"}
                  value={field.value?.toString()}
                  defaultValue={'No'}
                  style={{ width: '100%' }}
                  data={['Yes', 'No']}
                  label="Credit Hold"
                />
              )}
            />
          </CreditFieldWrapper>

          <CreditFieldWrapper width="15%">
            <Controller
              control={control}
              name="CreditLimit"
              render={({ field }) => (
                <NumericTextBox
                  style={{ width: '100%' }}
                  {...field}
                  min={0}
                  max={99999999}
                  label="Credit Limit"
                  format="n0"
                />
              )}
            />
          </CreditFieldWrapper>

          <CreditFieldWrapper width="15%">
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

          <CreditFieldWrapper width="15%">
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

          <CreditFieldWrapper width="25%">
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
        </Fieldset>

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
export default CustomerDialog;
