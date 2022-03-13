import { ElButton, ElForm, ElInput } from 'element-plus'
import 'element-plus/dist/index.css'
import { App } from 'vue' // 内部有个App类型

const components = [ElButton, ElForm, ElInput]
export default function (app: App<Element>): void {
  for (const item of components) {
    app.component(item.name, item)
  }
}
