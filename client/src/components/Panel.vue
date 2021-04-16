<template>
  <v-container width="200px" class="pa-md-4 mx-lg-auto" elevation="12">
    <v-layout column>
      <v-flex xs6 offest-xs3>
        <div class="white elevation-2">
          <v-toolbar flat dense class="purple" dark>
            <v-toolbar-title>{{title}}</v-toolbar-title>
            <slot name="action"/>
            
          </v-toolbar>
          
          <div class="centered-input pl-4 pr-4 pt-2 pb-2"> 
            <slot>
                No Slot content defnied (yet).
            </slot>
          </div>
        </div>
      </v-flex>
    </v-layout>  
  </v-container> 
</template>

<script>
export default {
    data (){
        return {
        }
    },
    props: [
        'title'
    ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
