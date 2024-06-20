import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import HlElement from 'hl-element'
import 'hl-element/dist/index.css'

const app = createApp(App)
app.use(HlElement).mount('#app')
