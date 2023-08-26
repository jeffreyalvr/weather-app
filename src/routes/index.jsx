import { BrowserRouter, useRoutes } from "react-router-dom";

import Home from "../pages/Home";
import Listagem from "../pages/Listagem";
import NotFound from "../pages/NotFound";

const RoutePaths = () => {
  useRoutes([
    { path: "/", element: <Home /> },
    { path: "/busca/:cidade", element: <Listagem /> },
    { path: "/404", element: <NotFound /> },
    { path: "*", element: <NotFound /> },
  ]);
};

const AppRoutes = () => (
  <BrowserRouter>
    <RoutePaths />
  </BrowserRouter>
);

export default AppRoutes;
