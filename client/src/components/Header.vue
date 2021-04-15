<template>
    <v-app-bar fixed class=" white--text purple dark">
        <v-toolbar-title class="mr-4">
            <span
            class="home"
            @click="navigateTo({name : 'Home'})"
            >
                Book Tracker
            </span>
            
        </v-toolbar-title>
        <v-toolbar-items>
            <v-btn text dark class="purple">
                Browse
            </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn 
            @click="navigateTo({name : 'Register'})"
            text dark class="purple">
                Sign Up
            </v-btn>
        </v-toolbar-items>
    </v-app-bar>
    
</template>

<script>
export default {
    methods: {
        navigateTo(route){
            this.$router.push(route)
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