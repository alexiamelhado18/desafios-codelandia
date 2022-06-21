<template>
  <header>
    <div>
      <div class="bl-title">
        <span>Codelândia</span>
        <span>blog</span>
      </div>
      <nav>
        <div class="campo-pesquisa">
          <img
            :src="require(`@/assets/Vector.png`)"
            alt=""
          />
          <input type="text" placeholder="Pesquisa no blog" />
        </div>
      </nav>
    </div>
  </header>
</template>
<style>
header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--linear);
}
header > div {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;
}
nav {
  width: 100%;
}
.bl-title {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.bl-title > span {
  color: var(--white);
  font-family: "Lexend Deca", sans-serif;
}

.campo-pesquisa {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
}
.campo-pesquisa > img {
  cursor: pointer;
}
.campo-pesquisa > input {
  height: 100%;
  width: 100%;
  border: none;
  background: none;
  outline: none;
  font-family: "Inter", sans-serif;
  color: var(--white);
  opacity: 0.5;
}
.campo-pesquisa > input::-webkit-input-placeholder {
  color: var(--white);
  opacity: 0.5;
}

@media only screen and (min-width: 1130px) {
  header{  height: 250px;}
  header > div{  margin: 0 270px;}
  .bl-title > span{font-size: 24px;}
  .campo-pesquisa {height: 65px;}
  .campo-pesquisa > input{font-size: 18px;}
  .campo-pesquisa > img{width: 23px;padding: 0 20px}

}
@media only screen and (max-width: 1130px) {
  header{  height: 200px;}
  header > div{  margin: 0 20px;}
  .bl-title > span{font-size: 18px;}
  .campo-pesquisa {height: 40px;}
  .campo-pesquisa > input{font-size: 14px;}
  .campo-pesquisa > img{width: 15px;padding: 0 12px}


}
</style>