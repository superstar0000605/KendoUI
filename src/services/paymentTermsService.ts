import qs from 'qs';
import { axiosClient } from './axiosClient';

export const paymentTermsService = {
  getPaymentTerms: async (fields: string[], cid: string, ak: string) => {
    const response = await axiosClient.get('/GenReadList', {
      params: {
        CID: cid,
        AK: ak,
        sTable: 'Set_TermsCodes',
        saFields: fields,
      },
      paramsSerializer: function (params) {
        return qs.stringify(params, { arrayFormat: 'repeat' });
      },
    });
    return response.data;
  },
};
