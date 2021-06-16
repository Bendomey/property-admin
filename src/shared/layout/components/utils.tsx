import {
  CogIcon,
  CollectionIcon,
  DocumentSearchIcon,
  ChartPieIcon,
  UserGroupIcon,
  ViewGridIcon as ViewGridIconOutline,
  CalendarIcon,
  ChatAlt2Icon,
  DocumentReportIcon,
} from "@heroicons/react/outline";
import {
  DASHBOARD,
  SETTINGS,
  THEMATIC_AREAS,
  CONTENT_MANAGEMENT,
  NEWS_MANAGEMENT,
  MESSAGING,
  POLL_SETUP,
  PUBLIC_INTERACTIONS,
  USER_MANAGEMENT,
} from "../../../navigation/constants";

export const navigation = [
  { name: "Overview", href: DASHBOARD, icon: ChartPieIcon },
  {
    name: "Thematic Areas",
    href: THEMATIC_AREAS,
    icon: ViewGridIconOutline,
  },
  {
    name: "Content Management",
    href: CONTENT_MANAGEMENT,
    icon: DocumentSearchIcon,
  },
  { name: "News Management", href: NEWS_MANAGEMENT, icon: CalendarIcon },
  { name: "Messaging", href: MESSAGING, icon: ChatAlt2Icon },
  { name: "Poll Setup", href: POLL_SETUP, icon: DocumentReportIcon },
  {
    name: "Public Interactions",
    href: PUBLIC_INTERACTIONS,
    icon: CollectionIcon,
  },
  {
    name: "User Management",
    href: USER_MANAGEMENT,
    icon: UserGroupIcon,
    current: true,
  },
  { name: "Settings", href: SETTINGS, icon: CogIcon },
];

export const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Update password", href: "#" },
];
