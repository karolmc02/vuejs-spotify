<template>
  <div>
    <nav>
      <ul>
        <li
          :class="{active: resultsView == 'app-all-results'}"
          @click.prevent="resultsView = 'app-all-results'"
        >
          <a href="#">All</a>
        </li>
        <li
          :class="{active: resultsView == 'app-artist-results'}"
          @click.prevent="resultsView = 'app-artist-results'"
        >
          <a href="#">Artist</a>
        </li>
        <li
          :class="{active: resultsView == 'app-song-results'}"
          @click.prevent="resultsView = 'app-song-results'"
        >
          <a href="#">Songs</a>
        </li>
        <li
          :class="{active: resultsView == 'app-album-results'}"
          @click.prevent="resultsView = 'app-album-results'"
        >
          <a href="#">Albums</a>
        </li>
      </ul>
    </nav>
    <section>
      <component :is="resultsView"></component>
    </section>
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
  },
  props: ["searchResults"],
  watch: {
    searchResults(newData, oldData) {
      console.log(newData);
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  width: 30vw;
  margin: 20px auto;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-around;
    li {
      padding: 5px 10px;
      font-size: 120%;
      cursor: pointer;
      &:hover {
        a {
          color: var(--spotify-green);
        }
      }
      &.active {
        position: relative;
        &::after {
          content: "";
          width: 25px;
          position: absolute;
          top: 30px;
          left: 50%;
          transform: translateX(-50%);
          border-bottom: 5px solid var(--spotify-green);
        }
      }
    }
  }
}
</style>
