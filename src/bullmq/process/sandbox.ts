import { SandboxedJob } from 'bullmq';
import { jobs } from '@/src/bullmq/jobs';

const process = async (job: SandboxedJob) => {
  for (let x = 0; x < jobs.length; x++) {
    runJob(job, jobs[x]);
  }
};

const runJob = (job: SandboxedJob, jobs: any) => {
  if (job.name === jobs.name) {
    console.log(jobs.execute());
  }
};
export default process;
