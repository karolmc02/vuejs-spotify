<template>
  <div>
    <nav>
      <ul>
        <li>
          <a href="#" @click.prevent="resultsView = 'app-all-results'">All</a>
        </li>
        <li>
          <a href="#" @click.prevent="resultsView = 'app-artist-results'"
            >Artist</a
          >
        </li>
        <li>
          <a href="#" @click.prevent="resultsView = 'app-song-results'"
            >Songs</a
          >
        </li>
        <li>
          <a href="#" @click.prevent="resultsView = 'app-album-results'"
            >Albums</a
          >
        </li>
      </ul>
    </nav>
    <section>
      <component :is="resultsView"></component>
    </section>
    <!-- <app-all-results></app-all-results>
    <app-artist-results></app-artist-results>
    <app-song-results></app-song-results>
    <app-album-results></app-album-results> -->
  </div>
</template>

<script>
import AllResults from "./AllResults/AllResults";
import AlbumResults from "./AlbumResults/AlbumResults";
import SongResults from "./SongResults/SongResults";
import ArtistResults from "./ArtistResults/ArtistResults";

export default {
  components: {
    appAllResults: AllResults,
    appArtistResults: ArtistResults,
    appSongResults: SongResults,
    appAlbumResults: AlbumResults
  },
  data() {
    return {
      resultsView: "app-all-results"
    };
  }
};
</script>

<style></style>
