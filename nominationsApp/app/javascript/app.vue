<template>
  <div id="app">
    <SearchBar
      class="searchBar"
    ></SearchBar>
  </div>
</template>

<script>
import SearchBar from '../views/welcome/components/searchBar';

export default {
  components: {
    SearchBar
  },

  data() {
    return {
      message: "Hello Vue!"
    }
  }
}
</script>

<style scoped>
#app {
  text-align: center;
}
</style>
