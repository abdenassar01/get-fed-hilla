import MainLayout from "Frontend/views/MainLayout.js";
import { lazy } from "react";
import {
  createBrowserRouter,
  IndexRouteObject,
  NonIndexRouteObject,
  useMatches,
} from "react-router-dom";
import { Home } from "Frontend/views/index.js";

const CategoryDetails = lazy(
  async () => import("Frontend/views/category/category-details.js")
);
const MenuLayout = lazy(
  async () => import("Frontend/views/menu/menu-layout.js")
);
const About = lazy(async () => import("Frontend/views/about/About.js"));

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
        children: [{ path: "/menu/:category", element: <CategoryDetails /> }],
      },
    ],
  },
];

const router = createBrowserRouter([...routes]);
export default router;
