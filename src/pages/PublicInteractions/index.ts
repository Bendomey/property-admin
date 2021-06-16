import { PUBLIC_INTERACTIONS } from "../../navigation/constants";
import { BreadCrumbPageProp } from "../../shared/interfaces/misc";

export { default } from "./publicInteractions";

export const breadCrumbConfig: BreadCrumbPageProp[] = [
  { name: "Public Interactions", href: PUBLIC_INTERACTIONS, current: true },
];
