import { Router } from 'express';
import { Route } from '../types/route';

type RouterType = Router;
type RoutesType = Array<Route>;
type MiddlewareType = () => void;

export const build = () => {
  let pingRouter: RouterType;
  const router = (router: RouterType) => {
    pingRouter = router;
  };
  const routes = (routes: RoutesType) => {
    routes.map(routes => pingRouter.use(routes.router));
  };
  const middleware = (middleware: MiddlewareType) => {
    pingRouter.use(middleware);
  };
  return {
    router,
    routes,
    middleware,
  };
};

const buildRouter = build();

export default buildRouter;
