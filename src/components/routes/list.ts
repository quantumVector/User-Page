import { Login, NotFound, Signup, UserPage } from "../pages";

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
    element: Signup,
    auth: false,
  },
  {
    path: '*',
    element: NotFound,
    auth: false,
  },
];