<template>
    <v-app-bar fixed class=" white--text purple dark">
        <v-toolbar-title class="mr-4">
            <router-link
            tag="span"
            class="home"
            :to="{
                name : 'Books'
            }"
            >
                Book Tracker
            </router-link>
            
        </v-toolbar-title>
        <v-toolbar-items>
            <!-- <v-btn 
            text dark class="purple">
                Browse
            </v-btn> -->
            <v-btn 
            :to="{
                name : 'Books'
            }"
            text dark class="purple">
                Browse
            </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn 
            v-if="!$store.state.isUserLoggedIn"
            :to="
            {
                name : 'Login'
            }"
            text dark class="purple">
                Login
            </v-btn>
            <v-btn 
            v-if="!$store.state.isUserLoggedIn"
            :to="{
                name : 'Register'
            }"
            text dark class="purple">
                Sign Up
            </v-btn>
            <v-btn 
            v-if="$store.state.isUserLoggedIn"
            @click="logout"
            text dark class="purple">
                Log Out
            </v-btn>
        </v-toolbar-items>
    </v-app-bar>
    
</template>

<script>
export default {
    methods: {
        logout(){
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setUser', null)
            this.$router.push({
                name:'Books'
            })
        }
    }
}
</script>

<style scoped>
.home{
    cursor: pointer;
}
.home:hover{
    color:tomato;
}
</style>