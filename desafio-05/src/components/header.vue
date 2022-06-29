<template>
  <header>
    <nav>
      <img :src="require(`@/assets/logo.svg`)" alt="" />
      <div id="div__redeSociais">
        <img
          v-for="(item, index) in redesociais"
          :key="index"
          :src="require(`@/assets/${item}`)"
          alt="imagem rede social"
        />
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  data: () => ({
    redesociais: [
      "facebook.svg",
      "instagram.svg",
      "twitter.svg",
      "youtube.svg",
    ],
  }),
};
</script>
<style>
header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  background: none;
  padding: 41px 165px;
}
nav {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
nav > img {
  max-width: 100px;
  max-height: 48px;
}
#div__redeSociais {
  display: flex;
  justify-content: space-between;
  align-content: center;
}
#div__redeSociais > img {
  max-width: 24px;
  margin-left: 27px;
}

@media only screen and (max-width: 600px) {
  #div__redeSociais > img {
    margin-left: 17px;
  }
}
@media only screen and (max-width: 1295px){
  header {
    padding: 14px 25px;
  }
}
</style>