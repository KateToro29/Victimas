import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css'


const app = createApp(App);

app.use(PrimeVue,  { 
	unstyled: false,
	theme: {
		preset: Aura 
	}
});

app.mount('#app');
