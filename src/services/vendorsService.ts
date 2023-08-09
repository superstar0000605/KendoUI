import qs from 'qs';
import { axiosClient } from './axiosClient';
import { editFields, getVendorsFields } from './fields';

export const vendorsService = {
  getVendors: async (cid: string, ak: string) => {
    const response = await axiosClient.get('/GenReadList', {
      params: {
        CID: cid,
        AK: ak,
        sTable: 'Ent_Main',
        saFields: getVendorsFields,
        saWhere: ['EntityType', '=', `'V'`],
      },
      paramsSerializer: function (params) {
        return qs.stringify(params, { arrayFormat: 'repeat' });
      },
    });
    return response.data;
  },
  createVendor: (params: any, cid: string, ak: string) =>
    axiosClient.post(
      '/GenCreate',
      { ...params },
      {
        params: {
          CID: cid,
          AK: ak,
          sTable: 'Ent_Main',
        },
      }
    ),
  updateVendor: (params: any) => {
    const id = params.id;
    delete params.id;
    const cid = params.cid;
    delete params.cid;
    const ak = params.ak;
    delete params.ak;

    return axiosClient.patch(
      '/GenUpdate',
      { ...params },
      {
        params: {
          CID: cid,
          AK: ak,
          sTable: 'Ent_Main',
          iIDNo: id,
        },
      }
    );
  },
  getVendorById: async (id: number, cid: string, ak: string) => {
    const response = await axiosClient.get('/GenRead', {
      params: {
        CID: cid,
        AK: ak,
        sTable: 'Ent_Main',
        iIDNo: id,
        saFields: editFields,
      },
      paramsSerializer: function (params) {
        return qs.stringify(params, { arrayFormat: 'repeat' });
      },
    });
    return response.data;
  },
};
