import { lazy } from "react";
import { RouteProp } from "../shared/interfaces/misc";
import {
  DASHBOARD,
  REQUESTS,
  ADMIN_MANAGEMENT,
  CLIENT_MANAGEMENT,
  PROPERTIES,
  PUBLIC_INTERACTIONS,
} from "./constants";

// main page
const Dashboard = lazy(() => import("../pages/dashboard"));
const Requests = lazy(() => import("../pages/requests"));
const Properties = lazy(() => import("../pages/properties"));
const Clients = lazy(() => import("../pages/clients"));
const Admins = lazy(() => import("../pages/admins"));

//configurations
const PublicInteractions = lazy(() => import("../pages/PublicInteractions"));

const routes: RouteProp[] = [
  { component: Dashboard, name: "Dashboard", path: DASHBOARD, exact: true },
  { component: Requests, name: "Requests", path: REQUESTS, exact: true },
  { component: Properties, name: "Properties", path: PROPERTIES, exact: true },
  { component: Clients, name: "Clients", path: CLIENT_MANAGEMENT, exact: true },
  { component: Admins, name: "Admins", path: ADMIN_MANAGEMENT, exact: true },
  {
    component: PublicInteractions,
    name: "Public Interactions",
    path: PUBLIC_INTERACTIONS,
    exact: true,
  },
];

export default routes;
