<template>
<div class="wrapper">
  <div class="container-extra">
      <h1>Les services en plus</h1>

      <div class="container-items">
          <div v-for="item in items" :key="item" class="item"> 
                                  <span class="title">{{item.attributes.title}}</span>

                  <img :src="imageUrl+item.attributes.icon.data.attributes.url" alt="" class="icon">

              <p><VueShowdown
:markdown="item.attributes.description"

/></p>
              <p>{{item.attributes.price}} euros/page</p>

          </div>
      </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import { imageUrl } from '../config'
import * as Sentry from '@sentry/vue';

export default {

data(){
  return {
items:''
  }
},
mounted(){
this.getExtra()
},
methods:{
  async getExtra(){

try{ 
  const response = await axios.get('extras?locale=fr&populate=*');

  const items = response.data.data;
  this.items=  items;
  this.imageUrl = imageUrl;

} catch(error){
    Sentry.captureException(error);

}


    }
}
}
</script>

<style lang='scss' scoped>
.container-extra{
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

.container-items{
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.items_container{
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;   
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
}

.title{
  font-size: 30px;
  font-weight: 600;
}
.item{
display: flex;
flex-direction: column;
align-items: center;
background: #ffffff;
width: 500px;
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
  font-size: 20px;
  padding: 10px;
  text-align: left;
  line-height: 30px;
}
}

.icon{
height: 70px;
padding: 20px;

}

</style>