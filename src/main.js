// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {
  createRouter
} from './router'

import { createStore } from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
export function createApp () {
  const store = createStore()
  const router = createRouter()
  const app = new Vue({
    router,
    store,
    components: {
      App
    },
    template: '<App/>'
  })

  return {app, router, store}
}
