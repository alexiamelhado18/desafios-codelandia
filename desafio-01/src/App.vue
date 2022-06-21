<template>
  <main id="app">
    <Header />
    <section>
      <Article v-for="(item, index) in article" :key="index"
      v-bind:img="require(`@/assets/heart.png`)" v-bind:date="item.date"
      v-bind:title="item.title" v-bind:description="item.description"/>
    </section>
  </main>
</template>

<script>

import Header from "../src/components/header";
import Article from "../src/components/article";

export default {
  name: 'App',
  components: {
    Header, Article
  },
  data: () => ({
    article:[
      {
        date: '02 de jul, 2021',
        title: 'Agora é oficial: o Windows 11 está vindo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.'
      },
      {
        date: '02 de jul, 2021',
        title: 'Tim Berners-Lee vai leiloar código-fonte da web',
        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.'
      },
      {
        date: '02 de jul, 2021',
        title: 'Tem Firefox novo no pedaço e você vai querer migrar',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est.'
      },
      {
        date: '02 de jul, 2021',
        title: 'John McAfee, criador do antivírus McAfee, morre',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.'
      }
      
    ]
   }),
   mounted(){
    this.spaceBetweenBlocks();
   },
   methods:{
    spaceBetweenBlocks: function(){
      // debugger
      let arrObj = document.querySelectorAll(".card");

      for (let i = 0; i < arrObj.length; i++) {
        const element = arrObj[i];
        const lastElement = arrObj[arrObj.length -1];

        if (window.matchMedia("(min-width: 1130px)").matches) {
          if (i == 0) {
            element.setAttribute("style", "margin-top:100px;");
          }else if(element === lastElement){
            element.setAttribute("style", "margin-top:50px;margin-bottom:100px;");
          }else{
            element.setAttribute("style", "margin-top:50px;")
          } 
        }
        else if (window.matchMedia("(max-width: 1130px)").matches){
          if (i == 0) {
            element.setAttribute("style", "margin-top:50px;");
          }else if(element === lastElement){
            element.setAttribute("style", "margin-top:25px;margin-bottom:50px;");
          }else{
            element.setAttribute("style", "margin-top:25px;")
          } 
        }

        
      }
    }
   }
}
</script>

<style>
@import './styles/app.css';
main{
  background: var(--background-main);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
section{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
@media only screen and (min-width: 1130px) {
  section{margin: 0 270px;}
}
@media only screen and (max-width: 1130px) {
 section{margin: 0 20px;}
}
</style>