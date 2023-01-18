import express from 'express';
import startClient from '@/src/routes/v1/client/startClient';
import { Route } from '../types/route';
import buildRouter from '@/src/routes/utils/parseRoutes';

const v1Router = express.Router();

const routes: Route[] = [startClient];

buildRouter.router(v1Router);
buildRouter.routes(routes);

export default v1Router;
