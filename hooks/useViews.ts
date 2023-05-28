import useSWR from 'swr';
import { ViewsApi } from '@api';

export const useViews = () => {
  const viewsApi = new ViewsApi();

  const useViewsQuery = () => {
    return useSWR('/api/views', viewsApi.getViews);
  };

  const usePostViewsQuery = (slug: string) => {
    const { data: views } = useViewsQuery();

    return (views || []).find((view) => view.slug === slug);
  };

  return { useViewsQuery, usePostViewsQuery };
};
