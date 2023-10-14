import { BrowserRouter, useRoutes } from "react-router-dom";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const RoutePaths = () =>
  useRoutes([
    { path: "/", element: <Home /> },
    { path: "/busca/:cidade", element: <Home /> },
    { path: "*", element: <NotFound /> },
  ]);

const AppRoutes = () => (
  <BrowserRouter>
    <RoutePaths />
  </BrowserRouter>
);

export default AppRoutes;
