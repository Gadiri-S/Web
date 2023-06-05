import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as Sentry from "@sentry/vue";
import { MotionPlugin } from '@vueuse/motion'
import { library } from '@fortawesome/fontawesome-svg-core'
import { createHead } from 'unhead'
import VueCookieAcceptDecline from 'vue-cookie-accept-decline';
import 'vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css';
import Cookies from 'js-cookie';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
 import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
  import { faGooglePlusG} from '@fortawesome/free-brands-svg-icons'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'
 import { faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faAt} from '@fortawesome/free-solid-svg-icons'
  import axios from "axios"
import { VueShowdown } from 'vue-showdown';
import VueGtag from "vue-gtag";
 const head = createHead()
//axios.defaults.withCredentials = true
/* add icons to the library */
library.add(faPhoneAlt,faGooglePlusG,faLinkedin,faAt)

Sentry.init({
   app:createApp(App),
  dsn: "https://b20c0fd5795340bfadeeac8051b2f5c3@o4505150420418560.ingest.sentry.io/4505150422515712",
});
createApp(App).config.errorHandler = (error, vm, info) => {
    // log the error to the console for debugging purposes
    console.error(error);
  
    // report the error to Sentry
    Sentry.captureException(error);
  };
const app = createApp(App)
  .use(store)
  .use(router)
  .use(MotionPlugin)
  .component('font-awesome-icon', FontAwesomeIcon)
  .component('VueShowdown',VueShowdown)
  .component('vue-cookie-accept-decline', VueCookieAcceptDecline)
  .use(VueGtag, {
    config: { id: "G-TY4BZD5GGX" ,
    params: {
      send_page_view: false
    }
  },
  bootstrap: Cookies.get('ga-cookie') === 'true'
  })

 

const rootComponent = app.mount('#app');

//axios.defaults.baseURL = 'http://localhost:1337/api/';

axios.defaults.baseURL = 'https://api.businessprowebsolutions.com/api/'
