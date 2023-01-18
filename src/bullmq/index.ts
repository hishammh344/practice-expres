import { MetricsTime, Queue, QueueScheduler, Worker } from 'bullmq';
import IORedis from 'ioredis';
import { jobs } from './jobs';
import path from 'path';

//runs on seperate process
const processorFile = path.join(__dirname, '/process/sandbox.js');
//
enum QueueT {
  myQueue = 'x',
}
const scheduler = async () => {
  const connection = new IORedis();

  let queue: any = [];
  if (new QueueScheduler(QueueT.myQueue)) {
    queue = new Queue(QueueT.myQueue, { connection });
  }

  for (let x = 0; x < jobs.length; x++) {
    await queue.add(jobs[x].name, jobs[x], {
      repeat: {
        every: jobs[x].repeat,
      },
      removeOnComplete: true,
      lifo: jobs[x].now ? jobs[x].now : false,
    });
  }

  new Worker(QueueT.myQueue, processorFile, {
    connection,
    metrics: {
      maxDataPoints: MetricsTime.ONE_WEEK * 2,
    },
  });
};

export default scheduler;
