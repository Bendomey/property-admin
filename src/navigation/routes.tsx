import { lazy } from "react";
import { RouteProp } from "../shared/interfaces/misc";
import { DASHBOARD } from "./constants";

const Dashboard = lazy(() => import("../pages/dashboard"));

const routes: RouteProp[] = [
  { component: Dashboard, name: "Dashboard", path: DASHBOARD, exact: true },
];

export default routes;
