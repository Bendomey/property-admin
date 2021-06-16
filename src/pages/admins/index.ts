import { ADMIN_MANAGEMENT } from "../../navigation/constants";
import { BreadCrumbPageProp } from "../../shared/interfaces/misc";

export { default } from "./admins";

export const breadCrumbConfig: BreadCrumbPageProp[] = [
  { name: "Administrators", href: ADMIN_MANAGEMENT, current: true },
];
