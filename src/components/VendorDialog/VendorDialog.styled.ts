import styled from 'styled-components';
import { TextArea } from '@progress/kendo-react-inputs';
import { EColor } from '../../themes/constants';
import { Window } from '@progress/kendo-react-dialogs';

export const StyledWindow = styled(Window)`
  box-shadow:
    rgba(0, 0, 0, 0.2) 0px 11px 15px -7px,
    rgba(0, 0, 0, 0.14) 0px 24px 38px 3px,
    rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;
  border-radius: 4px;
  overflow: hidden;
  border: none;
  &:focus {
    box-shadow:
      rgba(0, 0, 0, 0.2) 0px 11px 15px -7px,
      rgba(0, 0, 0, 0.14) 0px 24px 38px 3px,
      rgba(0, 0, 0, 0.12) 0px 9px 46px 8px !important;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const BillingWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CreditWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const CreditFieldWrapper = styled.div<{ width: string }>`
  flex-basis: ${(props) => props.width};
`;

export const BillingShippingWrapper = styled.div<{ width: string }>`
  flex-basis: ${(props) => props.width};
`;

export const VendorWrapper = styled.div<{ width: string }>`
  flex-basis: ${(props) => props.width};
`;

export const BillingAndCreditWrapper = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

export const InputWrapper = styled.div`
  flex: 1 1 25%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 4px;
  align-items: center;
  justify-content: flex-end;
`;

export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0.5rem;
  }

  &.address {
    width: 100%;
    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

export const Notes = styled(TextArea)`
  width: 100%;
  height: 5rem;
`;

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 0 0 0;
  gap: 0.5rem;
  border: none;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  &.address {
    width: 100%;
    @media (min-width: 768px) {
      margin-right: 0;
    }
  }

  &.credit {
    width: 100%;
    @media (min-width: 768px) {
      margin-left: 0;
    }
  }

  legend {
    color: ${EColor.DARK_BLUE};
    font-weight: 600;
  }

  .k-floating-label-container.full-width {
    width: 100%;
  }
`;
