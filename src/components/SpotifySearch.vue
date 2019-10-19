<template>
  <div class="spotify-search">
    <app-search-bar @search="onSearch($event)"></app-search-bar>
    <app-search-results class="search-results" :searchResults="results"></app-search-results>
  </div>
</template>

<script>
import SearchBar from "./SearchBar/SearchBar";
import SearchResults from "./SearchResults/SearchResults";
import { debounce } from "../utils";

export default {
  components: {
    appSearchBar: SearchBar,
    appSearchResults: SearchResults
  },
  data() {
    return {
      results: {}
    };
  },
  methods: {
    onSearch(searchText) {
      if (searchText) {
        this.$http
          .get("search", {
            params: {
              q: searchText,
              type: "album,artist,track"
            }
          })
          .then(res => {
            const results = {
              artists: res.body.artists.items,
              songs: res.body.tracks.items,
              albums: res.body.albums.items
            };
            this.results = results;
          });
      }
    }
  },
  created() {
    this.onSearch = debounce(this.onSearch, 500);
  }
};
</script>

<style scoped lang="scss">
.spotify-search {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .search-results {
    flex: 0 1 auto;
  }
}
</style>
