<template>
  <div class="home">
    <Panel title="Books">
      <v-btn  class="purple lighten-3 rounded-pill"
                    slot="action"
                    light
                    :to="{
                      name:'AddBook'
                    }"
                    medium
                    absolute
                    right 
                    middle>
                    <v-icon>
                    add library_books</v-icon>
                </v-btn>
      <div 
      class="book"
      v-for="book in books" 
      :key="book.id">
        <v-layout>
          <v-flex xs6>
            <div class="book-title">
              {{book.title}}
            </div>
            <div class="book-author">
              {{book.author}}
            </div>
            <div class="book-genre">
              {{book.genre}}
            </div>
            <v-btn class="white--text purple" 
            :to="{
              name:'ViewBook',
              params:{
                bookId: book.id,
              }
            }">
              <v-icon invert>pageview</v-icon> 
              View Book</v-btn>
          </v-flex>
          <v-flex xs6>
            <img class="book-cover" :src="book.coverImageUrl" />
          </v-flex>
        </v-layout>
      </div>
    </Panel>
  </div>
</template>

<script>
// @ is an alias to /src
import Panel from '@/components/Panel.vue'
import BooksServices from '@/services/BooksServices'
//import Panel from '../components/Panel.vue'

export default {
  name: 'Books',
  components: {
    Panel
  },
  data (){
    return {
      books: []
      // Example
      //   {
      //     title : 'book title',
      //     author: 'book author',
      //     year : 'publication year'
      //   }
      // ] 
    }
  },
  watch:{
    '$route.query.search':{
      immediate: true,
      async handler(value){
        const response = await BooksServices.index(value)
        this.books = response.data
      }
    }
  }
}
</script>
<style scoped>
.book{
  padding: 20px;
  height: 420px;
  overflow: hidden;
}
.book-title{
  font-size: 32px;
}
.book-author{
  font-size: 24px;
}
.book-genre{
  font-size: 18px;
}
.book-cover{
  width:50%;
  margin: 0 auto;
}
</style>
