<template>
  <div id="app">
    <div class="searchWrapper">
      <SearchBar class="searchBar"></SearchBar>
      <button v-if="currentNominations.length>0" @click="showNominations = true;" class="notification">
        <span>Nominations</span>
        <span class="badge">{{ currentNominations.length }}</span>
      </button>
    </div>
    <Movies></Movies>
    <div v-if="pages > 1" class="wrapper">
      <div
        v-for="(n, index) in pages"
        class="pagination"
        :key="index"
      >
        <button class="pagebtn" @click="changePage">{{ n }}</button>
      </div>
    </div>
    <modal
      v-if="showNominations"
      @close="showNominations = false"
    ></modal>
  </div>
</template>

<script>
import SearchBar from '../views/welcome/components/searchBar';
import Movies from "../views/welcome/components/movies";
import modal from "../views/welcome/components/modal";
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    SearchBar,
    Movies,
    modal
  },

  data() {
    return {
      showNominations: false,
    }
  },

  computed: {
    ...mapState('searchStore', ['pages', 'searchTerm']),
    ...mapState('nominationStore', ['currentNominations']),
  },

  methods: {
    ...mapActions('searchStore', ['searchOMDB']),

    async changePage(e) {
      await this.searchOMDB({ search: this.searchTerm, page: e.target.textContent });
    }
  }
}
</script>

<style scoped>
#app {
  text-align: center;
}

.wrapper {
  margin: 3rem;
}

.searchWrapper {
  display:inline-block;
}

.notification {
  background-color: darkslategrey;
  color: white;
  text-decoration: none;
  padding: 15px 10px;
  position: relative;
  border-radius: 7px;
  border: none;
  float: right;
  margin-left: 40px;
}

.notification:hover {
  background: rgb(165, 80, 80);
  cursor: pointer;
}

.notification .badge {
  position: absolute;
  top: -10px;
  right: -10px;
  padding: 5px 10px;
  border-radius: 50%;
  background-color: red;
  color: white;
}

.pagebtn {
  float: left;
}
</style>
