import { lazy } from 'react';

const homePageRouter = lazy(() => import('../views/homePage/homePage.router'));
const aboutUsRouter = lazy(() => import('../views/aboutUs/aboutUs.router'));
const planRouter = lazy(() => import('../views/Plan/plan.router'));

export const PublicRouter = [
  {
    path: '/',
    name: 'homePage',
    component: homePageRouter,
    exact: true,
  },
  {
    path: '/about',
    name: 'aboutUs',
    component: aboutUsRouter,
    exact: true,
  },
  {
    path: '/plan',
    name: 'plan',
    component: planRouter,
    exact: true,
  },
];
