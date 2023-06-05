<template>
<div class="home" >

  <Hero lang="fr"/>
  <WhyFr id='advantagesfr' lang="fr"/>
    <PackageFr id='packagefr' lang="fr"/>
    <ExtraFr lang="fr" />
    <ProcessFr id='processfr' lang="fr"/>
    <Blog lang="fr" />
    <ContactFr id='contactfr' lang="fr"/>
          <FooterFr id='footerfr' lang="fr"/>


  
</div>
</template>

<script>
// @ is an alias to /src
import Hero from '../components/HeroFr/HeroFr.vue'
import PackageFr from '../components/Package-Fr.vue'
import WhyFr from '../components/Why-Fr.vue'
import ProcessFr from '../components/Process-Fr.vue'
import ContactFr from '../components/Contact-Fr.vue'
import FooterFr from '../components/FooterFr/Footer-Fr.vue'
import Blog from '../components/Blog-Fr.vue'
import ExtraFr from '../components/ExtraFr.vue'

import axios from 'axios'
export default {
name: 'HomeView',
components: {
  WhyFr,PackageFr,ProcessFr,ContactFr,Hero,FooterFr,Blog,ExtraFr
}}
</script>

<style scoped>
.home{
overflow-x: hidden;
}
</style>