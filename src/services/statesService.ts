import qs from 'qs';
import { axiosClient } from './axiosClient';
import { getStatesFields } from './fields';

export const statesService = {
  getStates: async (cid: string, ak: string) => {
    const response = await axiosClient.get('GenReadSys', {
      params: {
        CID: cid,
        AK: ak,
        sTable: 'Sys_States',
        saFields: getStatesFields,
      },
      paramsSerializer: function (params) {
        return qs.stringify(params, { arrayFormat: 'repeat' });
      },
    });
    return response.data;
  },
};
