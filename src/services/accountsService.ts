import { getAccountsFields } from './fields';
import { axiosClient } from './axiosClient';
import qs from 'qs';

export const accountsService = {
  getAccounts: async (cid: string, ak: string) => {
      const response = await axiosClient.get('/GenReadList', {
        params: {
          CID: cid,
          AK: ak,
          sTable: 'GL_Accounts',
          saFields: getAccountsFields,
        },
        paramsSerializer: function (params) {
          return qs.stringify(params, { arrayFormat: 'repeat' });
        },
      });
      return response.data;
  },
};
