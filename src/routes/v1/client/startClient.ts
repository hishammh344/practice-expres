import { setSendEmail } from '@/src/redis/sets/sendEmail/sendEmail';
import express from 'express';

const app = express.Router();

app.get('/client', (req, res) => {
  setSendEmail(['test@gmail.com', 'test1@gmail.com']);
  res.json('set');
});

const startClient = {
  path: '/startClient',
  router: app,
  requireAuth: false,
};

export default startClient;
