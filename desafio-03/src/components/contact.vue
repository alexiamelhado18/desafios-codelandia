<template>
  <section>
    <h1>Entre em contato</h1>
    <form>
      <input class="campo-border" type="text" id="name" placeholder="Nome" />
      <input
        class="campo-border"
        type="email"
        id="email"
        placeholder="E-mail"
      />
      <input class="campo-border" type="tel" id="tel" placeholder="Telefone" />
      <textarea
        class="campo-border"
        id="msg"
        placeholder="Mensagem..."
      />
      <button id="btnSubmit" type="submit">Enviar mensagem</button>
    </form>
  </section>
</template>
<style>

section {
  margin-top: 32px;
  width: 100%;
  background: #d7d4ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 85px 0 80px 0;
}
section > h1 {
  font: 400 32px "Merriweather";
  color: var(--title);
  margin-bottom: 60px;
}
form {
  width: 470px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
#btnSubmit {
  width: 100%;
  height: 50px;
  background: #6c63ff;
  box-shadow: 0px 5px 5px rgba(23, 23, 23, 0.1);
  border-radius: 5px;
  font: 700 20px "Lato";
  border: none;
  color: #fff;
  margin-top: 30px;
}
.campo-border {
  border: none;
  border-radius: 6px;
  width: 100%;
  color: #6e7275bd;
  outline: none;
  font: 400 18px "Lato";
  padding: 21px 0 21px 15px;
}
input.campo-border {
  margin-bottom: 15px;
  height: 65px;
}
.campo-border::-webkit-input-placeholder {
  color: #6e7275bd;
  font: 400 18px "Lato";
}
@media only screen and (max-width: 500px) {
  section{
    margin-top: 83px;
  }
  section > h1 {
    margin-bottom: 37px;
  }
  form{
    width: 100%;
    padding: 0 20px;
  }
  input.campo-border{
    height:60px;
  }
}
</style>