import { App } from 'vue'
import registerElement from './register-element'

export function globalRegister(app: App<Element>): void {
  registerElement(app)
  // app.use(registerElement)
  // 以后可能还需要注册别的内容
}
