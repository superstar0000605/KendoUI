import qs from 'qs';
import { axiosClient } from './axiosClient';
import { getBankAccountFields } from './fields';

export const cashAccountsService = {
  getBankAccounts: async (cid: string, ak: string) => {
    const response = await axiosClient.get('/GenRunningBal', {
      params: {
        CID: cid,
        AK: ak,
        sRunningBalType: 'BKRegister',
        sAccountNo: '10010',
        saFields: getBankAccountFields,
        dtStartDate: '05/01/2023',
        dtEndDate: '06/26/2023',
      },
      paramsSerializer: function (params) {
        return qs.stringify(params, { arrayFormat: 'repeat' });
      },
    });
    return response.data;
  },
};
