<template>
  <div class="artist">
    <div class="artist-image">
      <img :src="image" :alt="`Image of ${artist.name}`" />
    </div>
    <div class="artist-name">{{artist.name}}</div>
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
      console.log(this.artist);
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
    img {
      height: 100%;
      width: 100%;
      border-radius: 50%;
    }
  }
  .artist-name {
    margin-top: 10px;
    text-align: center;
  }
}
</style>