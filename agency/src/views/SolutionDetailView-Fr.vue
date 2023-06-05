<template>
<div  v-motion-fade class="wrapper">
<div class="container-page">
<div v-motion-fade class="container"> 
  <div class="background1" v-motion-fade> <img src="../assets/turn-left.webp" class="icon-back desktop" alt="" @click="$router.go(-1)"> </div>   
  <div class="background2" v-motion-fade></div>
  <div class="background3" v-motion-fade><img src="../assets/turn-left.webp" class="icon-back mobile" alt="" @click="$router.go(-1)"> <img src="../assets/arrowdown.png" class="icon bounce2 mobile" alt="" @click="scrollToBottom"> </div>
      <div class="background4" v-motion-fade> <img src="../assets/arrowdown.webp" class="icon bounce2 desktop" alt="" @click="scrollToBottom"></div>

  <div class="backgroundLarge1" v-motion-fade></div>
</div>

<div class="container-text" ref="bottom">

  <h1>{{response.slogan}}</h1>

  <p class="abstract">{{response.abstract}}</p>


<h2>Details de la solution :</h2>

<div v-for="element in packages" :key="element" class="container-package">
<div class="container-title">
  <img :src='this.imageUrl+element.attributes.icon.data.attributes.url'  class="illustration" alt="">
    <h3>{{element.attributes.title}}</h3></div>

    <p class="description"><VueShowdown
:markdown="element.attributes.description"

/></p>
</div>


<h1>Quelques exemples de sites professionnels</h1>
 <div class="websites-container">



  <span v-for="(element, index) in elements" :key="index" class="website">

    <div v-if="element.attributes.url">
<a :href="element.attributes.url" target="_blank">
        <img :src="imageUrl+element.attributes.image.data.attributes.url" class="pic">

    <div class="website-text-content"> 

        <h2>{{element.attributes.title}}</h2>

   <div class="icon-container"> <img src="../assets/right-arrow.webp" class="icon-arrow" alt=""> </div>
  <div v-if="element.attributes.url"></div>
    </div>
    </a>
</div>
    <div v-else>
       <img :src="imageUrl+element.attributes.image.data.attributes.url" class="pic">

    <div class="website-text-content"> 

        <h2>{{element.attributes.title}}</h2>

 
    </div>

    </div>
  </span>
  
     </div>
    


</div>
    <Contact/>

<Footer/></div>
</div>
</template>

<script>

import Footer from '../components/FooterFr/Footer-Fr.vue'
import Contact from '../components/Contact-Fr.vue'
import axios from 'axios'
import {apiUrl, imageUrl} from '../config'
import { reactive } from 'vue'
import * as Sentry from '@sentry/vue';


export default {

  components:{
Footer,Contact
  },
data(){
  return {
response:'',
packages:'',
package:'',
imageUrl:'',
websites:'',
data:'',
link:"",
elements: reactive([])  
  }},
  beforeMount(){
        //  this.getSolution();

  },
      mounted(){
    window.scrollTo(0,0);
    this.getSolution()
.then(link => this.getDetails(link))
      .catch((error) => {
    console.log(error); // or handle the error in a different way
  });


    this.getSolution()
.then(link => this.getWebsites(link)) // Use the returned link to call getDetails method
  .catch((error) => {
    console.log(error); // or handle the error in a different way
  }) 
  },
  created(){

  },
    methods:{
  scrollToBottom(){
    this.$refs['bottom'].scrollIntoView({behavior: "smooth"})
  } ,

async getSolution(){

        const id =  this.$route.params.id;


try{
const res = await axios.get(`solution/${id}?populate=*`)

const response = res.data.data.attributes;

const link = response.link;
this.link = link;
this.data = true;

this.response = response;

const restaurant = response.gallery.data[4].attributes.url;
  const transport = response.gallery.data[1].attributes.url;
const startup = response.gallery.data[3].attributes.url;
const hairdresser = response.gallery.data[2].attributes.url;
const construction = response.gallery.data[0].attributes.url;

document.querySelector('.background1').style.backgroundImage=`url(${imageUrl}${restaurant})`
document.querySelector('.background2').style.backgroundImage=`url(${imageUrl}${transport})`
document.querySelector('.background3').style.backgroundImage=`url(${imageUrl}${startup})`
document.querySelector('.background4').style.backgroundImage=`url(${imageUrl}${hairdresser})`
document.querySelector('.backgroundLarge1').style.backgroundImage=`url(${imageUrl}${construction})`

      return link; // Return link from getSolution method


} 

catch(error){
  Sentry.captureException(error);

}
},

  async getDetails(link){

    try{
          const res = await axios.get(`${link}?locale=fr&populate=*`);


          const packages = res.data.data ;
      this.packages = packages;
        this.imageUrl = imageUrl;
    }catch(error){
      }
  },

  async getWebsites(link){


    try{
const res = await axios.get(`business-solutions?locale=fr&populate=*`);

const websites = res.data.data;

this.websites = websites;

websites.forEach(element => {

  if(element.attributes.solution.data.attributes.link == link){

  const elements = element;
  this.elements.push(elements);
          this.imageUrl = imageUrl;


}


}


);

      } catch(error){

    }
  }
  }

}
</script>


