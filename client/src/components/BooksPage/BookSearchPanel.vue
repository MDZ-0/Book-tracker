<template>
    <panel title="Search">
        <v-text-field
        label="Search by title, author, genre or year"
        v-model="search">            
        </v-text-field>
    </panel>
</template>

<script>
import Panel from '../Panel.vue'
export default {
  components: { Panel },
  data () {
      return {
          search: ''
      }
  },
  watch:{
      search() {
          const route = {
              name: 'Books'
          }
          if(this.search != ''){
              route.query = {
                  search: this.search
              }
          }
          this.$router.push(route)
      },
      '$route.query.search': {
          immediate: true,
          deep: true,
          handler(value){
              this.search = value
          }
      }
  }
}
</script>
<style scoped>

</style>