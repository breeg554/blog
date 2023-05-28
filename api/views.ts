import { Views } from '@prisma/client';

export class ViewsApi {
  constructor(public readonly baseUrl = `${process.env.API_URL}/views`) {}

  async getViews(): Promise<Views[]> {
    const res = await fetch(this.baseUrl, { method: 'GET' });

    if (!res.ok) {
      const error = await res.json();

      console.error(error);

      return [];
    }

    return res.json();
  }
}
