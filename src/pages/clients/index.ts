import { CLIENT_MANAGEMENT } from "../../navigation/constants";
import { BreadCrumbPageProp } from "../../shared/interfaces/misc";

export { default } from "./clients";

export const breadCrumbConfig: BreadCrumbPageProp[] = [
  { name: "Clients", href: CLIENT_MANAGEMENT, current: true },
];
