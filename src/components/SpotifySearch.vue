<template>
  <div class="spotify-search">
    <app-search-bar @search="onSearch($event)"></app-search-bar>
    <app-search-results class="search-results"></app-search-results>
  </div>
</template>

<script>
import SearchBar from "./SearchBar/SearchBar";
import SearchResults from "./SearchResults/SearchResults";

export default {
  components: {
    appSearchBar: SearchBar,
    appSearchResults: SearchResults
  },
  data() {
    return {
      searchResults: []
    };
  },
  methods: {
    onSearch(searchText) {
      this.$http
        .get("search", {
          params: {
            q: searchText,
            type: "album,artist,track"
          }
        })
        .then(res => {
          console.log(res);
        });
    }
  }
};
</script>

<style scoped lang="scss">
.spotify-search {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .search-results {
    flex-grow: 1;
  }
}
</style>
