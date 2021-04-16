<template>
  <div class="home">
    <BooksPage />
    <Panel title="Books">
      <v-btn  class="purple lighten-3 rounded-pill"
                    slot="action"
                    light
                    @click="navigateTo({
                      name:'AddBook'
                    })"
                    medium
                    absolute
                    right 
                    middle>
                    <v-icon>
                    add library_books</v-icon>
                </v-btn>
      <div 
      v-for="book in books" 
      :key="book.id">
        {{book.title}} -
        {{book.author}} -
        {{book.year}}
      </div>
    </Panel>
  </div>
</template>

<script>
// @ is an alias to /src
import BooksPage from '@/components/BooksPage.vue'
import Panel from '@/components/Panel.vue'
import BooksServices from '../services/BooksServices'
//import Panel from '../components/Panel.vue'

export default {
  name: 'Books',
  components: {
    BooksPage,
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
  methods: {
    navigateTo(route){
      this.$router.push(route)
    }
  },
  async mounted (){
    const response = await BooksServices.index()
    this.books = response.data
  }
}
</script>
