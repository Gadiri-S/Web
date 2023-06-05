<template>
<div class="wrapper">  
   <div v-if="isFormCorrect" >
<div v-motion-pop class="success-container">
<h1>Your message was successfully sent.</h1>
<div class="container-images">
<img src="../assets/microsoft-edge-5bM6nLQ9Qv0-unsplash.webp" class="img" alt="">

<img src="../assets/microsoft-edge-6CNB3iD8M4E-unsplash.jpg" class="img" alt="">

<img src="../assets/microsoft-365-TLiWhlDEJwA-unsplash.jpg" class="img" alt="">

<img src="../assets/microsoft-edge-6CxMLmoyfGg-unsplash.jpg" class="img" alt="">

<img src="../assets/enis-yavuz-iGf7CfWgjTI-unsplash.jpg" class="img" alt="">

<img src="../assets/chef.jpg" class="img" alt="">

<img src="../assets/c.jpg" class="img" alt="">

<img src="../assets/docks.jpg" class="img" alt="">

<img src="../assets/photo-serious-hipster-girl-with-hair-buns-blue-eyeliner-dressed-formal-dark-green-jacket-looks-directly-camera-walks-outdoors-poses-listens-something-attentively.jpg" class="img" alt="">


</div>
</div>
</div>
  <div v-else class="container-contact" id ='container-contact'>
  

      <div   class="content">
      <div class="banner"></div>
  </div>

  <div  class="form-container">
  <h1> Reach us! </h1>
<h2>For any question or inquiry, please feel free to contact us.</h2>

<div v-if="this.dataInfos==true" v-motion-pop class="infos-wrapper">
<div class="phone"> <img src="../assets/telephone.webp" class="icon" alt="">  <span>{{phone}}</span> </div>
<div class="email"><img src="../assets/email.webp" class="icon" alt=""> <span>{{mail}}</span> </div>
</div>

<div >
<form ref="form" id="form" @submit.prevent="handleSubmit" enctype="multipart/form-data" >
      
      <div v-if="v$.firstname.$error" class="error" > <input type="text" placeholder="Required field. Only letters allowed.*" v-model="firstname" name='firstname'  @blur="v$.firstname.$touch" required>
        
        </div>
        
        <div v-else> <input type="text" placeholder="Firstname*" v-model="firstname" name='firstname'  @blur="v$.firstname.$touch" required></div>



      <div v-if="v$.lastname.$error" class="error" > <input type="text" placeholder="Required field. Only letters allowed.*" v-model="lastname" name='lastname'  @blur="v$.lastname.$touch" required>
        
        </div>
        
        <div v-else> <input type="text" placeholder="Lastname*" v-model="lastname" name='lastname'  @blur="v$.lastname.$touch" required></div>
      
      
        <div v-if="v$.business.$error" class="error" > <input type="text" placeholder="Required field. Only letters and numbers allowed.*" v-model="business" name='business'  @blur="v$.business.$touch" required>
        
        </div>
        
        <div v-else> <input type="text" placeholder="Company name*" v-model="business" name='business'  @blur="v$.business.$touch" required></div>
              
              
    <div v-if="v$.email.$error" class="error" > <input type="email" placeholder="Required field. Please enter a valid email.*" v-model="email" name='email'  @blur="v$.email.$touch" required>
        
        </div>
        
        <div v-else> <input type="text" placeholder="Email*" v-model="email" name='email'  @blur="v$.email.$touch" required></div>
    
    
    
    <div v-if="v$.tel.$error" class="error" > <input type="tel" placeholder="Required field. Only numbers are allowed.*" v-model="tel" name='tel'  @blur="v$.tel.$touch" required>
        
        </div>
        
        <div v-else> <input type="tel" placeholder="Phone number*" v-model="tel" name='tel'  @blur="v$.tel.$touch" required></div>



<div v-if="v$.message.$error" class="error" >    <textarea name="message" id="message" cols="30" rows="10" placeholder="Required field. *" v-model="message" @blur="v$.message.$touch" required></textarea>
        
        </div>
        
        <div v-else>         <textarea name="message" id="message" cols="30" rows="10" placeholder="Your message *" v-model="message" @blur="v$.message.$touch" required></textarea></div>

      
      

      <button @click="send">Send</button>

  </form>  </div>
  </div>
  
  </div> <!---->
</div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email, alpha, numeric, alphaNum } from '@vuelidate/validators'
import * as Sentry from '@sentry/vue';

  import axios from 'axios'

