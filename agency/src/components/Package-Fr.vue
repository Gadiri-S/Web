<template>
<div class="wrapper">
  <div v-if="data" v-motion-fade class="container">
    <h1>Nos solutions</h1>

    <div class="solution" v-for="(solution, index) in solutions" :key="solution">
      <div class="package" :class="index % 2 === 0 ? 'even' : 'odd'">
          <img :src="imageUrl+solution.attributes.image.data.attributes.url" class="package-illustration" alt="" />
        <div class="package-content">
          <div class="content">
          <h2 class="title">{{ solution.attributes.title }}</h2>
          <p class="detail">{{ solution.attributes.description }}</p>
          <span class="title">Nous recommandons cette solution aux : </span>
          <div class="item-container">
            <span class="item" v-for="business in solution.attributes.businesses" :key="business">{{ business.name }}</span>
          </div>
          <span class="title">Cette solution inclut : </span>
          <ul>
            <li v-for="detail in solution.attributes.detailSolution" :key="detail">
              <VueShowdown :markdown="detail.description" />
            </li>
            <br />
            <span class="page">{{ solution.attributes.additionalPages }}euros par page additionnelle*</span>
          </ul>
          <div class="price-container">
            <span class="price">{{ solution.attributes.price }}€</span>
            <router-link v-if="solution.attributes.Slug" :to="{ name: 'SolutionDetailViewFr', params: { id: solution.attributes.Slug } }">
              <button>Démarrer</button>
            </router-link>
          </div>
</div>

        </div>
      </div>
    </div>
  </div>
</div>

</template>
<script>
import axios from 'axios'
import { reactive, ref } from 'vue';
import {apiUrl} from '../config' 
import {imageUrl} from '../config' 
import * as Sentry from '@sentry/vue';

export default {
data(){

return {
      solution:'',
  solutions:'',
  details:'',
  apiUrl:'',
  imageUrl:'',
data:'',
}
},
mounted(){
this.smallBusiness();

},
methods:{


async smallBusiness(){


try{


  const res = await axios.get(`solutions?locale=fr&populate=deep`)

    this.solutions = res.data.data;
    this.imageUrl = imageUrl;

this.data = true;


    } catch(error){
  Sentry.captureException(error);

    }
}

}
}
</script>

<style lang='scss' scoped>

.container{
  background-color: #ffffff;
    color:#00009e;
    max-width: 1900px;
    margin: auto;

}
h1{
font-size: 50px;
}

.package{


display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
background-color: white;

}

.even {
  grid-template-areas: "illustration content";
}

.odd {
  grid-template-areas: "content illustration";

}

.package-illustration {
  grid-area: illustration;
    object-fit: cover;
  height: 100%;
    width: 100%;

  }

.package-content {
  grid-area: content;
  display: flex;
  flex-direction: column;
  justify-content: center;
      padding: 2%;

}

.image {
  object-fit: cover;
  height: 100%;
    width: 50%;

}

.title {
  font-size: 30px;
  font-weight: 700;
}

.detail {
  font-weight: 500;
  font-size: 18px;
  text-align: left;
  padding: 20px 2%;
}


.page{
  font-size: 12px;
}
ul{
  text-align: left;
  padding: 15px;
        font-weight: 500;
      font-size: 18px;

      li{
          list-style: circle;
          font-size:18px;
      }
}


.price{
  color: #6f00ff;
  font-size: 35px;
  font-weight: 700;
}

.title{
  font-size: 30px;
  font-weight: 700;
}


strong{
  color:#6f00ff;
}

.item-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.item{
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background: #ffffff;
font-weight: 600;
min-width: 100px;
border-radius: 25px;
padding: 25px;
margin: 15px 0;
  transition: .2s ease-in-out;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
top: 0;
position: relative;
&:hover{
  transition: .2s ease-in-out;

  cursor: pointer;
  top: 5px;
}

p{
  margin: 15px auto;
  font-weight: 600;
}
}

.price-container{
display: flex;
justify-content: center;
}
button{
background: #00009e;
margin: 0 0 0 20px;
  border: none;
  transition: .2s ease-in-out;

top: 0;
position: relative;
&:hover{
  transition: .2s ease-in-out;
  border: none;

  cursor: pointer;
  top: -5px;
}

}

@media (max-width:1000px) {



.package-container,.package-container-expert{
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(4, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
}


.package{


  display: flex;
flex-direction: column;
background-color: white;
padding: 2%;

  


}
.page{
  font-size: 12px;
}
ul{
  text-align: left;
  padding: 15px;
        font-weight: 500;
      font-size: 18px;

      li{
          list-style: circle;
          font-size:18px;
      }
}


.price{
  font-size: 25px;
  font-weight: 700;
}

.title{
  font-size: 20px;
  font-weight: 700;
}

}
</style>