import { createElement } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
// @ts-ignore
let global = window;
createRoot(document.getElementById("outlet")!).render(createElement(App));
