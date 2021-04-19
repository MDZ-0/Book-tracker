<template>
  <v-container width="200px" class="pa-md-4 mx-lg-auto" elevation="12">
    <v-layout column>
      <v-flex xs6 offest-xs3>
        <Panel title="Login">
          <div class="centered-input pl-4 pr-4 pt-2 pb-2"> 
            <v-text-field label="Email" v-model="email"></v-text-field>
            <br>
            <v-text-field label="Password" type="password" v-model="password"></v-text-field>
            <br>
            <div width="60%" v-html="error" class="error" />
            <br >
            <v-btn class="white--text purple" @click="login">Login</v-btn>
          </div>
          </Panel>
      </v-flex>
    </v-layout>  
  </v-container> 
</template>

<script>
import AuthentificationService from '@/services/AuthentificationService'
import Panel from './Panel'
export default {
  data () {
    return {
      email: '',
      password: '',
      error : null
    }
  },
  components:{
    Panel
  },
  methods: {
    async login(){
      try {
        const response = await AuthentificationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name:'Books'
        })
      } catch (error) {
        this.error = error.response.data.error
      }      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error{
  color : whitesmoke;
}
.centered-input{
  text-align:center;
}
</style>
