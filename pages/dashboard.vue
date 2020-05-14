<template>
  <div>
    <v-row>
      <v-col cols="12" sm="6" md="4">
        <v-card>
          <v-card-title>LODASH</v-card-title>
          <v-card-text>
              {{myText}}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-card>
          <v-card-title>LODASH</v-card-title>
          <v-card-text>
              {{myArr}}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-card>
          <v-card-title>MOMENT</v-card-title>
          <v-card-text>
              {{$moment()}}

              {{myDate}}
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card>
          <v-card-title>UPLOT</v-card-title>
          <v-card-text>
             <line-chart></line-chart>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
//import Logo from '~/components/Logo.vue'
//import VuetifyLogo from '~/components/VuetifyLogo.vue'
import LineChart from '@/components/LineChart'

let capitalize = require('lodash/capitalize')
let map = require('lodash/map')


export default {
    middleware : [],
    components: { LineChart },
    layout : 'default',
    data () {
        return {
        message : 'HELLO WORLD',
        arr : ['A', 'B', 'C'],
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
        myText(){
            //return this.message
            return capitalize(this.message)
        },
        myArr(){
            return map(this.arr, item =>{
                return item + 55
            })
        },
        myDate(){
            return this.$moment().add(3,'days').format('YYYY-DD-MM')
        },
    },//COMPUTED
    methods:{
        plotChart(){
        
        },//PLOT CHART
    }//METHIDS
  }//EXPORT
</script>

<style scoped>

</style>
