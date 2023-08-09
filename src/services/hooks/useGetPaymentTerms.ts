import { useQuery } from '@tanstack/react-query';
import { paymentTermsService } from '../paymentTermsService';

export const useGetPaymentTerms = (cid: string, ak: string) => {
  return useQuery<any[]>(
    ['paymentTerms'],
    async () => {
      const { data } = await paymentTermsService.getPaymentTerms(
        ['IDNo', 'TermsCode'],
        cid,
        ak
      );
      return data;
    },
    {
      initialData: [],
    }
  );
};
