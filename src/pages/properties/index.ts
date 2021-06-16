import { PROPERTIES } from "../../navigation/constants";
import { BreadCrumbPageProp } from "../../shared/interfaces/misc";

export { default } from "./properties";

export const breadCrumbConfig: BreadCrumbPageProp[] = [
  { name: "Properties", href: PROPERTIES, current: true },
];
