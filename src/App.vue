<template>
  <div id="app">
    <app-spotify-search></app-spotify-search>
  </div>
</template>

<script>
import SpotifySearch from "./components/SpotifySearch";

export default {
  components: {
    appSpotifySearch: SpotifySearch
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

:root {
  --lighter-gray: #666666;
  --light-gray: #3b3b3b;
  --dark-gray: #292929;
  --spotify-green: #00a10d;
  --main-text-color: white;
}

html,
body {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--main-text-color);
  background-color: var(--dark-gray);
  margin: 0;
  padding: 0;
  height: 100vh;

  #app {
    height: 100vh;
  }
  a {
    text-decoration: none;
    color: var(--main-text-color);
  }
}
</style>
