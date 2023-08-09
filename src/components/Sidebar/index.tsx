import { FC } from 'react';
import {
  PanelBar,
  PanelBarItem,
  PanelBarSelectEventArguments,
} from '@progress/kendo-react-layout';
import styles from './sidebar.module.scss';
import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectGrid, closeGrid } from '../../redux/reducers/gridsSlice';

const Sidebar: FC = () => {
  const dispatch = useAppDispatch();
  const selectedGrids = useAppSelector((state) => state.grids.selectedGrids);
  // const currentPage = useAppSelector((state) => state.grids.currentPage);

  // const index = (currentPage - 1) * 4;
  // const pageGrids = selectedGrids.slice(index, index + 4);

  const selectHandler = (e: PanelBarSelectEventArguments): void => {
    if (e.target.props.id === '1.1') {
      if (selectedGrids.includes('accounts')) {
        dispatch(closeGrid('accounts'));
      } else {
        dispatch(selectGrid('accounts'));
      }
      // } else if (e.target.props.title === 'Account Registers') {
    } else if (e.target.props.id === '2.1') {
      if (selectedGrids.includes('bank_accounts')) {
        dispatch(closeGrid('bank_accounts'));
      } else {
        dispatch(selectGrid('bank_accounts'));
      }
    } else if (e.target.props.id === '5.1') {
      if (selectedGrids.includes('customers')) {
        dispatch(closeGrid('customers'));
      } else {
        dispatch(selectGrid('customers'));
      }
    } else if (e.target.props.id === '7.1') {
      if (selectedGrids.includes('vendors')) {
        dispatch(closeGrid('vendors'));
      } else {
        dispatch(selectGrid('vendors'));
      }
    } else if (e.target.props.id === '8.1') {
      if (selectedGrids.includes('employees')) {
        dispatch(closeGrid('employees'));
      } else {
        dispatch(selectGrid('employees'));
      }
    }
  };

  return (
    <section className={styles.sidebarContainer}>
      <PanelBar onSelect={selectHandler} className={styles.menuContainer}>
        <PanelBarItem
          id="1"
          title="Controller"
          expanded={true}
          className={styles.menuBar}
        >
          <PanelBarItem
            id="1.1"
            title="Accounts"
            className={clsx(
              styles.menuitem,
              selectedGrids.includes('accounts') && 'selected-menu-item'
            )}
          />
          <PanelBarItem
            id="1.2"
            title="Close Periods"
            className={styles.menuitem}
          />
          <PanelBarItem
            id="1.3"
            title="Journal Entries"
            className={styles.menuitem}
          />
          <PanelBarItem
            id="1.4"
            title="Asset Depreciation"
            className={styles.menuitem}
          />
          <PanelBarItem
            id="1.5"
            title="Loan Amortization"
            className={styles.menuitem}
          />
          <PanelBarItem
            id="1.6"
            title="Financial Reporting"
            className={styles.menuitem}
          />
        </PanelBarItem>
        {/* <PanelBarItem
          title="Cash & Credit"
          expanded={true}
          className={styles.menuBar}
        >
          <PanelBarItem
            title="Bank Accounts"
            className={clsx(
              styles.menuitem,
              selectedGrids.includes('bank_accounts') && 'selected-menu-item'
            )}
          />
          <PanelBarItem title="Credit Accounts" className={styles.menuitem} />
          <PanelBarItem
            title="Reconcile Accounts"
            className={styles.menuitem}
          />
        </PanelBarItem> */}
        <PanelBarItem
          id="2"
          title="Cash Accounts"
          expanded={true}
          className={styles.menuBar}
        >
          <PanelBarItem
            id="2.1"
            title="Account Registers"
            className={clsx(
              styles.menuitem,
              selectedGrids.includes('bank_accounts') && 'selected-menu-item'
            )}
          />
          <PanelBarItem
            id="2.2"
            title="Payments Posted"
            className={styles.menuitem}
          />
          <PanelBarItem
            id="2.3"
            title="Deposits Posted"
            className={styles.menuitem}
          />
          <PanelBarItem
            id="2.4"
            title="Reconciliations"
            className={styles.menuitem}
          />
        </PanelBarItem>
        <PanelBarItem
          id="3"
          title="Credit Accounts"
          expanded={true}
          className={styles.menuBar}
        >
          <PanelBarItem
            id="3.1"
            title="Account Registers"
            className={styles.menuitem}
          />
          <PanelBarItem
            id="3.2"
            title="Charges Posted"
            className={styles.menuitem}
          />
          <PanelBarItem
            id="3.3"
            title="Payments Posted"
            className={styles.menuitem}
          />
          <PanelBarItem
            id="3.4"
            title="Reconciliations"
            className={styles.menuitem}
          />
        </PanelBarItem>
        <PanelBarItem
          id="4"
          title="Sales"
          expanded={true}
          className={styles.menuBar}
        >
          <PanelBarItem id="4.1" title="Goods" className={styles.menuitem} />
          <PanelBarItem id="4.2" title="Services" className={styles.menuitem} />
          <PanelBarItem
            id="4.3"
            title="Prospects"
            className={styles.menuitem}
          />
          <PanelBarItem
            id="4.4"
            title="Sales Orders"
            className={styles.menuitem}
          />
        </PanelBarItem>
        <PanelBarItem
          id="5"
          title="Accounts Receivable"
          expanded={true}
          className={styles.menuBar}
        >
          <PanelBarItem
            id="5.1"
            title="Customers"
            className={clsx(
              styles.menuitem,
              selectedGrids.includes('customers') && 'selected-menu-item'
            )}
          />
          <PanelBarItem
            id="5.2"
            title="Invoice Listing"
            className={styles.menuitem}
          />
          <PanelBarItem
            id="5.3"
            title="Invoice Payments"
            className={styles.menuitem}
          />
          <PanelBarItem
            id="5.4"
            title="A/R Register"
            className={styles.menuitem}
          />
          <PanelBarItem
            id="5.5"
            title="A/R Reporting"
            className={styles.menuitem}
          />
        </PanelBarItem>
        <PanelBarItem
          id="6"
          title="Purchases"
          expanded={true}
          className={styles.menuBar}
        >
          <PanelBarItem
            id="6.1"
            title="Product Inventory"
            className={styles.menuitem}
          />
          <PanelBarItem
            id="6.2"
            title="Product Orders"
            className={styles.menuitem}
          />
        </PanelBarItem>
        <PanelBarItem
          id="7"
          title="Accounts Payable"
          expanded={true}
          className={styles.menuBar}
        >
          <PanelBarItem
            id="7.1"
            title="Vendors"
            className={clsx(
              styles.menuitem,
              selectedGrids.includes('vendors') && 'selected-menu-item'
            )}
          />
          <PanelBarItem
            id="7.2"
            title="Bill Listing"
            className={styles.menuitem}
          />
          <PanelBarItem
            id="7.3"
            title="A/P Register"
            className={styles.menuitem}
          />
          <PanelBarItem
            id="7.4"
            title="A/P Reporting"
            className={styles.menuitem}
          />
        </PanelBarItem>
        <PanelBarItem
          id="8"
          title="Payroll"
          expanded={true}
          className={styles.menuBar}
        >
          <PanelBarItem
            id="8.1"
            title="Employees"
            className={clsx(
              styles.menuitem,
              selectedGrids.includes('employees') && 'selected-menu-item'
            )}
          />
          <PanelBarItem
            id="8.2"
            title="Time Clock"
            className={styles.menuitem}
          />
          <PanelBarItem
            id="8.3"
            title="PTO Manager"
            className={styles.menuitem}
          />
          <PanelBarItem
            id="8.4"
            title="Process Payroll"
            className={styles.menuitem}
          />
          <PanelBarItem
            id="8.5"
            title="Payroll Reporting"
            className={styles.menuitem}
          />
        </PanelBarItem>
        <PanelBarItem
          id="9"
          title="Utilities"
          expanded={true}
          className={styles.menuBar}
        >
          <PanelBarItem
            id="9.1"
            title="Import Banking Data"
            className={styles.menuitem}
          />
          <PanelBarItem
            id="9.2"
            title="Import Master Files"
            className={styles.menuitem}
          />
        </PanelBarItem>
      </PanelBar>
    </section>
  );
};

export default Sidebar;
