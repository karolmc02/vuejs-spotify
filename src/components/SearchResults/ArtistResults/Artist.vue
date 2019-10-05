<template>
  <a :href="artist.external_urls.spotify" class="artist" target="_blank">
    <div class="artist-image">
      <img :src="image" :alt="`Image of ${artist.name}`" />
    </div>
    <div class="artist-name">{{artist.name}}</div>
  </a>
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
  }
}
</style>