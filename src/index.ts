import { connectServer } from '@/src/server';
import scheduler from '@/src/bullmq';
import { initRedis } from './redis';

connectServer();
initRedis();
scheduler();
