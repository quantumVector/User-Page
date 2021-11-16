import { Home, Login, NotFound, SignUp, UserPage } from "../pages";

export const routes = [
  {
    path: '/',
    element: Home,
    auth: false,
  },
  {
    path: '/user/:id',
    element: UserPage,
    auth: true,
  },
  {
    path: '/login',
    element: Login,
    auth: false,
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