<template>
  <div class="search-bar">
    <input
      type="text"
      class="search-text"
      autofocus
      placeholder="Search for artist, song or album..."
      v-model="searchText"
      @keypress.enter="search()"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: ""
    };
  },
  methods: {
    search() {
      this.$emit("search", this.searchText);
    }
  }
};
</script>

<style scoped lang="scss">
.search-bar {
  height: 75px;
  padding: 10px 40px;
  background-color: var(--light-gray);
  flex: 0 0 auto;
  .search-text {
    border: none;
    width: 100%;
    height: 100%;
    background-color: var(--light-gray);
    caret-color: var(--spotify-green);
    font-size: 200%;
    font-weight: bold;
    color: white;
    &:focus {
      outline: none;
    }
  }
}
</style>
