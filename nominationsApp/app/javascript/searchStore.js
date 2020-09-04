import createPersistedState from 'vuex-persistedstate';
import axios from 'axios';

export default {

    plugins: [createPersistedState()],

    state: {
        searchItems: null,
    },

    mutations: {
        'set-search-items': (state, value) => {
            state.searchItems = value;
        }
    },

    actions: {
        async searchOMDB({commit, dispatch}, search) {
            console.log('here');
            await axios.get("http://omdbapi.com/?s="+search+"&apikey=df30e50c")
            .then(reponse => {
                commit('set-search-items', response)
            })
            .catch(e => {
                console.error();
            })
        }
    }
}