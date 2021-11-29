/*
 * @Author: depp.chen
 * @Date: 2021-11-15 15:24:40
 * @LastEditors: depp.chen
 * @LastEditTime: 2021-11-15 16:51:57
 * @Description: vue指令
 */
import type { App } from 'vue'
import { ElMessage } from 'element-plus'

export default function register(app: App): void {
  // 按钮防抖指令
  app.directive('throttling', {
    mounted(el: HTMLElement, binding) {
      const callback = binding.value
      const time = 500
      let preTime = 0
      el.addEventListener('click', (e) => {
        e.stopPropagation()
        const nowTime = new Date().getTime()
        if (!preTime || nowTime - preTime > time) {
          preTime = nowTime
          callback(binding.arg, e)
        } else {
          ElMessage({
            message: '操作频繁',
          })
        }
      })
    },
  })
}
