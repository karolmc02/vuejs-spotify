<template>
  <div class="album">
    <a :href="album.external_urls.spotify" class="album-image" target="_blank">
      <img :src="image" alt="`Image of ${album.name} album`" />
    </a>
    <div class="album-name">
      <a :href="album.external_urls.spotify" target="_blank">{{album.name}}</a>
    </div>
    <div class="album-artist">
      <a
        :href="artist.external_urls.spotify"
        v-for="artist in album.artists"
        :key="artist.id"
      >{{artist.name}}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    album: {
      required: true
    }
  },
  computed: {
    image() {
      return this.album.images.length > 0
        ? this.album.images[1].url
        : "https://geodash.gov.bd/uploaded/people_group/default_group.png";
    },
    artists() {
      return this.album.artists.map(artist => artist.name).join(", ");
    }
  }
};
</script>

<style lang="scss" scoped>
.album {
  margin: 10px;
  width: 200px;
  .album-image {
    height: 200px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 180px;
      width: 180px;
      transition: width 0.5s, height 0.5s;
      &:hover {
        height: 200px;
        width: 200px;
      }
    }
  }
  .album-name {
    margin-top: 5px;
    text-align: center;
    &:hover a {
      color: var(--spotify-green);
    }
  }
  .album-artist {
    margin-top: 5px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    a {
      font-size: 90%;
      color: var(--gray-text-color);
      &:hover {
        color: var(--main-text-color);
      }
    }
  }
}
</style>