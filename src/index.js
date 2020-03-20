import gtbutton from './components/button.vue'
import gtcollaps from './components/Collapse.vue'
import '@/assets/sass/gtris.scss'

const install = (Vue) => {
  Vue.component(gtbutton.name, gtbutton),
  Vue.component(gtcollaps.name, gtcollaps)
}

// auto install if used in browser
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  gtbutton
}

export default install