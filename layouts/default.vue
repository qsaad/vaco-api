<template>
  <v-app dark>
<!-- ++++++++++++++++++++++++++++++++++++++++ -->
<!-- NAV SIDE BAR -->
<!-- ++++++++++++++++++++++++++++++++++++++++ -->    
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

<!-- ++++++++++++++++++++++++++++++++++++++++ -->
<!-- APP BAR -->
<!-- ++++++++++++++++++++++++++++++++++++++++ -->
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
      <!-- <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn> -->
     <v-avatar size="30" tile >
            <img src="/images/logo.png">
      </v-avatar>
      
      <v-spacer />

      <v-menu open-on-click left offset-x top >
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-badge color="green" :content="notifications.length" overlap :value="notifications.length > 0">
                <v-icon>mdi-bell-outline</v-icon>
              </v-badge>
            </v-btn>
          </template>
          <!-- <v-list>
            <v-list-item two-line dense v-for="(item, index) in notifications" :key="index" @click="notificationRead(item)">
              <v-list-item-avatar size="32" color="red" class="pa-0">
                {{ initials(item.by) }}
              </v-list-item-avatar>
                
              <v-list-item-content class="pa-0">
                <v-list-item-title class="green--text">{{ item.status }} <span class="yellow--text"> {{ item.group }}</span></v-list-item-title>
                <v-list-item-subtitle>
                  <v-row dense justify="start">
                    <v-col cols="6">with you on {{ timestampToDate(item.createdOn) }}</v-col>
                  </v-row>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list> -->
        </v-menu>

        <v-menu open-on-click left offset-x top >
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-avatar color="yellow--text title" size=36 v-on="on">
                {{ userInitials }} 
              </v-avatar>
            </v-btn>
          </template>
          <v-list class="py-0 px-0 my-0 mx-0">
              <v-list-item dense v-for="(item, index) in actions" :key="index + 'mn'" @click="action(item.to)" class="mx-0 my-0 py-0 px-3">
                <v-list-item-action class="py-0 px-0 my-0 mx-0">
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content class="py-0 px-0 my-0 ml-2 mr-0">
                  <v-list-item-title class="text-left body-2">
                    {{item.title}}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
        </v-menu>
     
    </v-app-bar>

<!-- ++++++++++++++++++++++++++++++++++++++++ -->
<!-- CONTENT -->
<!-- ++++++++++++++++++++++++++++++++++++++++ -->
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

<!-- ++++++++++++++++++++++++++++++++++++++++ -->
<!-- FOOTER BAR -->
<!-- ++++++++++++++++++++++++++++++++++++++++ -->    
    <v-footer :fixed="fixed" app class="hidden-sm-and-up">
      <v-row justify="center" align="center">
        <v-col cols="12" class="text-center">
            <v-btn icon to="/dashboard">
                <v-icon>mdi-view-dashboard</v-icon>
            </v-btn>
            <v-btn icon to="/setting">
                <v-icon>mdi-cog-outline</v-icon>
            </v-btn>
        </v-col>
      </v-row>
      
    </v-footer>
  </v-app>
</template>

<script>
let map = require('lodash/map')
let split = require('lodash/split')
let startCase = require('lodash/startCase')
let filter = require('lodash/filter')

export default {
  middleware : [],
  components:{},
  mixins : [],
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'VACO',
      // items: [
      //   {
      //     icon: 'mdi-apps',
      //     title: 'Welcome',
      //     to: '/'
      //   },
      //   {
      //     icon: 'mdi-chart-bubble',
      //     title: 'Inspire',
      //     to: '/inspire'
      //   }
      // ],
      
    }
  },//DATA
  async asyncData({store}){
      
      return{
        
      }//RETURN
    },//ASYN
    async fetch({store,params}){
        
    },//FETCH
    created(){
      
      
    },//CREATED
    mounted(){
       
    },//MOUNTED
    computed:{
      userInitials(){
        return 'AC'
      },//USERS INITIAL NAV
      items(){
        return [
          {icon: 'mdi-view-dashboard', title: 'Dashboard', to: '/dashboard'},
          //{icon: 'mdi-folder-outline', title: 'Groups', to: '/tasks'},
          //{icon: 'mdi-cog-outline', title: 'Setting', to: '/setting'},
        ]
      },
      notifications(){
        return []
        //return filter(this.$store.getters['notifications/list'],{uid : this.$store.getters['uid']})
      },
      actions(){
        return [
          {icon : 'mdi-cog-outline', title:'Setting',  to:'setting'},
          {icon : 'mdi-logout', title:'Logout', to:'logout'}
        ]
      }
      
    },//COMPUTED
    methods:{
      fake(){

      },
      initials(name){
        // let arr = name != "" ? split(name, " ") : split("John Doe", " ")
        //     return map(arr, x =>{
        //       return x.charAt(0)
        //     }).join('')
      },
      timestampToDate(ts){
            return this.$moment(ts.seconds * 1000).format('MM-DD')
      },
      notificationRead(item){
        return item
          //this.$store.dispatch('notifications/delete',item)
      },
      action(value){
        if(value == 'setting'){
          this.$router.replace('/setting')
        }
        if(value == 'logout'){
          //this.$store.dispatch('logout')
          this.$router.replace('/')
        }
      },

    }//METHODS
}//EXPORT
</script>
