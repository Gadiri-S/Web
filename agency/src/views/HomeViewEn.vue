<template>
<div class="home" >


  <Hero   lang="en"/>
  <Why id='advantages' lang="en"/><!-- -->

  <Package id='packages' lang="en"/>
  <Extra lang="en" />

  <Process id='process' lang="en"/>
  <Blog id='process' lang="en"/>

  <Contact  id='contact' lang="en"/>

    <Footer/>
</div>
</template>

<script>
// @ is an alias to /src
import Hero from '../components/Hero/HeroMain.vue'
import Package from '../components/Package.vue'
import Why from '../components/Why.vue'
import Process from '../components/Process.vue'
import Contact from '../components/Contact.vue'
import Blog from '../components/Blog.vue'
import Extra from '../components/Extra.vue'

import Footer from '../components/Footer/Footer.vue'
 import { useHead } from 'unhead';

import axios from 'axios'
export default {
name: 'HomeView',
components: {
  Why,Hero,Package,Process,Contact,Footer,Blog,Extra
},
mounted(){

}

}
</script>

<style scoped>
.home{
overflow-x: hidden;
}
</style>