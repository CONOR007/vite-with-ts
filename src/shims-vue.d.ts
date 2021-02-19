// 补充类型声明

declare module "*.vue" {
  // Vue 3
  import { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component

  // Vue 2
  // import Vue from 'vue'
  // export default  Vue
}
