<template>
  <div class="all-results">
    <div v-if="results.artists">
      <app-artist-results :results="results" :resultsLimit="8"></app-artist-results>
    </div>
    <div v-if="results.songs">
      <app-song-results :results="results" :resultsLimit="8"></app-song-results>
    </div>
    <div v-if="results.albums">
      <app-album-results :results="results" :resultsLimit="8"></app-album-results>
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

<style lang="scss">
.results-title {
  border-bottom: 1px solid var(--light-gray);
  margin-bottom: 0;
}
.no-results {
  color: var(--gray-text-color);
}
</style>
