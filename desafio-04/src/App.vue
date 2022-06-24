<template>
  <main id="app">
    <section id="section__illustrativePicture">
      <img
        v-bind:src="require(`@/assets/undraw_About_us_page_re_2jfm 1.png`)"
        alt=""
      />
    </section>
    <section id="section__authenticate">
      <div id="div__authenticate">
        <div>
          <p class="font">Bem vindo de volta</p>
          <h1 class="font">Faça login na sua conta</h1>
        </div>
        <Input
          v-bind:name="'email'"
          v-bind:nameLabel="'E-mail'"
          v-bind:type="'email'"
          v-bind:text="'codelandia@gmail.com'"
        />
        <Input
          style="margin-top: 11px"
          v-bind:name="'senha'"
          v-bind:nameLabel="'Senha'"
          v-bind:type="'password'"
          v-bind:text="'********'"
        />
        <div id="div__rememberForgot">
          <div id="div__remember">
            <label for="toRemember">Lembre de mim</label>
            <input type="radio" name="toRemember" id="toRemember" />
          </div>
          <div id="div__forgot">
            <a
              href="https://support.google.com/accounts/answer/7682439?hl=pt-BR"
              target="_blank"
              rel="noopener noreferrer"
              >Esqueceu sua senha?</a
            >
          </div>
        </div>
        <button class="btnDefault">Entrar</button>
        <a class="btnDefault" href="#">
          <img :src="require(`@/assets/iconfinder_Google_1298745 1.png`)" />
          Ou faça login com o Google
        </a>
        <span id="span__register">
          <p>Não tem uma conta?</p>
          <a href="#"> Cadastre-se</a>
        </span>
      </div>
    </section>
  </main>
</template>

<script>
import Input from "./components/input";
export default {
  name: "App",
  components: {
    Input,
  },
};
</script>

<style>
@import "./styles/global.css";

main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
}
#section__illustrativePicture {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  background: #f7fafc;
  height: 100%;
}
#section__illustrativePicture > img {
  max-width: 400px;
  max-height: 100%;
  /* margin: 285px 160px; */
}
#section__authenticate {
  width: 50%;
  background: #fff;
  height: 100%;
  display: flex;
  justify-content: center;
}
#div__authenticate {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 113px;
  width: 400px;
  max-height: 610px;
  margin-bottom: 10px;
}
p.font {
  font: 400 16px "Merriweather";
  margin-bottom: 8px;
}
h1.font {
  font: 700 26px "Merriweather";
  margin-bottom: 39px;
}
#div__rememberForgot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  margin-top: 28px;
  margin-bottom: 26px;
}
#div__remember {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: flex-start;
}
#div__remember > input {
  margin-right: 11px;
  background: #f7fafc;
  border: 1px solid #e8e8e8;
}
#div__remember > label {
  font: 400 14px "Lato";
  color: #1a202c;
}
#div__forgot > a {
  color: #2b6cb0;
  font: 400 14px "Lato";
  text-decoration: none;
}
#span__register {
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 50px;
}
#span__register > p,
#span__register > a {
  font: 400 16px "Lato";
}
#span__register > p {
  color: #1a202c;
}
#span__register > a {
  color: #2b6cb0;
  margin-left: 3px;
  text-decoration: none;
}
.btnDefault {
  width: 100%;
  border-radius: 5px;
  font: 700 16px "Lato";
  border: none;
  padding: 16px 0;
  color: #fff;
  text-decoration: none;
  display: flex;
  place-content: center;
}
button.btnDefault {
  background: #04c35c;
}
a.btnDefault {
  margin-top: 15px;
  background: #1a202c;
  width: 100%;
}
a.btnDefault > img {
  padding-right: 11px;
  max-width: 100%;
  height: 20px;
}

@media only screen and (max-width: 900px) {
  main {
    display: flex;
    justify-content: center;
  }
  #section__illustrativePicture {
    display: none;
  }
  #section__authenticate {
    width: 100%;
  }
  #div__authenticate {
    margin-top: 71px;
  }
}
@media only screen and (max-width: 520px) {
  #div__authenticate {
    width: 100%;
    padding: 0 32px;
  }
}
@media only screen and (max-width: 1024px) {
  #section__illustrativePicture > img {
    max-width: 350px;
  }
}
</style>
