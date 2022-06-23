<template>
  <b-col class="container-card" cols="12" md="6" xl="4">
    <div class="card-image" :style="{ background: image }"></div>
    <div
      class="
        card-info
        d-flex
        justify-content-between
        flex-column
        align-items-start
      "
    >
      <h2>Título do card</h2>
      <p class="text-start">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
        neque et nisl.
      </p>
    </div>
  </b-col>
</template>
<script>
export default {
  props: ["image"],
};
</script>

<style>
.container-card {
  width: 340px;
  margin-bottom: 68px;
}
.card-image {
  width: 100%;
  height: 222px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
}
.card-info {
  padding: 0 30px 30px 30px;
  background: #ffffff;
  min-height: 201px;
  width: 100%;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
}
.card-info > h2 {
  margin-top: 24px;
  font: 700 24px "Merriweather";
}
.card-info > p {
  font: 400 18px "Lato";
  line-height: 30px;
  margin-top: 26px;
  margin-bottom: 0;
}
@media only screen and (max-width: 900px) {
  .container-card {
    margin-bottom: 30px;
  }
}
</style>