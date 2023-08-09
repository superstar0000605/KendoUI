import { FC, useEffect } from 'react';
import { IProps } from './Button.types';
import { StyledButton } from './Button.styled';

const Button: FC<IProps> = ({ children, variant = 'primary', hotkey, isValid,  onHotkeyPress, ...props }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.altKey && event.key === hotkey) {
        if (hotkey === 's' && isValid) {
          onHotkeyPress && onHotkeyPress();
        } else if (hotkey === 'c') {
          onHotkeyPress && onHotkeyPress();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [hotkey, onHotkeyPress]);
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};
export default Button;
