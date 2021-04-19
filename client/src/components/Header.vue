<template>
    <v-app-bar fixed class=" white--text purple dark">
        <v-toolbar-title class="mr-4">
            <span
            class="home"
            @click="navigateTo({name : 'Books'})"
            >
                Book Tracker
            </span>
            
        </v-toolbar-title>
        <v-toolbar-items>
            <!-- <v-btn 
            text dark class="purple">
                Browse
            </v-btn> -->
            <v-btn 
            @click="navigateTo({name : 'Books'})"
            text dark class="purple">
                Browse
            </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn 
            v-if="!$store.state.isUserLoggedIn"
            @click="navigateTo({name : 'Login'})"
            text dark class="purple">
                Login
            </v-btn>
            <v-btn 
            v-if="!$store.state.isUserLoggedIn"
            @click="navigateTo({name : 'Register'})"
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
        navigateTo(route){
            if(this.$route.name != route.name)
                this.$router.push(route)
        },
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