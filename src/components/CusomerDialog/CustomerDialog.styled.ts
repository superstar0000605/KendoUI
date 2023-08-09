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

export const ShippingWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
`;

export const ShippingCol3 = styled.div`
  flex: 1 1 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ShippingCol1 = styled.div`
  flex: 1 1 30%;
  margin-top: 30px;
`;

export const CreditFieldWrapper = styled.div<{ width: string }>`
  flex-basis: ${(props) => props.width};
`;

export const BillingShippingWrapper = styled.div<{ width: string }>`
  flex-basis: ${(props) => props.width};
`;

export const BillingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BillingAndShippingWrapper = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InputWrapper = styled.div`
  flex: 1 1 22%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 7px;
  align-items: center;
  justify-content: flex-end;
`;

export const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
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
      & > span {
        flex: 1;
      }
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
  padding: 0;
  gap: 0.5rem;
  border: none;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  legend {
    color: ${EColor.DARK_BLUE};
    font-weight: 600;
  }

  .k-floating-label-container.full-width {
    width: 100%;
  }
`;
