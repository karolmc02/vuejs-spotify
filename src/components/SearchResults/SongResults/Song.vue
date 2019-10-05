<template>
  <div class="song">
    <div class="song-name">
      <a :href="song.external_urls.spotify" target="_blank">{{song.name}}</a>
    </div>
    <div class="song-artist">
      <a
        :href="artist.external_urls.spotify"
        v-for="(artist,index) in song.artists"
        :key="artist.id"
        target="_blank"
      >{{artist.name}}{{index != song.artists.length-1 ? ", " : ""}}</a>
    </div>
    <div class="song-album">
      <a :href="song.album.external_urls.spotify" target="_blank">{{song.album.name}}</a>
    </div>
    <div class="song-duration">{{milisToString(song.duration_ms)}}</div>
  </div>
</template>

<script>
import { milisToString } from "../../../utils";

export default {
  props: {
    song: {
      required: true
    }
  },
  computed: {
    artists() {
      return this.song.artists.map(artist => artist.name).join(", ");
    }
  },
  methods: {
    milisToString
  }
};
</script>

<style lang="scss" scoped>
.song {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 5px;
  &:hover {
    background-color: var(--light-gray);
  }
  div {
    width: 20%;
  }
  .song-duration {
    text-align: end;
    color: var(--gray-text-color);
  }
  .song-name {
    &:hover a {
      color: var(--spotify-green);
    }
  }
  .song-artist,
  .song-album {
    a {
      color: var(--gray-text-color);
      font-size: 90%;
      &:hover {
        color: var(--main-text-color);
      }
    }
  }
}
</style>