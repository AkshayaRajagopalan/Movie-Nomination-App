// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex';
import App from '../app.vue'
import searchStore from '../../views/welcome/components/store/searchStore.js'
import nominationStore from '../../views/welcome/components/store/modules/nominationStore.js'
import VueSimpleAlert from "vue-simple-alert";
import createPersistedState from 'vuex-persistedstate';

Vue.use(TurbolinksAdapter)
Vue.use(Vuex)
Vue.use(VueSimpleAlert);

const persistedStateOptions = {
  paths: [
    'nominationStore',
  ]
}
Vue.component('app', App)
const store = new Vuex.Store({
  modules: {
    nominationStore,
    searchStore
  },
  plugins: [createPersistedState(persistedStateOptions)]
})

document.addEventListener('turbolinks:load', () => {
  const app = new Vue({
    el: '[data-behaviour="vue"]',
    store,
  })
})