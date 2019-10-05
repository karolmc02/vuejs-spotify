<template>
  <div class="artist">
    <a :href="artist.external_urls.spotify" target="_blank" class="artist-image">
      <img :src="image" :alt="`Image of ${artist.name}`" />
    </a>
    <div class="artist-name">
      <a :href="artist.external_urls.spotify" target="_blank">{{artist.name}}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    artist: {
      required: true
    }
  },
  computed: {
    image() {
      return this.artist.images.length > 0
        ? this.artist.images[1].url
        : "https://geodash.gov.bd/uploaded/people_group/default_group.png";
    }
  }
};
</script>

<style lang="scss" scoped>
.artist {
  margin: 10px;
  width: 200px;
  .artist-image {
    height: 200px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 180px;
      width: 180px;
      border-radius: 50%;
      transition: width 0.5s, height 0.5s;
      &:hover {
        height: 200px;
        width: 200px;
      }
    }
  }
  .artist-name {
    margin-top: 10px;
    text-align: center;
    &:hover a {
      color: var(--spotify-green);
    }
  }
}
</style>