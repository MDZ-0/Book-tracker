<template>
  <v-app>
    <page-header />
    <v-main>
      <v-container fluid>
        <div id="app">
        <router-view />
      </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import PageHeader from '@/components/Header.vue'
export default {
  name: 'app',
  components: {
    PageHeader
  },
  data: () => ({
    //
  }),
};
</script>

<style>
#app{
  font-family: 'Avenir', Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:teal;
  margin-top: 30px
}
.red_alert{
    color: red;
}
</style>
