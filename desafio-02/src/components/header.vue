<template>
  <header>
    <div class="sub-header-01">
      <p class="sub-header-text01">Ganhe R$ 10,00 de desconto no frete</p>
    </div>
    <div class="sub-header-02">
      <p class="sub-header-text02">JordanShoes</p>
    </div>
    <div class="sub-header-image">
      <div class="background-image"></div>
      <h1>A melhor loja de Jordan</h1>
      <p class="sub-header-text04">
        O tênis Jordan é fruto de uma velha e forte <br />
        parceria entre a Nike e o jogador Michael Jordan.
      </p>
    </div>
  </header>
</template>
<script>
export default {};
</script>
<style>
header {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.sub-header-image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  min-height: 378px;
  position: relative;
}
.background-image {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("../assets/wallpaper.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  filter: brightness(50%);
  background-position: center;
  z-index: -1;
}
.sub-header-01 {
  background: var(--title);
  padding: 15px 0;
}
.sub-header-01,
.sub-header-02 {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sub-header-text01 {
  color: #f9f9f9;
  font-size: 16px;
  font-weight: 500;
}
.sub-header-02 {
  padding: 12px 0;
  background: #f9f9f9;
}
.sub-header-text02 {
  color: var(--title);
  font-size: 24px;
}
.sub-header-text01,
.sub-header-text02 {
  margin-bottom: 0 !important;
}
.sub-header-image > h1,
.sub-header-text04 {
  color: var(--white);
  z-index: 1;
}
.sub-header-image > h1 {
  margin: 129px 0 19px 100px;
  font-weight: 700;
  font-size: 32px;
}
.sub-header-text04 {
  line-height: 35px;
  margin: 0 0 121px 100px;
  font-size: 18px;
}
.sub-header-02,
.sub-header-text04 {
  font-weight: 600;
}

@media only screen and (max-width: 900px) {
  .sub-header-image > h1 {
    font-size: 28px;
    margin: 121px 37px 12px 20px;
  }
  .sub-header-text04 {
    line-height: 29px;
    font-size: 16px;
    margin: 0 37px 122px 20px;
  }
}
</style>