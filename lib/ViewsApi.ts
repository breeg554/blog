import { Views } from '@prisma/client';

export class ViewsApi {
  constructor(public readonly baseUrl = `/api/views`) {}

  async getViews(): Promise<Views[]> {
    const res = await fetch(this.baseUrl, { method: 'GET' });

    if (!res.ok) {
      const error = await res.json();
      console.error(error);
      throw error;
    }

    return res.json();
  }

  async updateViews(slug: string): Promise<Views> {
    const res = await fetch(this.baseUrl, { method: 'POST', body: JSON.stringify({ slug }) });

    if (!res.ok) {
      const error = await res.json();
      console.error(error);
      throw error;
    }

    return res.json();
  }
}
