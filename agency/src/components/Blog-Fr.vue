<template>
<div class="wrapper">
<div v-if="articles" v-motion-fade class="container">
<h1>Articles et actualités</h1>

<div class="blog-container">
        
<router-link div v-for="article in articles" :key="article" class="article" :to="{ name: 'ArticlePage', params: { id: article.attributes.Slug}}" >       
        <img :src="imageUrl+article.attributes.image.data.attributes.url" class="image" alt="">
                                            <span class="title">{{article.attributes.title}}</span>

                                <span class="date">{{dateFormated(article.attributes.publishedAt)}}</span>


 

</router-link>


</div>
            <span class="link"> <router-link to="/blog">Tout voir</router-link> </span>

</div></div>
</template>

<script>
import axios from 'axios'
import { imageUrl } from '../config'
import * as Sentry from '@sentry/vue';

export default {

data(){
return {
articles:'',
imageUrl:''
}
},
beforeMount(){
this.getArticles()
},
methods:{
async getArticles(){

try{
    const response = await axios.get('blogs?locale=fr&populate=*')




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

.container{
    //background: #260081;
background-color: #ffffff;
    color: #00009e;
    padding: 2%;

max-width: 1900px;
margin: auto;
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

@media (max-width:900px) {
h1{
font-size: 30px;
}
}
</style>

