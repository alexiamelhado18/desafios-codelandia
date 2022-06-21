<template>
    <div class="card">
        <div class="header-card">
            <p class="card-date">{{ date }}</p>
            <img :src="img" alt="ícone de coração, indicando para salvar artigo">
        </div>
        <h4 class="card-title">{{ title }}</h4>
        <p class="card-description">{{ description }}</p>
    </div>
</template>
<script>
export default {
    // name: 'article',
    props: ['img', 'date', 'title', 'description']
}
</script>
<style>
h4,p{font-family: 'Lexend Deca', sans-serif;}
.card{
    width: -webkit-fill-available;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    background: var(--white);
    box-shadow: 0px 0px 10px rgba(19, 19, 31, 0.05);
    border-radius: 5px;
    padding: 25px;
}
.header-card{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.card-date{
    color: var(--text-dt-desc);
    margin-bottom: 22px;
}
.card-title{
    color: var(--text-article-title);
}
.card-description{color: var(--text-dt-desc); margin-top: 8px;}

@media only screen and (min-width: 1130px) {
  .card-date{font-size: 16px;}
  .header-card >img{
    width: 22px;
  }
  .card-title{font-size: 26px;}
  .card-description{font-size: 18px;}
}
@media only screen and (max-width: 1130px) {
  .card-date{font-size: 14px;}
  .header-card >img{
    width: 19px;
  }
  .card-title{font-size: 18px;}
  .card-description{font-size: 14px;}

}
</style>