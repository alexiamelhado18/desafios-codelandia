<template>
  <main id="app">
    <Header />
    <b-row id="section">
      <Card v-for="(item, index) in colors" :key="index" v-bind:image="item" />
    </b-row>
    <Contact />
  </main>
</template>

<script>
import Header from "./components/header";
import Contact from "./components/contact";
import Card from "./components/card";

export default {
  name: "App",
  components: {
    Header,
    Contact,
    Card,
  },
  data: () => ({
    colors: ["#FF6363", "#63ECFF", "#F363FF", "#63FF73", "#FFDD63", "#6663FF"],
  }),
};
</script>

<style>
@import "./styles/global.css";
main {
  background: #f9f9f9;
}
#section {
  width: 100%;
  padding-top: 150px;
}
.row > * {
  padding: 0 100px !important;
}
@media only screen and (max-width: 900px) {
  #section {
    padding-top: 75px;
  }
  .row > * {
    padding: 0 20px !important;
  }
  .row {
    margin: 0 !important;
  }
}
</style>
