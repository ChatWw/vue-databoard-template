import Vue from 'vue'
import SvgIcon from '@/components/vaIcon'

Vue.component(SvgIcon.name, SvgIcon)
const requireAll = (requireContext) => requireContext.keys().map(requireContext)
const req = require.context('./svg-icon', false, /\.svg$/)
requireAll(req)
