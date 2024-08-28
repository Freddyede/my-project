import {createBrowserRouter} from "react-router-dom";
import {HomePage} from "../pages";
import {DashboardPage} from "../pages/DashboardPage.tsx";
import {DashboardLoader} from "../loaders";

export const routes = createBrowserRouter([
  {
    path: '/',
    index: true,
    Component: HomePage
  },
  {
    path: '/dashboard',
    loader:  DashboardLoader,
    Component: DashboardPage
  }
]);