import { REQUESTS } from "../../navigation/constants";
import { BreadCrumbPageProp } from "../../shared/interfaces/misc";

export { default } from "./requests";

export const breadCrumbConfig: BreadCrumbPageProp[] = [
  { name: "Requests", href: REQUESTS, current: true },
];
