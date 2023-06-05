<template>
<div class="wrapper">
<div class="hero-container">
  <Header/>


  <div  class="container">
    <div class="text">
<h1><img src="../../assets/star.png" class="star" alt="">Des Solutions Web Pour Aider Votre Entreprise À Grandir!</h1>
<span>Permettez à votre entreprise ou organisation de croître grâce à des solutions web qui vous permettront de démontrer vos compétences et votre professionnalisme</span>

<div class="button-container" ><button   @click="nav(advantagesfr[0].id)"  class="bu">En savoir plus</button></div>
</div>
<img   src="../../assets/microsoft-edge-5bM6nLQ9Qv0-unsplash.webp" class="hero-image" alt="">
      
    



</div>

</div>
 
</div>
</template>

<script >

import axios from 'axios'

import Header from '@/components/HeaderFr/Header-Fr.vue'
import { imageUrl } from '../../config'
import * as Sentry from '@sentry/vue';
 import { useHead } from 'unhead';
import { ref } from 'vue';
 export default {


 

components: {
  Header
},

data() {
  return {
image:"",
imageUrl:'',
slogan:'',
description:"",
button:'',
products:"",
selected:false,
data:'',
   metaTitle: '',
   hero:'',


    advantagesfr: [
  {
id: 'advantagesfr'}],

  }

}, 
 

 mounted(){
 
this.getHero()
      .then(() => {
        // Perform any necessary operations with the retrieved data
        //console.log(this.metaTitle);
        //console.log(this.metaDescription);
 
      const description = ref(this.metaDescription)
      const title = ref(this.metaTitle)
      const image = ref(this.metaImage)
 

 useHead({
  title: title.value,
    htmlAttrs: {
                lang: 'fr',
            },
   meta: [
    { name: 'description', content: description.value },
        { name: 'og:description', content: description.value},
         { name: 'og:title', content: title.value },
         { name: 'og:image', content: image.value },
                  { name: 'og:url', content: "https://businessprowebsolutions.com" },
                  // { name: 'keywords', content: keywords.value },

 

  ],
})

   
      })
      .catch(error => {
        console.error(error);
        // Handle any error that occurred during the retrieval
      });

  // 


  

},
    methods:{
  nav(id) {

const position = document.getElementById(id).offsetTop;
// smooth scroll
window.scrollTo({ top: position, behavior: "smooth" });  
},

async getHero(){


try{

const res = await axios.get('home?locale=fr&populate=deep')

const response = res

  
this.slogan = response.data.data.attributes.slogan;
this.image = response.data.data.attributes.image.data.attributes.url;
this.description = response.data.data.attributes.description;
this.button = response.data.data.attributes.button;
this.data = true;
this.imageUrl=imageUrl;
this.metaTitle = response.data.data.attributes.Seo.metaTitle
this.metaDescription = response.data.data.attributes.Seo.metaDescription
this.metaImage = imageUrl+response.data.data.attributes.Seo.metaImage.data.attributes.url
 
} catch (error){
  Sentry.captureException(error);

}

}
},



}
</script>



<style lang="scss" scoped>


 
  .hero-container {
        
background-color:#001633;
color: rgb(255, 255, 255);
max-width: 1900px;
margin: auto;
min-height: 730px;
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



.container{
  display: flex;
  justify-content: space-evenly;
  padding: 5% 2%;
  overflow-x: hidden;
  
}

 
.hero-container {
        
background-color:#001633;
color: rgb(255, 255, 255);
max-width: 1900px;
margin: auto;

    }

.text {
        display: flex;
    flex-direction: column;
    justify-content: space-between;
  text-align: left;
  width: 60%;
animation: moveleft 1s ease-in-out;

 

  h1 {

          font-size: 50px;
          font-weight: 600;
          margin-bottom: 25px;
          text-transform: uppercase;
          letter-spacing: 3px;

          }

          span{
            font-size: 25px;
          }


          button{
            font-size: 25px;
            border: none;
          background: rgb(255, 0, 98);
            color: rgb(255, 255, 255);;
            padding: 10px 25px;
            margin: 25px auto;
            font-family: 'Raleway', sans-serif;
            cursor:pointer;
                transition: .5s ease-in-out;

            &:hover{
          background: rgb(9, 214, 118);
  cursor: pointer;
  transition: .5s ease-in-out;
  color:  #ffffff;;
}
          }

  
}

        

.star{
  height: 30px;
  width: auto;
}

.slogan{
  background: rgb(255, 255, 255);
  border-radius: 15px;
  padding: 10px;
font-weight: 600;
  color: rgb(31, 102, 233);;
}
.hero-image{
width: 50%;
height: auto;
 object-fit: cover;
border-radius: 20px;
padding: 10px;
 
}

 





@media (max-width:1200px) {

 .hero-container {
        
background-color:#001633;
color: rgb(255, 255, 255);
max-width: 1900px;
margin: auto;
min-height: 600px;
   }

.text{

  h1{
    font-size: 35px;
  }
  span{
    font-size: 20px;
  }
}
}

@media (max-width:780px) {


.text{

  h1{
    font-size: 30px;
  }
  span{
    font-size: 20px;
  }

    button{
            font-size: 20px;
          
          }
}

      
}



@media (max-width:580px) {

 .hero-container {
        
 
min-height: 100vh;
   }

.container{
flex-direction: column;
}

.text{
width: 100%;
}

.button-container{
margin: auto;
}

.hero-image{
width: 100%;
margin: auto;
padding: 0;
}
}

@media (max-width: 500px) {
.text{
  h1{
    font-size: 25px;
  }
}
}
</style>