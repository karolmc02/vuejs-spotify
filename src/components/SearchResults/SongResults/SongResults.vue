<template>
  <div class="song-results">
    <app-song v-for="song in songs" :key="song.id" :song="song"></app-song>
  </div>
</template>

<script>
import Song from "./Song";
export default {
  components: {
    appSong: Song
  },
  props: ["results"],
  computed: {
    songs() {
      console.log(this.results.songs);
      return this.results.songs;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
