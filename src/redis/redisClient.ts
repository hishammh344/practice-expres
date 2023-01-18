import { createClient } from 'redis';

const redis = () => {
  const client = createClient();

  client.on('error', err => {
    console.log('Error ' + err);
  });
  client.connect();
  console.log('redis connected.....');
  return client;
};
const redisClient = redis();
export default redisClient;
