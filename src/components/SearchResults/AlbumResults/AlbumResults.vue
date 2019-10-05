<template>
  <div class="album-results">
    <h2 class="results-title">Albums</h2>
    <div class="results">
      <app-album v-for="album in albums" :key="album.id" :album="album"></app-album>
    </div>
    <p class="no-results" v-if="albums.length == 0">No albums found</p>
  </div>
</template>

<script>
import Album from "./Album";
export default {
  components: {
    appAlbum: Album
  },
  props: {
    results: {
      type: Object
    },
    resultsLimit: {
      type: Number,
      default: 20
    }
  },
  computed: {
    albums() {
      return (this.results.albums || []).filter(
        (album, index) => index < this.resultsLimit
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.album-results {
  .results {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
