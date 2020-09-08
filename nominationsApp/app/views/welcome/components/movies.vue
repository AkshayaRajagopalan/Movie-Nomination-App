<template>
    <div id="items" class="gallery">
        <div v-for="(item, index) in searchItems" :key="index">
            <Movie
                :title="item.Title"
                :posterURL="item.Poster"
                :release="item.Year"
            ></Movie>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Movie from './movie';

export default {
  components: {
      Movie
  },

  data() {
    return {

    }
  },

  computed: {
      ...mapState('searchStore', ['total', 'searchItems']),
  },

  watch: {
      total: function(newValue) {
          this.updatePages(Math.ceil(newValue/10.0));
      }
  },

  methods: {
      ...mapActions('searchStore', ['updatePages'])
  }
}
</script>

<style scoped>
#app {
    text-align: center;
}

.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-gap: 1.5rem;
    padding: 0 3rem;
}
</style>
