<template>
<div>

<!--Menu Mobile & Tablet-->
<div class="header-mobile">

    <div class="container-first-row">

<div class="logo" v-motion-slide-top>
<router-link to ='/en'>   <img  src="../../assets/logo-mini.webp"  class="logo-img" alt=""></router-link>

</div>
<router-link to='/fr'> <img src="../../assets/france.webp" class="lang" alt=""> </router-link>

<div class="menu-burger" @click="showMenu">
<img src="../../assets/burgerwhite.webp"  class="menu-burger" alt="">
</div>
</div>
<transition name="nested">
<div v-if="show" class="nav-menu-mobile">
    <ul>
        <li> <router-link to ='/solutions'> Our solutions</router-link> </li>
        <li> <router-link to ='/process'>Process</router-link> </li>
        <li> <router-link to ='/blog'>  Blog </router-link> </li>
        <li> <router-link to ="/contact">Contact us</router-link> </li>

        
    </ul>
</div>
</transition>
</div> 


<!--Menu Desktop-->

<div class="header"  >

<div   class="logo"  v-motion-slide-top>
<router-link to ='/en'>   <img  src="../../assets/logo-mini.webp"  class="logo-img" alt=""></router-link>
</div>

<div class="nav-menu">
    <ul>
        <li> <router-link to ='/solutions'> Our solutions</router-link> </li>
        <li> <router-link to ='/process'>Process</router-link> </li>
        <li> <router-link to ='/blog'>Blog</router-link> </li>
        <li> <router-link to ="/contact">Contact us</router-link> </li>

        
    </ul>
</div>
<router-link to='/fr'>    <img  src="../../assets/france.webp" class="lang" alt=""></router-link>

<div>
<button> <router-link to ="/contact"> Get started </router-link> </button>
</div>
</div> 
</div>
</template>

<script>
import axios from 'axios'
import { imageUrl } from '../../config'
import * as Sentry from '@sentry/vue';

export default {
data(){
    return {
logo:'',
data:'',
imageUrl:'',
            show:false,
            advantages: [
{
id: 'advantages'}],
            process: [
{
id: 'process'}],
packages: [
{
id: 'packages'}],
contact: [
{
id: 'contact'}],


    }
},
beforeMount(){
this.getLogo()
},
methods:{
    showMenu(){

        this.show = !this.show
    },
    nav(id) {

const position = document.getElementById(id).offsetTop;
// smooth scroll
window.scrollTo({ top: position, behavior: "smooth" });  
},

async getLogo(){

try{
const res = await axios.get('logo?populate=*')

const logo = res.data.data.attributes.logo.data.attributes.url


this.logo = logo;
this.data = true;
this.imageUrl = imageUrl;

} catch (error){
      Sentry.captureException(error);

}

}

}

}
</script>

<style lang="scss" scoped>

.header-mobile,.container-first-row{
display: none;
}

 
.header{
display: flex;
justify-content: space-around;
align-items: center;
padding: 15px;
color:rgb(255, 255, 255);
font-weight: 700;   

}
.nav-menu{
display: flex;
align-items: center;

ul {
    
    display: flex;
    align-items: center;
    
    transition: all .4s ease;


li{
    list-style-type:none;
    margin: 0 15px 0 15px;
    font-size: 20px;
    transition: all .4s ease;
    cursor:pointer;

    &:hover{
        color: rgb(255, 174, 0);
    }

}
    
}
}
.logo-img{
height: 100px;
object-fit: cover;
}

.lang{
height: 40px;
}

button{
    font-size: 20px;
    padding: 10px;
        background: transparent;

    width: 175px;
    font-weight: 600;
    font-family: 'Raleway', sans-serif;
color:  #ffffff;;

            cursor:pointer;   
border: 1px solid white;
            &:hover{
        background: rgb(9, 214, 118);
cursor: pointer;
transition: .5s ease-in-out;
color:  #ffffff;;
border: 1px solid rgb(9, 214, 118);
}
            
            }

            @keyframes movedown {

    0% {
        transform: translateY(-400px);
    }
    100% {
        transform: translateX(0px);

    }
}
/*Responsive mobile & tablets*/ 

@media (max-width:1200px) {
.header{
    display: none;
}

.logo-img{
height: 50px;
object-fit: cover;
}
.header-mobile{
    display: block;


}
.container-first-row{
    display: flex;
                align-items: center;

    justify-content: space-around;
    padding:15px;
}
.menu-burger{
    height: 50px;
    cursor: pointer;
}

.nav-menu-mobile{


    ul li{
        list-style-type: none;
        font-size: 25px;
        margin: 15px 0 15px 0;
        cursor: pointer;

        &:hover{
            background: rgba(255, 255, 255, 0.274);
            transition: .5s;
        }
    }
}

.nested-enter-active, .nested-leave-active {
transition: all 0.3s ease-in-out;
}
/* delay leave of parent element */
.nested-leave-active {
transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
transform: translateY(30px);
opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner { 
transition: all 0.3s ease-in-out;
}
/* delay enter of nested element */
.nested-enter-active .inner {
transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
transform: translateX(30px);
/*
Hack around a Chrome 96 bug in handling nested opacity transitions.
This is not needed in other browsers or Chrome 99+ where the bug
has been fixed.
*/
opacity: 0.001;
}


}

</style>