export default {

data () {
  return {
    firstname: '',
    lastname: '',
    business:'',
    v$: useVuelidate(),
      email: '',
      tel:'',
      message:'',
      isFormCorrect:"",
      submitted: false,
      phone:'',
      mail:'',
      dataInfos:""

  }
},
validations(){

return {
        firstname: {alpha,required},
    lastname: {alpha,required},
    business:{required},
      email: {email,required},
      tel:{numeric,required},
      message:{required},
}
},
beforeMount(){
this.getInfos()
}
,
  created() {
          setTimeout(() => this.isFormCorrect = false, 1000)
      },
  methods: {

  async getInfos(){

        try{

    const response = await axios.get('information');

      const phone = response.data.data.attributes.phone;
          const mail = response.data.data.attributes.email;

          this.phone = phone;
          this.mail = mail;

          this.dataInfos = true;

}
    catch(error){
  Sentry.captureException(error);

    }
  } ,
          async send() {




            this.submitted = true;
const isFormCorrect = await this.v$.$validate();
this.isFormCorrect = isFormCorrect

if (isFormCorrect==true) {

const form = document.getElementById('form');

      try {
  const subject =`You received a new business inquiry from ${this.firstname} ${this.lastname} of the company ${this.business} `
  const htmlContent = `<h1> You just received a new business inquiry! </h1> <br>
    <p>Firstname : ${this.firstname}</p> <br>
          <p>Lastname : ${this.lastname}</p> <br>
          <p>Email : ${this.email}</p> <br>
          <p>Phone number : ${this.tel}</p> <br>
          <p>Message : ${this.message} </p> 
          `


          const postRequest = axios.post('form-customs', {
                    subject: subject,
          text: htmlContent,
          isFormCorrect:isFormCorrect,
'data':{
  
'firstname': this.firstname,
'lastname': this.lastname,
'email': this.email,
'business': this.business,
'phone': this.tel,
'message': this.message

}
          });

  await Promise.all([postRequest]);

    } catch (error) {
      }

      }
}}}
</script>

<style lang="scss" scoped>
.wrapper{
  //background: #260081;
      background: #ffffff;  


}

.container-contact{
        display: flex;
max-width:1900px;
margin: auto;
  color: #00009e;
  overflow-x: hidden;
}
.form-container{
width: 50vw;
}

.success-container{
   background-size: cover;
  width: 100%;
   h1{
 
    color: #00009e;
    font-weight: bold;
  }


.container-images {
  padding: 2%;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 15px;
grid-row-gap: 15px;
}


.img{
  height: 100%;
  width: 100%;
  border-radius: 20px;
  object-fit: cover;
}



}
.content{
width: 50vw;


.banner{
background: url('../assets/ezgif-1-cbaa9773bb.webp');
height: 100%;
object-fit: cover;
background-size: cover;
background-position: center;
}

}

.icon{
height: 40px;
}
h1{
  font-size: 45px;
  padding: 20px 0;
}
form{
  display: flex;
  flex-direction: column;
  margin: 25px 0;
  padding: 10px;
    
  
  input,textarea{
      border-radius: 5px;
      border: none;
font-size:20px;
  padding: 6px 6px 6px 10px;
  margin: 5px auto;
background-color:#ffffff;
  color: #00009e;
  width: 90%;
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;    }


          button{
            font-size: 25px;
            border: none;
          background: #00009e;
            color: rgb(255, 255, 255);;
            padding: 10px 25px;
            margin: 25px auto;
            width: 80%;
            cursor:pointer;
                transition: .5s ease-in-out;

            &:hover{
          background: rgb(9, 214, 118);
  cursor: pointer;
  transition: .5s ease-in-out;
  color:  #ffffff;;
}
          }


  ::placeholder{
  color: #5c5858;
  }
}
.error{
  

::placeholder{
  color: #ff0000;
  }

}

.phone,.email{
display: flex;
align-items: center;
padding: 15px ;
margin: auto;

span{
  font-size: 15px;
  font-weight: 600;
  padding: 0 10px;
}
}
@media (max-width:1000px) {

.content{
  display: none;
}

.form-container{
  width: 80vw;
  margin: auto;

  h1{
    font-size: 35px;
  }

  h2{
    font-size: 20px;
  }
}
}


@media (max-width:700px) {

.content{
  display: none;
}

.form-container{
  width: 100%;
  margin: auto;

  h1{
    font-size: 30px;
    padding: 10px;
  }

  h2{
    font-size: 20px;
          padding: 10px;

  }
}

.success-container{
   background-size: cover;
  width: 100%;
   span{
    font-size: 25px;
    padding: 25px 0;
    color: #00009e;;
  }
}
}
</style>