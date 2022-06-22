<template>
  <b-row>
    <b-col
      class="d-flex justify-content-center align-items-center"
      v-scroll-reveal.reset="{delay: 200}"
      cols="12"
      md="6"
      xl="3"
      v-for="(item, index) in images"
      :key="index"
    >
      <div class="card-tenis" v-scroll-reveal.reset="{delay: 500}">
        <img :src="require(`@/assets/${item}`)" alt="Imgem do tênis" v-scroll-reveal.reset="{delay: 600}"/>
      </div>
    </b-col>
  </b-row>
</template>
<script>
export default {
  data: () => ({
    images: [
      "1.png",
      "2.png",
      "3.png",
      "4.png",
      "5.png",
      "6.png",
      "7.png",
      "8.png",
    ],
  }),
};
</script>

<style>
.card-tenis {
  height: 302px;
  background: var(--bgCard);
  margin-bottom: 39px;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  max-width: 250px;
}
.row > * {
padding: 0 6.5px !important;
}
@media only screen and (max-width: 414px) {
  .card-tenis {
    width: 100%;
  }
}
@media only screen and (min-width: 414px) {
  .card-tenis {
    width: 374px;
  }
}
@media only screen and (max-width: 767px) {
  .card-tenis{
    margin-bottom: 30px;
  }
}
@media only screen and (min-width: 767px) {
  .card-tenis {
    width: 300px;
  }
}
</style>