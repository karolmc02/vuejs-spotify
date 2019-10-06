<template>
  <div>
    <nav>
      <ul>
        <li
          :class="{active: resultsView == 'app-all-results'}"
          @click="resultsView = 'app-all-results'"
        >
          <a href="#">All</a>
        </li>
        <li
          :class="{active: resultsView == 'app-artist-results'}"
          @click="resultsView = 'app-artist-results'"
        >
          <a href="#">Artist</a>
        </li>
        <li
          :class="{active: resultsView == 'app-song-results'}"
          @click="resultsView = 'app-song-results'"
        >
          <a href="#">Songs</a>
        </li>
        <li
          :class="{active: resultsView == 'app-album-results'}"
          @click="resultsView = 'app-album-results'"
        >
          <a href="#">Albums</a>
        </li>
      </ul>
    </nav>
    <div class="results">
      <transition mode="out-in">
        <component :is="resultsView" :results="searchResults"></component>
      </transition>
    </div>
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
  props: ["searchResults"]
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
.results {
  margin: 15px 20px;
}
.v-enter {
  opacity: 0;
}
.v-enter-active {
  transition: opacity 0.25s;
}
.v-leave-active {
  transition: opacity 0.25s;
  opacity: 0;
}
</style>
