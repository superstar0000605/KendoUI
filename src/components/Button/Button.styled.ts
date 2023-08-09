import { css, styled } from 'styled-components';
import { Button as KendoButton } from '@progress/kendo-react-buttons';
import { EColor } from '../../themes/constants';
import { TVariant } from './Button.types';

export const StyledButton = styled(KendoButton)<{ variant?: TVariant }>`
  &.k-button {
    ${({ variant }) => {
      switch (variant) {
        case 'secondary':
          return css`
            padding-block: 8px;
            padding-inline: 12px;
            background-color: ${EColor.DEEP_BLUE};
            border-color: ${EColor.LIGHT_GRAY};
            color: ${EColor.WHITE};
            text-transform: uppercase;
          `;
        case 'tertiary':
          return css`
            background-color: var(--color-tertiary);
            border-color: var(--color-tertiary);
            color: var(--color-white);
          `;
        case 'icon-grid-btn':
          return css`
            width: 25px;
            height: 25px;
            background-color: #fff;
            border: 1px solid rgb(204, 204, 204);
            border-radius: 3px;
            cursor: pointer;
            appearance: none;
            outline: none;
            color: #333;
          `;

        default:
          return css`
            padding-block: 8px;
            padding-inline: 12px;
            background-color: ${EColor.TEAL};
            border-color: ${EColor.TEAL};
            color: ${EColor.WHITE};
            text-transform: uppercase;
          `;
      }
    }}

    span.hotkey {
      text-decoration: underline;
      font-size: 0.85rem;
    }

    &:hover {
      ${({ variant }) => {
        switch (variant) {
          case 'secondary':
            return css`
              filter: brightness(0.9);
            `;
          case 'tertiary':
            return css`
              filter: brightness(0.9);
            `;
          case 'icon-grid-btn':
            return css`
              // background-color: rgba(204, 204, 204, 1);
              background-color: #fff;
              border-color: rgb(44, 80, 152);
              color: rgb(44, 80, 152);
            `;

          default:
            return css`
              background-color: rgb(46, 99, 115);
            `;
        }
      }}
    }
  }
`;
