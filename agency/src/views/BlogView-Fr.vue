<template>
<div v-if="data==true" class="wrapper" v-motion-fade>
<Hero/>

<div class="container-blog" id='container-blog'>
<div class="container">
<h1>Articles & news</h1>
    <div class="blog-container">
        
        <router-link v-for="article in articles" :key="article" class="article"  :to="{ name: 'ArticlePage', params: { id: article.attributes.Slug}}" >   <img :src="imageUrl+article.attributes.image.data.attributes.url" class="image" alt="">
                                            <span class="title">{{article.attributes.title}}</span>

                                <span class="date">{{dateFormated(article.attributes.publishedAt)}}</span>



 

</router-link>

</div>

</div>

<Footer/></div>

</div>
</template>

<script>
import axios from 'axios'
import Hero from '../components/HeroFr/HeroBlog-Fr.vue'
 import Footer from '../components/FooterFr/Footer-Fr.vue'
import * as Sentry from '@sentry/vue';
import { imageUrl } from '../config'


export default {

components:{
Hero,Footer
},
data(){
return {
articles:'',
data:'',
imageUrl:''
}
},
beforeMount(){
this.getArticles()
},
mounted(){
    window.scrollTo(0,0);
},
methods:{
async getArticles(){

try{
    const response = await axios.get('blogs?locale=fr&populate=*')

this.data = true;


const articles = response.data.data.reverse();

this.articles = articles;
this.imageUrl = imageUrl;

    } catch(error){
          Sentry.captureException(error);

        }
},
    dateFormated(posted){

const event = new Date(posted);
return event.toDateString()


}

}
}
</script>

<style lang="scss" scoped>

.container-blog{
max-width: 1900px;
margin: auto;
}

.container{
    //background: #260081;
background-color: #ffffff;
    color: #00009e;
    padding: 2%;


}

h1{
font-size: 45px;
    padding: 20px 0;

}

.blog-container{
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
padding: 2%;
}

.article{

display: flex;
flex-direction: column;
justify-content: space-between;
border-radius:5px;
max-width: 450px;
text-align: left;
 .title{
    font-size: 30px;
    font-weight: bold;
    padding: 25px 10px;
    color: #00004d;
}
.image{
    max-height: 350px;
    width: 100%;
    object-fit: cover;
    border-radius: 20px ; 
    }



.date{
    font-size: 17px;
    font-weight: bold;
    padding: 10px;
}

 
}


.link{
font-size: 20px;
padding: 25px;
}
</style>

