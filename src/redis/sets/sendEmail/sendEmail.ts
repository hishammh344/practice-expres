import { RedisSets } from '..';
import redisClient from '../../redisClient';

export const setSendEmail = async (email: Array<string>) => {
  redisClient.set(RedisSets.sendEmail, JSON.stringify(['test@gmail.com']));
};
