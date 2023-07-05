import MainLayout from "Frontend/views/MainLayout.js";
import { lazy } from "react";
import {
  createBrowserRouter,
  IndexRouteObject,
  NonIndexRouteObject,
  useMatches,
} from "react-router-dom";
import { Home } from "Frontend/views/index.js";
import MealDetails from "Frontend/views/meal-details/meal-details.js";

const CategoryDetails = lazy(
  async () => import("Frontend/views/category/category-details.js")
);
const MenuLayout = lazy(
  async () => import("Frontend/views/menu/menu-layout.js")
);
const About = lazy(async () => import("Frontend/views/about/About.js"));
const Drink = lazy(async () => import("Frontend/views/drink/drink.js"));
const Contact = lazy(async () => import("Frontend/views/contact/contact.js"));
const Login = lazy(async () => import("Frontend/views/auth/login/login.js"));
const Cart = lazy(async () => import("Frontend/views/cart/cart.js"));
const Register = lazy(
  async () => import("Frontend/views/auth/register/register.js")
);
const Reset = lazy(
  async () => import("Frontend/views/auth/reset-password/reset-password.js")
);

export type MenuProps = Readonly<{
  icon?: string;
  title?: string;
}>;

export type ViewMeta = Readonly<{ handle?: MenuProps }>;

type Override<T, E> = Omit<T, keyof E> & E;

export type IndexViewRouteObject = Override<IndexRouteObject, ViewMeta>;
export type NonIndexViewRouteObject = Override<
  Override<NonIndexRouteObject, ViewMeta>,
  {
    children?: ViewRouteObject[];
  }
>;
export type ViewRouteObject = IndexViewRouteObject | NonIndexViewRouteObject;

type RouteMatch = ReturnType<typeof useMatches> extends (infer T)[] ? T : never;

export type ViewRouteMatch = Readonly<Override<RouteMatch, ViewMeta>>;

export const useViewMatches = useMatches as () => readonly ViewRouteMatch[];

export const routes: readonly ViewRouteObject[] = [
  {
    element: <MainLayout />,
    handle: { icon: "null", title: "Main" },
    children: [
      {
        path: "/",
        element: <Home />,
        handle: { icon: "globe-solid", title: "Get Fed | order foods online" },
      },
      {
        path: "/about",
        element: <About />,
        handle: { icon: "globe-solid", title: "Get Fed | About us" },
      },
      {
        path: "/menu",
        element: <MenuLayout />,
        handle: {},
        children: [
          {
            path: "/menu/:category",
            element: <CategoryDetails category={1} />,
          },
        ],
      },
      {
        path: "/meal",
        children: [
          {
            path: "/meal/:meal",
            element: <MealDetails />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/drink",
        element: <Drink />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/reset",
        element: <Reset />,
      },
    ],
  },
];

const router = createBrowserRouter([...routes]);
export default router;
