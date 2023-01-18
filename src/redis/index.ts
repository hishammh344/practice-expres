import redisClient from './redisClient';

export const initRedis = async () => {
  // delete all sets

  await redisClient.flushAll().then(v => {
    console.log('Redis reset status: ' + v);
  });

  // init sets

  console.log('Redis is ready...');
};
