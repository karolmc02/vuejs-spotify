<template>
  <div class="artist-results">
    <app-artist v-for="artist in artists" :key="artist.id" :artist="artist"></app-artist>
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
