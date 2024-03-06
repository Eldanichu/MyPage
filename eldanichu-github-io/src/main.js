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
    NButton,
    NProgress,
    NPopover,
    NPopconfirm,
    NBadge,
    NAlert,
    NColorPicker,
    NCheckbox,
    NInput,
    NDynamicInput,
    NForm,
    NSlider,
    NSelect,
    NSwitch,
    NCountdown
} from 'naive-ui'

const naive = create({
    components: [
        NButton,
        NProgress,
        NPopover,
        NPopconfirm,
        NBadge,
        NAlert,
        NColorPicker,
        NConfigProvider,
        NCheckbox,
        NInput,
        NDynamicInput,
        NForm,
        NSlider,
        NSelect,
        NSwitch,
        NCountdown
    ]
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(naive)
app.mount('#app')
