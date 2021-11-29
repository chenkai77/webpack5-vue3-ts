import type { App } from 'vue'
import SvgIcon from '@/components/common/svg/svg-icon.vue' // svg组件

const requireAll = (requireContext: any) =>
  requireContext.keys().map(requireContext)
const req = require.context('@/assets/svg', false, /\.svg$/)
requireAll(req)

export default function svgIconRegistered(app: App): void {
  app.component('SvgIcon', SvgIcon)
}
