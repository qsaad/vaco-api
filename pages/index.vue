<template>
  <div>
    <app-bar-component path="login" name="Login"></app-bar-component>
    <v-row justify="center" align="center" class="section-one">
      <v-col cols="12" sm="8" md="6" justify="center" align="center" >
        <!-- <img src="/images/logo.png" width="200"> -->
        <logo-component></logo-component>
        <p class="display-3 font-weight-bold">VACO</p>
        <p class="body-2 red--text text--darken-3">A free webapp to manage tasks for virtually anything</p>
          <v-btn color="indigo" to="signup">Sign up</v-btn>
          <v-btn color="indigo" to="dashboard">Dashboard</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import AppBarComponent from '@/components/AppBarComponent'
import LogoComponent from '@/components/LogoComponent'

const check = () => {
  if (!('serviceWorker' in navigator)) {
    throw new Error('No Service Worker support!')
  }
  if (!('PushManager' in window)) {
    throw new Error('No Push API Support!')
  }
}

const registerServiceWorker = async () => {
  const registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js')
  return registration
}

const main = async () => {
  try{
    check();
    let registration = await registerServiceWorker()
    if(registration){
      console.log('SW is registered')
     }
  }
  catch(error){
    console.log('Service Worker ', error.message)
  }
}

if (process.browser) {
  main()
}

export default {
  middleware : [],
  components: { AppBarComponent, LogoComponent },
  layout : 'landing',
  data () {
    return {
    
    }
  },//DATA
  async asyncData({store}){
    return{
               
    }//RETURN
  },//ASYNC DATA
  async fetch({store}){
            
  },//FETCH
  created(){
            
  },//CREATED
  mounted(){
    
  },//MOUNTED
  watch:{
        
  },//WATCH
  computed:{
   
  },//COMPUTED
  methods:{
   
  }//METHIDS
  }//EXPORT
</script>

<style scoped>
.section-one{
  height : 100vh;
}
</style>