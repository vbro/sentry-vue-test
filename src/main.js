import Vue from 'vue'
import App from './App.vue'
import Router from "vue-router";
import SendSentryEvents from "./components/SendSentryEvents.vue"
import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";

Vue.config.productionTip = false

Vue.use(Router);

const routes = [
  { path: '/', component: SendSentryEvents },
  { path: '*', component: SendSentryEvents }
]

const router = new Router({
  routes: routes,
  mode: "history"
});


Sentry.init({
  Vue,
  dsn: process.env.VUE_APP_SENTRY_DSN,
  integrations: [
    new Integrations.BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: ["localhost", /^\//],
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});


new Vue({
  render: function (h) { return h(App) },
  router: router,
}).$mount('#app')
