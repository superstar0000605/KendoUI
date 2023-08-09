import qs from 'qs';
import { axiosClient } from './axiosClient';
import { getUsersFields } from './fields';

export const subUsersService = {
  getUsers: async (cid: string, ak: string) => {
    const response = await axiosClient.get('GenReadList', {
      params: {
        CID: cid,
        AK: ak,
        sTable: 'Acc_SubUsers',
        saFields: getUsersFields,
      },
      paramsSerializer: function (params) {
        return qs.stringify(params, { arrayFormat: 'repeat' });
      },
    });
    return response.data;
  },
};
