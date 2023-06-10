import { getTweet, type Tweet } from 'react-tweet/api';

export type TweetMap = Record<string, Tweet>;

export class TweetApi {
  async getTweets(ids: string[]): Promise<TweetMap> {
    const tweets = await Promise.all(ids.map((id) => getTweet(id)));

    return tweets.reduce<Record<string, Tweet>>((acc, curr) => {
      if (!curr) return acc;

      return { ...acc, [curr.id_str]: curr };
    }, {});
  }
}