<style lang="scss" scoped>

 @media (min-width: 1900px) {
  .container{
    max-height: 1500px;
    min-height: 1500px;
    height: 1500px;

  }
}

.container-page{
  max-width: 1900px;
  margin: auto;
overflow-x: hidden;
}

.container {
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
height: 100vh;
 
}

.mobile{
  display: none;
}
.background4 { grid-area: 2 / 2 / 3 / 3; 
background-position: center;
background-size: cover;
animation: movetop 1s ease-in-out;
}
.background3 { grid-area: 1 / 2 / 2 / 3; 
background-position: center;
background-size: cover;
animation: movebottom 1s ease-in-out;
}
.background2 { grid-area: 2 / 1 / 3 / 2;
background-position: center;
background-size: cover;
animation: moveright 1s ease-in-out;

}
.background1 { 
    grid-area: 1 / 1 / 2 / 2;
position: relative;
background-position: center;
background-size: cover;
animation: moveleft 1s ease-in-out;

}
.backgroundLarge1 { grid-area: 1 / 3 / 3 / 4; 
background-position: center;
background-size: cover;
animation: moveright 1s ease-in-out;
}

.icon{
    position: absolute;
    bottom: 0;
     height: 50px;
     margin: 5px 0;
     cursor: pointer;

}

.bounce2 {
  animation: bounce2 2s ease infinite;
}
@keyframes bounce2 {
	0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
	40% {transform: translateY(-30px);}
	60% {transform: translateY(-15px);}
}
.icon-back{
      position: absolute;
    left: 0px;
    height: 50px;
    margin: 10px;
     padding: 0;
     cursor: pointer;
}

@keyframes moveleft {

      0% {
          transform: translateX(-300px);
      }
      100% {
          transform: translateX(0px);
  
      }
  }


@keyframes moveright {

      0% {
          transform: translateX(300px);
      }
      100% {
          transform: translateX(0px);
  
      }
  }

  @keyframes movetop {

      0% {
          transform: translateY(-300px);
      }
      100% {
          transform: translateY(0px);
  
      }
  }

  @keyframes movebottom {

      0% {
          transform: translateY(300px);
      }
      100% {
          transform: translateY(0px);
  
      }
  }
.container-text{
    //background: #260081;
   background-color: #ffffff;
       color: #00009e;
       padding: 2%;
}
 h1{
    font-size:45px;
}
h2{
        font-size: 25px;
        padding: 25px 0;

}


.abstract{
  font-size: 25px;
}

.description{
    font-size: 20px;
    line-height: 35px;

}
p{
    font-size: 18px;
    text-align: left;
    font-weight: 500;
    margin: 15px 0;
}



.package-container{
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
  
}

.websites-container{
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.website {
display: flex;
flex-direction: column;
width: 300px;
height: 500px;
padding: 15px 0;

&:hover{
cursor: pointer;

.pic{
  filter: brightness(80%);
transition: .4s ease-in-out;
}

.website-text-content{
  top:-200px;
  transition: .4s ease-in-out;
}

.icon-arrow{
  visibility: visible;
  top: -170px;
    transition: .2s ease-in-out;

}

}
}

.pic { 
object-fit:cover;
border-radius:15px;
height: 450px;
width: 300px;
filter: brightness(30%);
transition: .4s ease-in-out;


 }
 
.website-text-content {
  display: flex;
  flex-direction: column;
  align-items: center;
position: relative;
color: rgb(255, 255, 255);
top: -180px;
  transition: .4s ease-in-out;

h2{
  font-size: 25px;
  text-align: left;
  max-width: 350px;
}



 
.website-description{
  font-size: 22px;
  line-height: 35px;
}
 
padding: 5px 15px;
}
.icon-arrow{
  height: 50px;
  top: -220px;
    transition: .2s ease-in-out;
    visibility: hidden;

}
h3{
    font-weight: 700;
    font-size: 25px;
    text-align: left;
    padding: 5px 20px;
}

.container-title{
    display: flex;
    align-items: center;
}
.illustration{
    height: 60px;
    object-fit: cover;
}


@media (max-width:1000px) {
  .container-text{
    h1{
      font-size:35px
    }
  }

  .container{


display: grid;
grid-template-columns: 1fr;
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;


}

.background3{
 grid-area: 1 / 1 / 2 / 2; 
}

.mobile{
  display: inline;
}

.desktop{
  display: none;
}
}
@media (max-width:750px) {

  .container-text{
    h1{
      font-size: 25px;
    }
  }
 


h3{
  font-size: 20px;
}

.illustration{
  height: 40px;
}
}
</style>