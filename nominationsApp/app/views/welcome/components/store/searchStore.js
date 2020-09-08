import axios from 'axios';

export default {
    namespaced: true,

    state: {
        searchItems: [],
        total: 0,
        pages: 1,
        searchTerm: '',
    },

    mutations: {
        'set-search-items': (state, value) => {
            state.searchItems = value.data.Search;
            state.total = value.data.totalResults;
        },
        'set-pages': (state, value) => {
            state.pages = value;
        },
        'set-searchTerm': (state, value)  => {
            state.searchTerm = value;
        }
    },

    actions: {
        async searchOMDB({commit}, { search, page = '1' }) {
            await axios.get("http://omdbapi.com/?s="+search+"&apikey=df30e50c&page="+page)
            .then(response => {
                commit('set-search-items', response);
            })
            .catch(e => {
                console.error(e);
            })

            commit('set-searchTerm', search);
        },

        updatePages({commit}, pages) {
            commit('set-pages', pages);
        }
    }
}