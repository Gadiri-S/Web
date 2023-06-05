<template>
<div v-motion-fade>
   <vue-cookie-accept-decline
    :debug="false"
    :disableDecline="false"
    :showPostponeButton="false"
    @clicked-accept="handleCookieAccepted"
    @clicked-decline="handleCookieDeclined"
    elementId="myPanel1"
    position="bottom-left"
    ref="myPanel1"
    transitionName="slideFromBottom"
    type="floating"
  >
    <template #message>
      <div class="cookie-message">
        <img src="../assets/cookie.webp" class="icon-cookie" alt="Image of a cookie">
        <span>We use cookies to ensure you get the best experience on our website.</span>
      </div>
    </template>
    <template #acceptContent>
       Accept !
    </template>
    <template #declineContent>
      Decline
    </template>
  </vue-cookie-accept-decline></div>
</template>

<script>
 import 'vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css';
import Cookies from 'js-cookie';
import VueGtag from 'vue-gtag';

export default {
  data() {
    return {
      cookieConsentAccepted: false,
      showComponent: false // New data property to control component visibility

    };
  },
  methods: {
    handleCookieAccepted() {
      Cookies.set('cookieConsent', 'accepted');
      this.cookieConsentAccepted = true;
 Cookies.set('ga-cookie', 'true');
    this.$gtag.config('G-TY4BZD5GGX', {
      send_page_view: true
    });    },
    handleCookieDeclined() {
 Cookies.set('ga-cookie', 'false');
    this.$gtag.config('G-TY4BZD5GGX', {
      send_page_view: false
    });    }
  },
  mounted() {
    const cookieConsent = Cookies.get('cookieConsent');
    this.cookieConsentAccepted = cookieConsent === 'accepted';

    // Delay the appearance of the component
   
  }
}

</script>

<style lang="scss">


.icon-cookie {
  height: 50px;
  padding: 15px;
}

.cookie-message {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-evenly;
  color: rgb(49, 49, 49);
  font-size: 25px;
}

.cookie {

    padding: 2%;
  // Bar style
  &__bar {
   

    &__buttons {
            margin: 25px;
         background: white;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            border: none;
            color: #0b006e;
            padding: 20px;
            font-size: 23px;

            
            &:hover{
                border: none;
                background: #0b006e;
                color: white;
            }

      &__button {
        &--accept {
                      margin: 25px;
         background: white;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            border: none;
            color: #0b006e;
            padding: 20px;
            font-size: 23px;

            
            &:hover{
                border: none;
                background: #0b006e;
                color: white;
            }
        }

        &--decline {
            margin: 25px;
         background: white;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            border: none;
            color: #0b006e;
            padding: 20px;
            font-size: 23px;

            &:hover{
                border: none;
                background: #0b006e;
                color: white;
            }
        }
      }
    }
  }

  // Floating style
  &__floating {

    &__buttons {

       &__button {
        &--accept {
            margin: 25px;
         background: white;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            border: none;
            color: #0b006e;
            padding: 20px;
            font-size: 23px;

            &:hover{
                border: none;
                background: #0b006e;
                color: white;
            }

        }

        &--decline {
            margin: 25px;
         background: white;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            border: none;
            color: #0b006e;
            padding: 20px;
            font-size: 23px;

            &:hover{
                border: none;
                background: #0b006e;
                color: white;
            }
        }
      }
    }
  }
}
</style>