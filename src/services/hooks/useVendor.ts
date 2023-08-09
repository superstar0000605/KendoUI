import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { vendorsService } from '../vendorsService';

export const useCreateVendor = (callback: () => void) => {
  return useMutation(async (params: any) => vendorsService.createVendor, {
    onSuccess: () => {
      callback();
    },
  });
};

export const useUpdateVendor = (callback: () => void) => {
  const queryClient = useQueryClient();
  return useMutation(async (params: any) => vendorsService.updateVendor, {
    onSuccess: () => {
      queryClient.clear();
      callback();
    },
  });
};

export const useGetVendorById = (id: number, cid: string, ak: string) => {
  return useQuery<any>([`get_vendor_by_id_${id}`], async () => {
    const { data } = await vendorsService.getVendorById(id, cid, ak);
    return data.at(0);
  });
};
