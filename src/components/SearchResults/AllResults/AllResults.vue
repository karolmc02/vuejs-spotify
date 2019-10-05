<template>
  <div class="all-results">
    <div v-if="results.artists">
      <h2 class="results-title">Artists</h2>
      <app-artist-results :results="results" :resultsLimit="7"></app-artist-results>
    </div>
    <div v-if="results.songs">
      <h2 class="results-title">Songs</h2>
      <app-song-results :results="results" :resultsLimit="7"></app-song-results>
    </div>
    <div v-if="results.albums">
      <h2 class="results-title">Albums</h2>
      <app-album-results :results="results" :resultsLimit="7"></app-album-results>
    </div>
  </div>
</template>

<script>
import ArtistResults from "../ArtistResults/ArtistResults";
import SongResults from "../SongResults/SongResults";
import AlbumResults from "../AlbumResults/AlbumResults";
export default {
  components: {
    appArtistResults: ArtistResults,
    appSongResults: SongResults,
    appAlbumResults: AlbumResults
  },
  props: {
    results: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
.results-title {
  border-bottom: 1px solid var(--light-gray);
}
</style>
