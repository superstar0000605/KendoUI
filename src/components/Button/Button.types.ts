import { ReactNode } from 'react';
import { ButtonProps } from '@progress/kendo-react-buttons';

export type TVariant = 'primary' | 'secondary' | 'tertiary' | 'icon-grid-btn';

export interface IProps extends ButtonProps {
  children?: ReactNode;
  variant?: TVariant;
  hotkey?: string;
  isValid?: boolean;
  onHotkeyPress?: (variables?: any) => void;
}
