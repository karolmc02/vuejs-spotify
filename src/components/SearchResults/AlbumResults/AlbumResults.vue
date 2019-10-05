<template>
  <div class="album-results">
    <app-album v-for="album in albums" :key="album.id" :album="album"></app-album>
  </div>
</template>

<script>
import Album from "./Album";
export default {
  components: {
    appAlbum: Album
  },
  props: ["results"],
  computed: {
    albums() {
      return this.results.albums;
    }
  }
};
</script>

<style lang="scss" scoped>
.album-results {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
