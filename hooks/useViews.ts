import useSWR from 'swr';
import { ViewsApi } from '@lib/ViewsApi';

import useSWRMutation from 'swr/mutation';

export const useViews = () => {
  const viewsApi = new ViewsApi();

  const useViewsQuery = () => {
    return useSWR(['/api/views'], () => viewsApi.getViews());
  };

  const usePostViewsQuery = (slug: string) => {
    const { data: views } = useViewsQuery();

    return (views || []).find((view) => view.slug === slug);
  };

  const useUpdateViews = (slug: string) => {
    return useSWRMutation(['/api/views', slug], () => viewsApi.updateViews(slug));
  };

  return { useViewsQuery, usePostViewsQuery, useUpdateViews };
};
