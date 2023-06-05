<template>
<div class="wrapper">
  <div class="container-mentions">
      <div class="header">
<Header/>
</div>

<div class="container-mentions-text">
  <h1>Legal mentions</h1>

  <span>
<VueShowdown
:markdown="mention.text"

/>    </span>
</div>
<Footer/>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import { imageUrl } from '../config'
import Footer from '../components/Footer/Footer.vue'
import Header from '../components/Header/Header.vue'
import * as Sentry from '@sentry/vue';

export default {

components:{Header,Footer},
data(){
  return {
mention:''
  }
},
mounted(){
this.getMention()
},
methods:{
async getMention(){

  try{

const response = await axios.get('mention');

const mention = response.data.data.attributes;
this.mention = mention;

    }catch(error){
  Sentry.captureException(error);

  }
}
}
}
</script>

<style style="scss" scoped>

.container-mentions{
max-width: 1900px;
margin: auto;
}

.header{
background-color:#2a2088;
}
h1{
  font-size: 45px;
  padding: 20px 0;
color:#2a2088;
text-align: center;

}

.container-mentions-text{
    color:#2a2088;
    padding: 4%;
    text-align: left;

    

} 
::v-deep(p){
      font-size: 19px;
      line-height: 35px;
    }
</style>