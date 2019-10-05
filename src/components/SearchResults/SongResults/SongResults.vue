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
    songs() {
      return (this.results.songs || []).filter(
        (song, index) => index < this.resultsLimit
      );
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
