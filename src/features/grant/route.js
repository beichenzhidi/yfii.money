import { GrantPage } from './';

export default {
  path: 'grant',
  childRoutes: [
    { path: 'grant', component: GrantPage, isIndex: true },
  ],
};
