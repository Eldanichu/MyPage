import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'virtual:uno.css'

import {
    // create naive ui
    create,
    NConfigProvider,
    // component
    NButton
} from 'naive-ui'

const naive = create({
    components: [
        NButton,
        NConfigProvider
    ]
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(naive)
app.mount('#app')
