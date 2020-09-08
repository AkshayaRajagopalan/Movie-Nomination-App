export default {
    namespaced: true,

    state: {
        currentNominations: [],
    },

    getters: {
        numberSelected: state => {
            return state.currentNominations.length;
        }
    },

    mutations: {
        'add-movie': (state, value) => {
            state.currentNominations.push(value);
        },

        'remove-movie': (state, value) => {
            const match = state.currentNominations.filter(nominee => (nominee.title === value.title && nominee.year === value.year));
            const index = state.currentNominations.map(function(e) { 
                            return `${e.title}-${e.year}`; 
                        }).indexOf(`${value.title}-${value.year}`);
            state.currentNominations.splice(index, 1);
        },
    },

    actions: {
        nominateMovie({commit}, { title, year }) {
           commit('add-movie', { title: title, year: year })
        },

        removeMovie({commit}, nominee) {
            commit('remove-movie', nominee);
        }
    }
}