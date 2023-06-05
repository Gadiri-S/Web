<template>
<div class="wrapper" v-motion-fade >

<div class="container-contact">

   <Hero/> 
   <div class="container" >
      <Contact/>
  </div>

  <Footer/></div>

</div>
</template>

<script>
import Contact from '../components/Contact-Fr.vue'
import Hero from '../components/HeroFr/HeroContact-Fr.vue'
import Footer from '../components/FooterFr/Footer-Fr.vue'
import * as Sentry from '@sentry/vue';
import Consent from '../components/Consent.vue'
export default {
components:{
  Hero,Contact,Footer,Consent
},
mounted(){
    window.scrollTo(0,0);
  },
}
</script>

<style lang="scss" scoped>



.container-contact{

max-width: 1900px;
margin: auto;

}
.header{
      background: #00009e;

}

.banner-consent {
 position: -webkit-sticky; /* for browser compatibility */
  position: sticky;
  bottom: 0;
    background-color: #ffffff;
  text-align: center;
  width: 100%;
  z-index: 999;
 }
</style>