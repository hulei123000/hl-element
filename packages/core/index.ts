import { makeInstaller } from "@hl-element/utils";
import components from "./components";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '@hl-element/theme/index.css'
library.add(fas) // 将图标添加到库(引进来)
const installer = makeInstaller(components);

export * from "../components";
export default installer;