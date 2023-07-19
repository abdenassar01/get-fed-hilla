import MainLayout from "Frontend/views/MainLayout.js";
import { lazy } from "react";
import {
  createBrowserRouter,
  IndexRouteObject,
  NonIndexRouteObject,
  useMatches,
} from "react-router-dom";
import { Home } from "Frontend/views/index.js";

import { PrivateRoute } from "Frontend/common/private-route/private-route.js";

const Error = lazy(async () => import("Frontend/common/error/error.js"));
const Logout = lazy(async () => import("Frontend/views/auth/logout/logout.js"));
const Checkout = lazy(
  async () => import("Frontend/views/checkout/checkout.js")
);
const CategoryDetails = lazy(
  async () => import("Frontend/views/menu/category/category-details.js")
);
const MenuLayout = lazy(
  async () => import("Frontend/views/menu/menu-layout.js")
);
const About = lazy(async () => import("Frontend/views/about/About.js"));
const Drinks = lazy(async () => import("Frontend/views/drink/drinks.js"));
const Contact = lazy(async () => import("Frontend/views/contact/contact.js"));
const Login = lazy(async () => import("Frontend/views/auth/login/login.js"));
const Cart = lazy(async () => import("Frontend/views/cart/cart.js"));
const AdminLayout = lazy(
  async () => import("Frontend/views/admin/admin-layout.js")
);
const Management = lazy(
  async () => import("Frontend/views/admin/management/management.js")
);
const MealsManagement = lazy(
  async () =>
    import(
      "Frontend/views/admin/management/meals-management/meals-management.js"
    )
);
const AddMeal = lazy(
  async () =>
    import(
      "Frontend/views/admin/management/meals-management/add-meal/add-meal.js"
    )
);
const UpdateMeal = lazy(
  async () =>
    import(
      "Frontend/views/admin/management/meals-management/update-meal/update-meal.js"
    )
);
const DrinksManagement = lazy(
  async () =>
    import(
      "Frontend/views/admin/management/drinks-management/drinks-management.js"
    )
);
const AddDrink = lazy(
  async () =>
    import(
      "Frontend/views/admin/management/drinks-management/add-drink/add-drink.js"
    )
);
const UpdateDrink = lazy(
  async () =>
    import(
      "Frontend/views/admin/management/drinks-management/update-drink/update-drink.js"
    )
);
const SubCategoriesManagement = lazy(
  async () =>
    import(
      "Frontend/views/admin/management/subcategories-management/subcategories-management.js"
    )
);
const AddSubcategory = lazy(
  async () =>
    import(
      "Frontend/views/admin/management/subcategories-management/add-subcategory/add-subcategory.js"
    )
);
const UpdateSubcategory = lazy(
  async () =>
    import(
      "Frontend/views/admin/management/subcategories-management/update-subcategory/update-subcategory.js"
    )
);
const IngredientsManagement = lazy(
  async () =>
    import(
      "Frontend/views/admin/management/ingredients-management/ingredients-management.js"
    )
);
const AddIngredient = lazy(
  async () =>
    import(
      "Frontend/views/admin/management/ingredients-management/add-ingredient/add-ingredient.js"
    )
);
const UpdateIngredient = lazy(
  async () =>
    import(
      "Frontend/views/admin/management/ingredients-management/update-ingredient/update-ingredient.js"
    )
);
const Dashboard = lazy(
  async () => import("Frontend/views/admin/dashboard/dashboard.js")
);
const Orders = lazy(
  async () => import("Frontend/views/admin/orders/orders.js")
);
const UpdatePassword = lazy(
  async () => import("Frontend/views/admin/update-password/update-password.js")
);
const UserManagement = lazy(
  async () => import("Frontend/views/admin/users-management/user-management.js")
);
const CustomMealIngredients = lazy(
  async () =>
    import(
      "Frontend/views/custom-meal/custom-meal-ingredients/custom-meal-ingredients.js"
    )
);
const MealDetails = lazy(
  async () => import("Frontend/views/meal/meal-details/meal-details.js")
);
const CustomizeMeal = lazy(
  async () => import("Frontend/views/custom-meal/customise-meal.js")
);
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
    errorElement: <Error />,
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
        path: "/admin",
        element: <AdminLayout />,
        children: [
          {
            path: "/admin/managements",
            element: <Management />,
            children: [
              {
                path: "/admin/managements/meals",
                element: <MealsManagement />,
                children: [
                  {
                    path: "/admin/managements/meals/new",
                    element: <AddMeal />,
                  },
                  {
                    path: "/admin/managements/meals/update",
                    element: <UpdateMeal />,
                  },
                ],
              },
              {
                path: "/admin/managements/drinks",
                element: <DrinksManagement />,
                children: [
                  {
                    path: "/admin/managements/drinks/new",
                    element: <AddDrink />,
                  },
                  {
                    path: "/admin/managements/drinks/update",
                    element: <UpdateDrink />,
                  },
                ],
              },
              {
                path: "/admin/managements/subcategories",
                element: <SubCategoriesManagement />,
                children: [
                  {
                    path: "/admin/managements/subcategories/new",
                    element: <AddSubcategory />,
                  },
                  {
                    path: "/admin/managements/subcategories/update",
                    element: <UpdateSubcategory />,
                  },
                ],
              },
              {
                path: "/admin/managements/ingredients",
                element: <IngredientsManagement />,
                children: [
                  {
                    path: "/admin/managements/ingredients/new",
                    element: <AddIngredient />,
                  },
                  {
                    path: "/admin/managements/ingredients/update",
                    element: <UpdateIngredient />,
                  },
                ],
              },
            ],
          },
          {
            path: "/admin/board",
            element: <Dashboard />,
          },
          {
            path: "/admin/orders",
            element: <Orders />,
          },
          {
            path: "/admin/users",
            element: <UserManagement />,
          },
          {
            path: "/admin/security",
            element: <UpdatePassword />,
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
        element: <Drinks />,
      },
      {
        path: "/custom-meal",
        element: <CustomizeMeal />,
        children: [
          {
            path: "/custom-meal/:subCategoryId",
            element: <CustomMealIngredients />,
          },
        ],
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
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: "/*",
        element: <Error />,
      },
    ],
  },
];

const router = createBrowserRouter([...routes]);
export default router;
