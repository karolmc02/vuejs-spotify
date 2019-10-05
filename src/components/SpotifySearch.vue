<template>
  <div class="spotify-search">
    <app-search-bar></app-search-bar>
    <app-search-results class="search-results"></app-search-results>
  </div>
</template>

<script>
import SearchBar from "./SearchBar/SearchBar";
import SearchResults from "./SearchResults/SearchResults";

export default {
  components: {
    "app-search-bar": SearchBar,
    "app-search-results": SearchResults
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
