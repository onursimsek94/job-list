import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

import {
  Button,
  Select,
  Option,
  Input,
} from 'element-ui'

locale.use(lang)

Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.use(Input)
