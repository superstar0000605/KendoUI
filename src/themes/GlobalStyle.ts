import { createGlobalStyle } from 'styled-components';
import { EColor } from './constants';

const GlobalStyle = createGlobalStyle`
  
  .App {
    text-align: center;
  }
  
  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }
  
  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }
  
  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
  
  .App-link {
    color: #61dafb;
  }
  
  .k-dropdownlist {
    background-color: ${EColor.WHITE} !important;
  }
  
  .k-floating-label-container,
  :not(.k-empty) > .k-label,
  .k-floating-label-container,
  .k-fill > .k-label,
  .k-floating-label-container:focus-within > .k-label {
    background-color: white;
  }
  
  .k-combobox {
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.02));
  }
  
  .k-combobox , .k-table-row {
    box-shadow: unset !important;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
  
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  .k-window-titlebar {
    padding: 0.5rem;
    color: white;
    background-color: ${EColor.DARK_BLUE};
  
    .k-window-title {
      font-size: 14px;
      font-weight: 500;
    }
  }
  .k-input-md .k-input-button, 
  .k-input-md .k-spinner-increase, 
  .k-input-md .k-spinner-decrease, 
  .k-picker-md .k-input-button, 
  .k-picker-md .k-spinner-increase, 
  .k-picker-md .k-spinner-decrease {
    border-color: transparent;
    color: ${EColor.DARK_GRAY};
    background-color: transparent;
  }
  
  .k-data-table {
    .k-table-header {
      display: none;
    }
    .k-table-body li {
      .k-table-td {
        border: none;
      }
    }
  }
  
   .k-combobox {
    .k-clear-value {
      display: none;
    }
  } 
  .k-list-item:nth-child(even) {
    background-color: ${EColor.LIGHT_GRAY};
  }
  .k-list-item {
    box-shadow: unset !important;
  }
  .k-list-item:hover {
    background-color: ${EColor.GRAY};
  }
  
  .k-list-item.k-selected, .k-selected.k-list-optionlabel {
    color: inherit !important;
    background-color: rgba(44, 80, 152, 0.08) !important;
  }
  
  
  .k-floating-label-container.k-empty > .k-label {
    top: 15.0000000004px;
  }
  
  .k-floating-label-container {
    padding-top: 10.0000000004px;
    color: rgba(0, 0, 0, 0.6);
  }

  .k-floating-label-container > .k-label,
  .k-floating-label-container.k-focus > .k-label {
      top: 0;
      left: 8px;
      transform: scale(0.8);
      font-size: 13px !important;
  }

  .k-floating-label-container:focus-within > .k-label {
      top: 0;
      left: 8px;
      transform: scale(0.8);
      font-size: 13px !important;
  }
`;
export default GlobalStyle;