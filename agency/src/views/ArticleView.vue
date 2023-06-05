<template>
<div class="wrapper">
<div v-if="data"  class="container">


<div class="hero-container">
  <Header/>

  <div  class="container-content">
    <div class="text">
<h1>{{title}}</h1>
<span>{{dateFormated(posted)}}</span>
<p>{{description}}</p>
<div class="read-container" @click="nav('content')"> <img src="../assets/glasses.png" class="icon" >   <span>Read</span></div>
</div>
 <img :src="image" class="hero-image" :alt="alt" v-motion-fade>
  
    
 

</div>

</div>


<div class="content-container">
    

  <div class="content" id="content">
<VueShowdown
:markdown="content"

/>    </div>
</div>


<Footer/>

</div></div>
</template>

<script>

import axios from 'axios'
import Contact from '../components/Contact.vue'
import Header from '../components/Header/Header.vue'
import Footer from '../components/Footer/Footer.vue'
import { imageUrl } from '../config'
import { apiUrl } from '../config'
import * as Sentry from '@sentry/vue';
 import { useHead } from 'unhead';
import { ref } from 'vue';
export default {

components:{
Contact,Header,Footer
},
data(){
  return {
    params:this.params,
    content:'',
    title:'',
    description:'',
    slogan:'',
    image:'',
    data:'',
    posted:'',
    metaDescription:'',
    metaImage:'',
    metaTitle:'',
    Slug:'',
    alt:''
  }},
mounted(){
    window.scrollTo(0,0);

this.getData()
      .then(() => {
        // Perform any necessary operations with the retrieved data
        //console.log(this.metaTitle);
        //console.log(this.metaDescription);
 
      const description = ref(this.metaDescription)
      const title = ref(this.metaTitle)
      const Slug = ref(this.Slug)
 useHead({
  title: title.value,
    htmlAttrs: {
                lang: 'en',
            },
   meta: [
    { name: 'description', content: description.value },
        { name: 'og:description', content: description.value},
         { name: 'og:title', content: title.value },
                   { name: 'og:url', content: "https://businessprowebsolutions.com/blog/article/"+Slug.value },
 
 

  ],
})

   
      })
      .catch(error => {
        console.error(error);
        // Handle any error that occurred during the retrieval
      });


  },
  methods:{
        nav(id) {

const position = document.getElementById(id).offsetTop;
// smooth scroll
window.scrollTo({ top: position, behavior: "smooth" });  
},
    getParams(){

    },

      async getData(){
      const params = this.$route.params;
      this.params = params;
        const id  = this.$route.params.id;



          try{
          const response = await axios.get(`${apiUrl}/blogs/${id}/?populate=*`);


              const res = response.data.data.attributes;
                    const title = res.title;
                  this.title = title;
                  const image = `${imageUrl}`+res.image.data.attributes.url;
                  this.image = image;
                  const posted = res.publishedAt;
                  this.posted = posted;
                  const content = res.content;
                  this.content = content;
                  this.data = true;
                  this.metaDescription  = res.Seo.metaDescription;
                  this.metaTitle = res.Seo.metaTitle
                  this.Slug = res.Slug;
                  const alt = res.image.data.attributes.caption
                    this.alt = alt
                  console.log(res.image.data.attributes.caption)
 
    this.$watch(
      ()=> this.$route.params,

      async()=>{

        this.getData()


      }
    )



  
          } catch(error){
              Sentry.captureException(error);

            }
  },
  
    dateFormated(posted){

  const event = new Date(posted);
return event.toDateString()


  }
  }}
</script>

<style lang="scss" scoped>

.container{
max-width: 1900px;
margin: auto;
}
.container-content{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 2%;
}

//linear-gradient(rgba(10, 0, 156, 0.274),rgba(10, 0, 156, 0.274)),
.hero-container {
// background:linear-gradient(rgba(0, 100, 146, 0.156),rgba(0, 100, 146, 0.156)),url('../assets/background.jpg');
background-color:#001633;

color: white;
}

.text {
  text-align: left;
  width: 50%;
animation: moveright 1s ease-in-out;



  h1 {
          font-size: 40px;
          font-weight: 600;
          margin-bottom: 25px;
          text-transform: uppercase;
          letter-spacing: 2.5px;

          }

          span{
            font-size: 25px;
          }


  
  p{
    font-size:20px;
    margin: 25px 0;
  }
}

          .picture{
          display: flex;
          }

.read-container{
  display: flex;
  align-items: center;
    span {font-size: 25px;}

  .icon{
      height: 50px;
      padding: 10px;
              cursor: pointer;

  }
}

.hero-image{
height: 600px;
width: 500px;
object-fit: cover;
border-radius: 20px;
padding: 10px;
  animation: moveleft 1s ease-in-out;

}




.content-container{
display: flex;
justify-content: space-between;
  background: white;

}









.content{

          padding: 2%;
            text-align: left;
            color: #2a2088;
            width: 65%;
            margin: auto;


::v-deep(h1){
    margin: 15px 0;

}

::v-deep(h2){
    margin: 15px 0;
    font-size: 26px;
    font-weight: 500;
    line-height: 35px;

}
::v-deep(p){
  font-size:22px;
    margin: 10px 0;
    line-height: 45px;
    font-weight: 500;
}

::v-deep(ul){
    li{
      font-size: 18px;
            margin: 25px 0;

    }
  }


}



@media (max-width:1000px) {
.container-content{
  display: flex;
flex-direction: column;
}

.content{
width: 90%;
}

.text {
  text-align: center;
  width: 100%;
animation: moveright 1s ease-in-out;
margin: auto;



  h1 {
          font-size: 30px;
          font-weight: 600;
          margin: 25px 0;
          text-transform: uppercase;
          letter-spacing: 2.5px;

          }

          span{
            font-size: 20px;
            text-align: center;
          }


  
  p{
    font-size:20px;
    margin: 25px 0;
  }
}


.hero-image{
height: 400px;
width: 350px;
object-fit: cover;
border-radius: 20px;
padding: 10px;
  animation: moveleft 1s ease-in-out;

}
.read-container{
justify-content: center;
}
}

@media (max-width:800px) {
.hero-image{
height: 400px;
width: 90%;
object-fit: cover;
border-radius: 20px;
padding: 10px;
  animation: moveleft 1s ease-in-out;

}
}
</style>