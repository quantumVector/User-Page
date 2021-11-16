import { Login, NotFound, SignUp, UserPage } from "../pages";

export const routes = [
  {
    path: '/',
    element: Login,
    auth: false,
  },
  {
    path: '/user/:id',
    element: UserPage,
    auth: true,
  },
  {
    path: '/signup',
    element: SignUp,
    auth: false,
  },
  {
    path: '*',
    element: NotFound,
    auth: false,
  },
];