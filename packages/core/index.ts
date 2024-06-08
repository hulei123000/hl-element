import { makeInstaller } from "@hl-element/utils";
import components from "./components";
import '@hl-element/theme/index.css'
const installer = makeInstaller(components);

export * from "@hl-element/components";
console.log(installer)
export default installer;