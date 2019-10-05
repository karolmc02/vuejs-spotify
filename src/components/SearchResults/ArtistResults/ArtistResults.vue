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
  props: ["results"],
  computed: {
    artists() {
      return this.results.artists;
    }
  }
};
</script>

<style lang="scss" scoped>
.artist-results {
  display: flex;
}
</style>
