<template>
<div class="home" >

  <div v-if="this.French == true">
  <Hero />
  <WhyFr id='advantagesfr'/>
    <PackageFr  id='solutionsfr'/>
        <ExtraFr lang="fr" />

    <ProcessFr />
    <ContactFr />
          <FooterFr />

  </div>
  <div v-else>
  <Hero lang="en"/>
  <Why id='advantages' lang="en"/><!-- -->
  <Package lang="en" id='solutions'/>
  <Extra lang="en" />
  <Process lang="en"/>
  <Blog lang="en"/>

  <Contact lang="en"/>

    <Footer/>
</div>
</div>
</template>

<script>
// @ is an alias to /src
import Hero from '../components/Hero/HeroMain.vue'
import Package from '../components/Package.vue'
import PackageFr from '../components/Package-Fr.vue'
import Why from '../components/Why.vue'
import WhyFr from '../components/Why-Fr.vue'
import Process from '../components/Process.vue'
import ProcessFr from '../components/Process-Fr.vue'
import Contact from '../components/Contact.vue'
import ContactFr from '../components/Contact-Fr.vue'
import FooterFr from '../components/FooterFr/Footer-Fr.vue'
import Blog from '../components/Blog.vue'
import Extra from '../components/Extra.vue'
import ExtraFr from '../components/ExtraFr.vue'
import Footer from '../components/Footer/Footer.vue'
 
 export default {
name: 'HomeView',
components: {
  Why,WhyFr,Package,PackageFr,Process,ProcessFr,Contact,ContactFr,Footer,Hero,FooterFr,Blog,Extra,ExtraFr
},
  
data(){
  return {
French:false,
English:false 
  }
},
mounted(){
this.findLocaleMatch();
},
methods:{
findLocaleMatch() {
                    
                    
                    const lang = navigator.language.slice(0,2); //from browser 


          let container = document.querySelectorAll(`html [lang*=${lang}]`);


        if(lang=="fr"){
          
          this.French = true;

} else {
          this.French = false;
        }
      }
}}
</script>

<style scoped>

</style>