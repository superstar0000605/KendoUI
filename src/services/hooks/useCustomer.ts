import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { customersService } from '../customersService';

export const useCreateCustomer = (callback: () => void) => {
  return useMutation(async (params: any) => customersService.createCustomer, {
    onSuccess: () => {
      callback();
    },
  });
};

export const useUpdateCustomer = (callback: () => void) => {
  const queryClient = useQueryClient();
  return useMutation(async (params: any) => customersService.updateCustomer, {
    onSuccess: () => {
      queryClient.clear();
      callback();
    },
  });
};

export const useGetCustomerById = (id: number, cid: string, ak: string) => {
  return useQuery<any>([`get_user_by_id_${id}`], async () => {
    const { data } = await customersService.getCustomerById(id, cid, ak);
    return data.at(0);
  });
};
