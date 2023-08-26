import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import components from './components'

const app = createApp(App)

components.forEach(comp => {
    app.component(comp.name, comp)
})

app.use(store).use(router).mount('#app')