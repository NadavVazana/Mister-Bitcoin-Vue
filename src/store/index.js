import { createStore } from 'vuex'
import contact from './modules/contact.js'
import user from './modules/user.js'
// Create a new store instance.
const storeOptions = {
    strict:true,
    state () {
      return {
        count: 0
      }
    },
    mutations: {
      increment (state) {
        state.count++
      }
    },
    getters:{

    },
    modules:{
        contact,
        user
    }
  }
const store = createStore(storeOptions)

export default store
// Install the store instance as a plugin