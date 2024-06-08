import type { App, Plugin } from 'vue'
import { each } from 'lodash-es'

type SFCWithInstall<T> = T & Plugin
// 注册插件
export function makeInstaller(components: Plugin[]) {
  const installer = (app: App) => each(components, (c) => app.use(c))
  return installer as Plugin
}

export function withInstall<T>(component: T) {
  (component as SFCWithInstall<T>).install = (app: App) => {
    const name = (component as any).name
    // register component
    app.component(name, component as Plugin)
  }
  return component as SFCWithInstall<T>
}