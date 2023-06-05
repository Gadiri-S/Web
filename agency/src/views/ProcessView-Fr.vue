<template>
<div v-if="this.data==true" v-motion-fade class="wrapper"> 
<Hero/> 

 <div class="container-page" id='container-page'>

  <div  class="container"   >



  <h1>Toutes nos étapes</h1>

<div class="process">


      <div v-for="(stage,index) in process" :key="index"  class="stage"> 

    <img :src="imageUrl+stage.attributes.icon.data.attributes.url" class="icon" alt="">

          <div class="stage-content">
          <span class="title">{{stage.attributes.title}}</span>
          <span class="detail">            <VueShowdown
:markdown="stage.attributes.description"

/></span>            </div>
</div> 





</div>
</div>
  <Footer/></div>

</div>
</template>

<script>
import axios from 'axios'
import * as Sentry from '@sentry/vue';

import Hero from '../components/HeroFr/HeroProcess-Fr.vue'
import Footer from '../components/FooterFr/Footer-Fr.vue'
import { imageUrl } from '../config'

export default {

components:{
Hero,Footer
},
data(){
return {
  process:'',
  imageUrl:'',
  data:'',
items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'], // Array of objects to iterate over
    colors: ['#c793fa','#dbbef7' , '#69e7fa','#bae9f7' ,'#82f5d0' ,'#f8d68d'], // Array of colors to assign to each element
}
},
mounted(){
    window.scrollTo(0,0);
      this.getProcess()

  },

methods:{

async getProcess(){

try{
  const response = await axios.get('processes?locale=fr&populate=*')
  
  this.process = response.data.data;
  this.data = true;
    this.imageUrl = imageUrl;
  }

  catch(error){
      Sentry.captureException(error);

    }
}
}
}
</script>

<style lang="scss" scoped>


.container{
  background-color: #ffffff;
    color:#00009e;
    max-width: 1900px;
    margin: auto;

}

 


.icon{
   border-radius: 20px;
  object-fit: cover; 
   width: 40%;
   height: auto;

 }
h1{
  font-size: 45px;
  padding: 20px 0;
 }
p{
  font-size: 25px;
}
  .process {
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
}

.stage-content{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 15px;
  border-radius: 20px;
}
.stage{
  display: flex;
  justify-content: space-evenly;

           border-radius:20px;
          margin: 10px;
          line-height: 30px;

padding: 20px;
text-align: left;
    color:#00009e;
    .title{
      font-size: 30px;
      font-weight: 600;
      padding: 20px 0;

  }
  .detail{
      font-weight: 400;
      font-size: 23px;
      line-height: 40px;

  }
}




.star{
height: 15px;
}

@media (max-width:900px) {
h1{
  font-size: 30px;
}

.stage{
  flex-direction: column;
}

.stage-content{
 
  width: 100%;
  justify-content: center;
  margin: 15px 0;
}
.icon{
  width: 100%;
}
}
</style>