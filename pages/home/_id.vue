<template>
  <div>
    <div style="display:flex;">
      <img v-for="image in home.images" :key="image" alt="Home Image" :src="image" width="200px" />
    </div>
    {{ home.title }} <br />
    {{ home.pricePerNight }} / night<br />
    <img src="/images/marker.svg" width="20" alt="location marker"> {{home.location.address}} {{home.location.city}} {{home.location.state}} {{home.location.country}}<br/>
    <img src="/images/star.svg" width="20" alt="Review stars"> {{home.reviewValue}} <br/>
    {{home.guests}} guests, {{home.bedrooms}} rooms, {{home.beds}} beds, {{home.bathrooms}} bath <br/>
    {{home.description}}
    <div style="height:800px; width:800px" ref="map">

    </div>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: this.home.title,
      }
    },
    async asyncData({ params, $dataApi, error }) {
      const response = await $dataApi.getHome(params.id)
      if (!response.ok) return error({statusCode: response.status, message: response.statusText})
      return {
        home: response.json,
      }
    },
    mounted() {
      this.$maps.showMap(this.$refs.map, this.home._geoloc.lat, this.home._geoloc.lng)
    }
  }
</script>

<style lang="scss" scoped>

</style>