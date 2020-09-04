<template>
    <input class="search" type="text" v-bind="searchParam" @change="searchMovie" placeholder="Search">
</template>

<script>
import { mapActions } from 'vuex';
import searchStore from '../../../javascript/searchStore';

export default {
    data() {
        return {
            searchParam: "",
        }
    },

    methods: {
        ...mapActions(['searchOMDB']),

        searchMovie(e) {
            this.searchOMDB(e.target.value);
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