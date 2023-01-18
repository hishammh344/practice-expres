import express from 'express';
import routes from '@/src/routes';

export const server = express();

server.use(routes);
