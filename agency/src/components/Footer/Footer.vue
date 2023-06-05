<template>
<div class="wrapper">
<footer v-if="data" v-motion-fade class="footer">

<div class="company">
<div class="logo">
    <router-link to='/'>  <img :src="imageUrl+logo" class="logo-footer" alt="logo"> </router-link>
</div>
<div class="presentation">
    <p>{{description}}</p>
</div>
<div class="socials">
<font-awesome-icon icon="fa-brands fa-linkedin" class="icon" />
<font-awesome-icon icon="fa-brands fa-google-plus-g" class="icon" /> 
</div>
</div>

<div class="links">
<span>Quick Links</span>
<ul>
<li> <router-link to ='/solutions'> Our solutions</router-link> </li>
        <li> <router-link to ='/process'>Process</router-link> </li>
        <li> <router-link to ='/blog'>Blog</router-link> </li>
        <li> <router-link to ="/contact">Contact us</router-link> </li>
        <li> <router-link to ="/legal-mentions">Legal mentions</router-link> </li>
        <li> <router-link to ="/confidentiality">Confidentiality</router-link> </li>

</ul>
</div>
<div class="address">
<span>Reach Us</span>
<ul>
    <li><font-awesome-icon icon="fas fa-phone-alt" /> {{phone}}</li>
    <li><font-awesome-icon icon="fas fa-at" /> {{mail}}</li>


</ul>
</div>


</footer></div>
</template>

<script>
import axios from 'axios'
import { imageUrl } from '../../config'
import * as Sentry from '@sentry/vue';


export default {
name:'Footer',


data(){
return {
    logo:'',
    description:'',
    phone:'',
    mail:'',
    imageUrl:'',
    data:''
}
},
beforeMount(){
this.getInfos()
},
methods:{
async getInfos(){

    try{
const response = await axios.get('information?populate=*');

const description = response.data.data.attributes.description;
const phone = response.data.data.attributes.phone;
const mail = response.data.data.attributes.email;
const logo = response.data.data.attributes.logo.data.attributes.url;
this.imageUrl = imageUrl;
this.description = description;
this.phone = phone;
this.mail = mail;
this.logo = logo;
this.data = true;
    } catch(error){
          Sentry.captureException(error);

        }
}
}
}


</script>

<style lang='scss' scoped>



.footer{
display: flex;
justify-content: space-around;
flex-wrap: wrap;
padding: 2%;
color: white;
    text-align: left;
        background-repeat: no-repeat;
background-position: bottom;
background-size: cover;
background-color:#001633;

max-width: 1900px;
margin: auto;
}

.company{
width: 25%;

.logo{
    display: flex;
    align-items: center;
.logo-footer{
    height: 100px;
    margin: 15px 0;
}
span{
    font-size: 20px;
    font-weight: bold;
            transition: .3s ease-in-out;


                    &:hover{
    color: #ffbb00;
cursor: pointer;
transition: .3s ease-in-out;
}
}}
    
.icon{
    font-size: 30px;
            margin: 5px;
            

            &:hover{
    color: #ffbb00;
cursor: pointer;
transition: .3s ease-in-out;
}

}

.presentation {
    p {
        font-size: 17px;
                margin: 5px;

    }
}
}

.links {


span{
    font-size: 20px;
    font-weight: bold;
            transition: .3s ease-in-out;


                    &:hover{
    color: #ffbb00;
cursor: pointer;
transition: .3s ease-in-out;
}
}

li{
    list-style: none;
    font-size: 18px;
    margin: 15px 0;
    cursor: pointer;
        transition: .3s ease-in-out;


                    &:hover{
    color: #ffbb00;
cursor: pointer;
transition: .3s ease-in-out;
}

}
}

.address {
    span{
    font-size: 20px;
    font-weight: bold;
            transition: .3s ease-in-out;


                    &:hover{
    color: #ffbb00;
cursor: pointer;
transition: .3s ease-in-out;
}
}

li{
    list-style: none;
    font-size: 18px;
    margin: 15px 0;
    cursor: pointer;

            transition: .3s ease-in-out;


                    &:hover{
    color: #ffbb00;
cursor: pointer;
transition: .3s ease-in-out;
}
}
}

.newsletter{
display: flex;
flex-direction: column;
    span{
    font-size: 20px;
    font-weight: bold;
}
p{
    font-size: 17px;
    margin: 15px 0;
}

input,button{
    font-size:18px;
    border-radius: 25px;
    padding: 10px;
    background: transparent;
    color: white;
    border: 1px solid white;
    margin: 15px 0;
}
}

@media (max-width:1000px) {
.company,.socials,.links,.address{
    width: 100%;
    margin: 30px auto;

    .logo{
    .logo-footer{
    height: 100px;
}
}
}
}
</style>