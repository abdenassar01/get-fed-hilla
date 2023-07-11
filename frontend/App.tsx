import router from "Frontend/routes.js";
import { RouterProvider } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./main.css";
export default function App() {
  return <RouterProvider router={router} />;
}
