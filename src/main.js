import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import registerGlobalComponents from './registerGlobalComponents'

const app = createApp(App)

registerGlobalComponents(app)

app.mount('#app')
