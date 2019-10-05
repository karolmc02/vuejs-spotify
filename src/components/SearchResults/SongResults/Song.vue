<template>
  <a :href="song.external_urls.spotify" class="song" target="_blank">
    <div class="song-name">{{song.name}}</div>
    <div class="song-artist">{{artists}}</div>
    <div class="song-album">{{song.album.name}}</div>
    <div class="song-duration">{{milisToString(song.duration_ms)}}</div>
  </a>
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
      return this.song.artists.reduce((acc, artist, index) => {
        if (index < this.song.artists.length - 1) {
          return acc + artist.name + ", ";
        } else {
          return acc + artist.name;
        }
      }, "");
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
  .song-artist,
  .song-album {
    color: var(--gray-text-color);
    font-size: 90%;
  }
}
</style>