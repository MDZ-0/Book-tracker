<template>
  <v-container>
  </v-container>
</template>

<script>
import BooksServices from '../services/BooksServices'
  export default {
    data () {
      return {
        book: null
      }
    },
    async mounted(){
      const bookId = this.$store.state.route.params.bookId
      console.log("Book Id:",bookId)
      this.book = await BooksServices.show(bookId)
    }
  }
</script>

<style scoped>

</style>
