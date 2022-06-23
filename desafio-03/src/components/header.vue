<template>
  <header>
    <nav>
      <h1>Lorem ipsum dolor <br />sit amet</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu
        massa sit amet augue consectetur ullamcorper non ac massa.
      </p>
      <button class="btnStatic">Botão</button>
    </nav>
    <img
      :src="require(`@/assets/imagem.png`)"
      alt="Imagem ilustrativa para o banner"
    />
  </header>
</template>
<style>
header {
  width: 100%;
  background: var(--background-banner);
  height: 560px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 100px;
}
nav {
  width: 389px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 137px 0 119px 0;
}
nav > h1 {
  font: 400 36px "Merriweather";
  color: var(--title);
  margin-bottom: 0;
}
nav > p {
  margin-top: 19px;
  /* font-weight: 400;
    font-size: 19px;
    font-family: 'Lato', serif; */
  font: 400 19px "Lato";
  color: var(--text);
  margin-bottom: 0;
}
img {
  margin: 77px 0 123px 0;
  width: 500px;
  max-height: 360px;
}
.btnStatic {
  width: 155px;
  height: 50px;
  background: #6c63ff;
  box-shadow: 0px 5px 5px rgba(23, 23, 23, 0.1);
  border-radius: 5px;
  border: none;
  font-weight: 700;
  font-size: 20px;
  color: #fff;
  font-family: "Lato", sans-serif;
  margin-top: 45px; /*0 119px 0; */
  outline: none;
}

@media only screen and (max-width: 900px) {
  header {
    padding: 55px 20px 0 20px;
  }
  nav {
    padding: 0;
    width: 100%;
  }
  nav > h1 {
    font-size: 32px;
  }
  nav > p {
    font-size: 18px;
  }
}
@media only screen and (max-width: 630px) {
  header {
    align-items: center;
    flex-direction: column;
    height: 800px;
  }
}
@media only screen and (max-width: 1040px) {
  img {
    max-width: 314px;
    max-height: 100%;
    margin: 114px 32px 88px 32px;
  }
}
</style>