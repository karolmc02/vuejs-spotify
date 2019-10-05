<template>
  <div class="song-results">
    <h2 class="results-title">Songs</h2>
    <div class="results">
      <app-song v-for="song in songs" :key="song.id" :song="song"></app-song>
    </div>
    <p class="no-results" v-if="songs.length == 0">No songs found</p>
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
