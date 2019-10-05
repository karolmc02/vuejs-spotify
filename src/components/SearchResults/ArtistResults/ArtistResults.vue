<template>
  <div class="artist-results">
    <h2 class="results-title">Artists</h2>
    <div class="results">
      <app-artist v-for="artist in artists" :key="artist.id" :artist="artist"></app-artist>
    </div>
    <p class="no-results" v-if="artists.length == 0">No artists found</p>
  </div>
</template>

<script>
import Artist from "./Artist";
export default {
  components: {
    appArtist: Artist
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
    artists() {
      return (this.results.artists || []).filter(
        (artist, index) => index < this.resultsLimit
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.artist-results {
  .results {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
}
</style>
