<template>
  <main id="app">
    <Header />
    <section id="section__container">
      <section id="section__info">
        <h3>HAYAO MIYAZAKI</h3>
        <h1>A VIAGEM DE CHIHIRO</h1>
        <p>
          Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a
          desobedecem são transformados em animais.
        </p>
        <div id="div__formaParalelograma">
          <div class="btn btn__WatchNow">
            <img :src="require(`./assets/Vector.svg`)" alt="" />
            <p>Assistir agora</p>
          </div>
          <div class="btn btn__Trailer">
            <p>assista o trailer</p>
          </div>
        </div>
      </section>
      <section id="section__image">
        <img :src="require(`@/assets/image.svg`)" alt="Imagem ilustrativa" />
      </section>
    </section>
  </main>
</template>

<script>
import Header from "./components/header";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
@import "./styles/global.css";
main {
  background: linear-gradient(130.02deg, #628e75 0.66%, #1a4855 83.32%);
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
#section__container {
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 75px;
  padding: 0 165px;
}
#section__image {
  margin-left: 165px;
}
#section__image > img {
  width: 500px;
}
#section__info {
  margin-bottom: 145px;
}
#section__info > h3 {
  font-weight: 700;
  font-size: 20px;
  color: #f9f9f9;
}
#section__info > h1 {
  font-weight: 900;
  font-size: 68px;
  color: #f9f9f9;
  line-height: 74px;
  margin-top: 14px;
  margin-bottom: 25px;
}
#section__info > p {
  font-weight: 400;
  font-size: 16px;
  line-height: 28.8px;
  color: #f9f9f9;
  margin-bottom: 46px;
  max-width: 445px;
}
#div__formaParalelograma {
  display: flex;
  align-items: center;
}
.btn {
  width: 225px;
  height: 45px;
  color: #f9f9f9;
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-transform: skew(-20deg);
}
.btn__Trailer {
  border: 2px solid #658e76;
  background: none;
}
.btn__WatchNow {
  background: #658e76;
  margin-right: 15px;
}
.btn__WatchNow > p,
.btn__Trailer > p,
.btn__WatchNow > img {
  -webkit-transform: skew(20deg);
}
.btn__WatchNow > img {
  width: 11px;
  height: 15px;
  margin-right: 15px;
}
@media only screen and (max-width: 800px) {
  #section__container {
    flex-direction: column-reverse;
  }
  #section__container {
    margin-top: 11px;
  }
  #section__info {
    margin-bottom: 70px;
  }
  #section__info > h3 {
    font-size: 18px;
  }
  #section__info > h1 {
    font-size: 56px;
    line-height: 61px;
  }
  #section__info > p {
    max-width: 362px;
    font-size: 14px;
    line-height: 25px;
  }
  .btn__Trailer {
    display: none;
  }
}
@media only screen and (max-width: 1295px) {
  #section__container {
    padding: 0 25px;
  }
  #section__image {
    margin-left: 0;
  }
  #section__image > img {
    width: 100%;
    padding: 0 32px 0 82px;
  }
}
</style>
