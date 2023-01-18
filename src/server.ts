import { server } from '@/src/express';
import { getEnvVar } from '@/src/config/envVars';

export const connectServer = () => {
  server.listen(getEnvVar('HTTP_PORT'), () => {
    console.log(`Server connected on port ${getEnvVar('HTTP_PORT')}`);
  });
};
