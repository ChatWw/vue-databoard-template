import Vue from 'vue'
import '@/assets/icon/index'
import '@/assets/common.scss'
import 'amfe-flexible'
import tool from '@/utils/tool'
import STable from '@/components/sTable'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import './styles/element-variables.scss'

// 全局组件挂载
Vue.component('sTable', STable)
Vue.use(ElementUI)

// 全局工具挂载
Vue.prototype.$tool = tool
Vue.config.productionTip = false

export default Vue
