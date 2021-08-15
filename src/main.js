import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router' // проще работа с ссылками и вьюшками - для синг пейдж приложения
createApp(App).use(router).mount('#app') // инициализация приложения - метод Вьюшки
