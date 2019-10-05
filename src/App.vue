<template>
  <div id="app">
    <app-spotify-search></app-spotify-search>
  </div>
</template>

<script>
import SpotifySearch from "./components/SpotifySearch";

export default {
  components: {
    "app-spotify-search": SpotifySearch
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

:root {
  --lighter-gray: #666666;
  --light-gray: #444444;
  --dark-gray: #292929;
  --spotify-green: #008d0c;
}

html,
body {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  background-color: var(--dark-gray);
  margin: 0;
  padding: 0;
  height: 100vh;

  #app {
    height: 100vh;
  }
}
</style>
