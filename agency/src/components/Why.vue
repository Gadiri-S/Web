<template>
<div class="wrapper">
<div v-if="data" class="container">

  <div class="introduction-wrapper">

      <div class="introduction">
            <h1>{{why.title}}</h1>

  <VueShowdown
:markdown="why.text"

/>

<div class="logos">
  <div v-for="logo in logos" :key='logo' class="logo">
      <img :src="imageUrl+logo.attributes.url" class='icon' alt="">
  </div>

    
</div>
</div>


  <div class="introduction-illustration">
  </div>


  </div>

<div v-if="questions && advantages" class="key">
      

<div v-if="questions"   class="questions-container">

<div class="questions-illustration">
  </div>

<div class="questions">
  <h1>Some questions you should ask yourself</h1>

<p v-for="question in questions" :key="question">{{question.attributes.question}}</p>


</div>

</div>

  <h1 class="questions_title">Key advantages to a website</h1>

<div class="items_container">

<div v-for="advantage in advantages" :key="advantage" class="item"  >
      <img    :src="imageUrl+advantage.attributes.icon.data.attributes.url" class="icon" alt="">

  <p>{{advantage.attributes.title}}</p>
</div>



</div>
  </div>
</div></div>

</template>

<script>
import axios from 'axios'
import {imageUrl} from '../config'
import {apiUrl} from '../config'
import * as Sentry from '@sentry/vue';

export default {
data(){

return {
questions:'',
advantages:'',
imageUrl:'',
why:'',
logos:'',
data:''

}
},
beforeMount(){
this.getQuestions();
this.getAdvantages();
this.getWhy()
},
methods:{

async getWhy(){

try{
const res = await axios.get('why?populate=*')

const why = res.data.data.attributes;
const logos = res.data.data.attributes.icons.data;
this.why = why;
this.logos = logos;
this.imageUrl= imageUrl;
this.data = true;
} catch(error){

}
},
async getQuestions(){


try{


  const res = await axios.get('questions')


  const questions = res.data.data

this.questions = questions;
  
  } catch(error){

    }
},
async getAdvantages(){


try{


  const res = await axios.get('advantages?populate=*')
  
  const advantages = res.data.data;
  
  this.advantages = advantages;

  this.imageUrl = imageUrl
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

max-width: 1900px;
margin:auto;
  background-color: #ffffff;

   color: #00009e;
}


.introduction-wrapper{
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.introduction{
grid-area: 1 / 1 / 2 / 2;
padding: 15px;
}

.introduction-illustration{
  grid-area: 1 / 2 / 2 / 3; 
  background: url('../assets/d.webp');
  background-size: cover;
  background-position: center;

}

.questions-container{
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.questions-illustration{
grid-area: 1 / 1 / 2 / 2;
background:url('../assets/t.webp');
background-position: center;
background-size: cover;
}

.questions{
grid-area: 1 / 2 / 2 / 3;
padding: 15px;
}






h1{
  font-size: 35px;
  padding: 10px 0;
}
h2{
      font-size: 25px;

}
.o{
          background-color:#00009e;
      color: white;

}
::v-deep(p){
  font-size: 18px;
  text-align: left;
  font-weight: 500;
  margin: 15px 0;
}




span{
font-size: 20px;
margin: 20px 0;
}



::v-deep(ul){
text-align: left;

::v-deep(a){
  color: #6f00ff;
  font-weight: bold;}

::v-deep(li){
list-style:none;
    font-size: 18px;
    font-weight: 500;
  color: #00009e;
text-align: left;
margin: 10px 0;


}
}


.items_container{
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;   
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
}

.item{
display: flex;
flex-direction: column;
align-items: center;
background: #ffffff;
width: 300px;
border-radius: 25px;
padding: 25px 5px;
margin: 25px;
  transition: .2s ease-in-out;
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
top: 0;
position: relative;
&:hover{
  transition: .2s ease-in-out;

  cursor: pointer;
  top: 15px;
}

p{
  margin: 15px auto;
  font-weight: 600;
  text-align: center;
}
}

.logos{
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 25px auto;

  .icon{
height: 40px;

}
}



.icon{
height: 70px;

}




@media (max-width:1000px) {
.introduction-wrapper,.questions-container{
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(4, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.introduction,.questions{
grid-area: 1 / 1 / 4 / 2; 
  padding: 15px;
}

.introduction-illustration,.questions-illustration{
grid-area: 4 / 1 / 5 / 2;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

}


h1{
font-size: 25px;
}
}


</style>