<template>
  <div>
    <app-bar-component path="/" name="Home"></app-bar-component>
    <v-row justify="center" align="center" class="section-one">
      <v-col cols="12" sm="8" md="6" justify="center" align="center" >
        <!-- <img src="/images/logo.png" width="200"> -->
        <logo-component></logo-component>
        <p class="display-3 font-weight-bold">VACO</p>
        <p class="body-2 red--text text--darken-3">You are offline and cannot view this page</p>
          <v-btn color="indigo" to="/">Home</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import AppBarComponent from '@/components/AppBarComponent'
import LogoComponent from '@/components/LogoComponent'



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