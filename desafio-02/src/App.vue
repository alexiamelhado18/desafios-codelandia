<template>
  <main id="app">
    <Header />

    <section>
      <h2>Destaques</h2>
      <h3 class="d-flex justify-content-center align-items-center text-center">
        Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.
      </h3>
      <Tenis />
    </section>

    <Footer />
  </main>
</template>

<script>
import Header from "./components/header";
import Footer from "./components/footer";
import Tenis from "./components/tenis";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Tenis,
  },
};
</script>

<style>
@import "./styles/global.css";

main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #f9f9f9;
  z-index: -1;
  position: relative;
}
section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 93.5px;
}
section > h2 {
  margin-top: 58px;
  margin-bottom: 10px;
  font-size: 32px;
  font-weight: 600;
  line-height: normal;
}
section > h3 {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 59px;
  color: var(--text);
}
section > div {
  width: 100%;
}
@media only screen and (min-width: 414px) {
section > h3 {
  min-width: 374px;
  line-height: 29px;
}
}
@media only screen and (max-width: 900px) {
  section {
    padding: 0 13.5px;
  }
  section > h2 {
    font-size: 28px;
    margin-top: 50px;
  }
  section > h3 {
    font-size: 16px;
  }
}
</style>
