import { useQuery } from '@tanstack/react-query';
import { statesService } from '../statesService';

export const useGetStates = (cid: string, ak: string) => {
  return useQuery<any[]>(
    ['get_states'],
    async () => {
      const { data } = await statesService.getStates(cid, ak);
      return [...data];
    },
    {
      initialData: [],
    }
  );
};
