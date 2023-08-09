import { FC } from 'react';
import styles from './grid.module.scss';
import GridContent from './GridContent';
import { IGridComponentProps } from './types';
import moment from 'moment';
import { useQuery } from '@tanstack/react-query';
import { customersService } from '../../services/customersService';
import { cashAccountsService } from '../../services/cashAccountsService';
import { accountsService } from '../../services/accountsService';
import { vendorsService } from '../../services/vendorsService';
import { employeesService } from '../../services/employeesService';
import { AxiosError } from 'axios';
import GridHeader from './GridHeader';
import { useAppSelector } from '../../redux/hooks';

const GridComponent: FC<IGridComponentProps> = ({ heightData, variant }) => {
  const { cid_var, ak_var } = useAppSelector((state) => state.grids);
  let serviceFunc: any;

  switch (variant) {
    case 'accounts':
      serviceFunc = accountsService.getAccounts;
      break;
    case 'bank_accounts':
      serviceFunc = cashAccountsService.getBankAccounts;
      break;
    case 'customers':
      serviceFunc = customersService.getCustomers;
      break;
    case 'vendors':
      serviceFunc = vendorsService.getVendors;
      break;
    case 'employees':
      serviceFunc = employeesService.getEmployees;
      break;
    default:
      serviceFunc = () => {};
  }

  const { isLoading, isError, isSuccess, error, data } = useQuery({
    queryKey: [`${variant}`],
    queryFn: async () => serviceFunc(cid_var, ak_var),
  });

  const resultData = isSuccess ? data.data : undefined;

  if (isSuccess) {
    if (variant === 'bank_accounts') {
      resultData.forEach((item: any) => {
        item['TransDate'] = moment(Date.parse(item['TransDate'])).format('L');

        if (item['TransDebitAmount']) {
          item['TransDebitAmount'] =
            item['TransDebitAmount'].toLocaleString('en-US');
        }
        if (item['TransCreditAmount']) {
          item['TransCreditAmount'] =
            item['TransCreditAmount'].toLocaleString('en-US');
        }
        if (item['RunningBalance']) {
          item['RunningBalance'] =
            item['RunningBalance'].toLocaleString('en-US');
        }
      });
    }
  }

  return (
    <div className={styles.gridContainer}>
      <GridHeader variant={variant} />

      {isError ? (
        <div className={styles.error}>
          Error: {(error as AxiosError).message}
        </div>
      ) : null}

      {isLoading ? (
        <div className={styles.loadingContainer}>
          <p className="animate__animated animate__pulse animate__infinite infinite">
            Loading...
          </p>
        </div>
      ) : null}

      {isSuccess ? (
        <GridContent
          variant={variant}
          heightData={heightData}
          gridData={resultData}
        />
      ) : null}
    </div>
  );
};
export default GridComponent;
