import { useQuery } from '@tanstack/react-query';
import { subUsersService } from '../subUsersService';

export const useGetSubUsers = (cid: string, ak: string) => {
  return useQuery<any[]>(
    ['subusers'],
    async () => {
      const { data } = await subUsersService.getUsers(cid, ak);
      return data;
    },
    {
      initialData: [],
    }
  );
};
