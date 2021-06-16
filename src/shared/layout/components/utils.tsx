import {
  DocumentSearchIcon,
  ChartPieIcon,
  UserGroupIcon,
  ViewGridIcon as ViewGridIconOutline,
} from "@heroicons/react/outline";
import {
  DASHBOARD,
  REQUESTS,
  PROPERTIES,
  PUBLIC_INTERACTIONS,
  CLIENT_MANAGEMENT,
  ADMIN_MANAGEMENT,
} from "../../../navigation/constants";

export const navigation = [
  { name: "Overview", href: DASHBOARD, icon: ChartPieIcon },
  {
    name: "Requests",
    href: REQUESTS,
    icon: DocumentSearchIcon,
  },
  {
    name: "Properties",
    href: PROPERTIES,
    icon: ViewGridIconOutline,
  },

  {
    name: "Clients",
    href: CLIENT_MANAGEMENT,
    icon: UserGroupIcon,
    current: true,
  },
  {
    name: "Administrators",
    href: ADMIN_MANAGEMENT,
    icon: UserGroupIcon,
    current: true,
  },
  // { name: "Settings", href: SETTINGS, icon: CogIcon },
];

export const configurations = [
  {
    name: "Public Interactions",
    href: PUBLIC_INTERACTIONS,
    bgColorClass: "bg-indigo-500",
  },
  // { name: "Human Resources", href: "#", bgColorClass: "bg-green-500" },
  // { name: "Customer Success", href: "#", bgColorClass: "bg-yellow-500" },
];

export const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Update password", href: "#" },
];
