<template>
  <v-container>
    <v-layout>
      <v-flex xs6>
        <BookMeta :book="book"></BookMeta>
      </v-flex>
      <v-flex xs6>
        <TubeInfo :youtubeId="book.youtubeId"></TubeInfo>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import BooksServices from '../../services/BooksServices'
import BookMeta from './BookMeta.vue'
import TubeInfo from './TubeInfo.vue'
  export default {
  components: { 
    BookMeta,
    TubeInfo
  },
    data () {
      return {
        book: null
      }
    },
    async mounted(){
      const bookId = this.$store.state.route.params.bookId
      console.log("Book Id:",bookId)
      this.book = (await BooksServices.show(bookId)).data
    }
  }
</script>

<style scoped>

</style>
