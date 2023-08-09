import qs from 'qs';
import { getEmployeesFields } from './fields';
import { axiosClient } from './axiosClient';

export const employeesService = {
  getEmployees: async (cid: string, ak: string) => {
    const response = await axiosClient.get('/GenReadList', {
      params: {
        CID: cid,
        AK: ak,
        sTable: 'Ent_Main',
        saFields: getEmployeesFields,
        saWhere: ['EntityType', '=', `'E'`],
      },
      paramsSerializer: function (params) {
        return qs.stringify(params, { arrayFormat: 'repeat' });
      },
    });
    return response.data;
  },
};
