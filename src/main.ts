import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

import i18n from './i18n.ts'

const app = createApp(App)
app.use(router);
app.use(i18n)

app.mount('#app')
