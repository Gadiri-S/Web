<template>
<div>

<router-view/> 

<div v-if="showComponent" class="banner-consent">
  <Consent/>
</div>

</div>
</template>

<script>
import Consent from './components/Consent.vue'
export default {

  data(){
    return {
showComponent:false
    }
  },
components:{
Consent
},
mounted(){
    window.scrollTo(0,0);

     setTimeout(() => {
      this.showComponent = true;
    }, 1500);
  },
}

</script>
<style lang="scss">



*{
padding: 0;
margin: 0;
}
#app {
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
font-family: 'Roboto', sans-serif;
color:white;
  h1{
font-family: 'Poppins', sans-serif;

}

}

::selection {
background-color: rgb(255, 196, 0);
color: rgb(21, 0, 209);
}
img {
-webkit-user-drag: none; /* Safari */
-khtml-user-drag: none; /* Konqueror */
-moz-user-drag: none; /* Firefox */
-o-user-drag: none; /* Opera */
}
  button{
      font-size: 20px;
      padding: 10px;
      border-radius: 5px;

      color:white;
      font-weight: 600;
font-family: 'Roboto', sans-serif;
            cursor:pointer;   
            transition: .4s ease-in-out;
            
            &:hover{
      
                            transition: .4s ease-in-out;

            }
            
            }

button,textarea,input{
font-family: 'Roboto', sans-serif;

}

a{
text-decoration: none;
  color: inherit;

&:visited{
  color: inherit;
}

&.router-link-exact-active {
              font-weight: bold;
              color: rgb(255, 174, 0);;
  }
}


.banner-consent {
 position: -webkit-sticky; /* for browser compatibility */
  position: sticky;
    bottom:0;

    background-color: #ffffff;
  text-align: center;
  width: 100%;
  z-index: 999;
 }


@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:wght@400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700&display=swap');
</style>
