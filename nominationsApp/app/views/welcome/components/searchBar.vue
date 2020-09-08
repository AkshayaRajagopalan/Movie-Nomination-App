<template>
    <input class="search" type="text" v-bind="searchParam" @input="searchMovie" placeholder="Search">
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    data() {
        return {
            searchParam: "",
        }
    },

    computed: {
        ...mapState('searchStore', ['searchItems']),
    },

    methods: {
        ...mapActions('searchStore', ['searchOMDB']),

        async searchMovie(e) {
            await this.searchOMDB({ search: e.target.value });
        }
    }
};
</script>

<style scoped>
.search {
    font-family: Georgia, "Times New Roman", Times, serif;
    background: rgba(255,255,255,.1);
    border: none;
    border-radius: 4px;
    font-size: 15px;
    margin: 0;
    outline: 0;
    width: 30vw;
    padding: 10px;
    box-sizing: border-box; 
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box; 
    background-color: #e8eeef;
    color:#8a97a0;
    -webkit-box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
    box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
    margin-bottom: 30px;
}
</style>