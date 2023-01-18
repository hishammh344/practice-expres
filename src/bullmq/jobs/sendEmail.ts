import redisClient from '@/src/redis/redisClient';
import { RedisSets } from '@/src/redis/sets';

const init = async () => {
  const data = await redisClient.get(RedisSets.sendEmail);
  const dataR = JSON.stringify(data);
  console.log('email', dataR);
  return dataR;
};

const sendEmail = {
  name: 'sendEmail',
  execute: init,
  repeat: 5000,
  now: true,
};
export default sendEmail;
