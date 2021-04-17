<template>
  <v-container>
    <v-layout>
        <Panel title="Book Meta Data">
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

            <v-btn 
            @click="navigateTo({
              name : 'EditBook',
              params:{
                bookId: book.id
              }
            })"
            text dark class="purple">
            <v-icon>edit</v-icon>
                Edit
            </v-btn>
          </v-flex>

          <v-flex xs6>
            <img class="book-cover" :src="book.coverImageUrl" />
            <br>
            {{book.year}}
          </v-flex>
        </v-layout>
        </Panel>
    </v-layout>
  </v-container>
</template>

<script>
//import BooksServices from '../../services/BooksServices'
import Panel from '../Panel'
  export default {
  components: { Panel },
  methods: {
    navigateTo(route){
      this.$router.push(route)
      console.log(route)
    }
  },
    props: [
        'book'
    ]
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
.afterword{
  font-family: monospace;
  border:none;
  border-style: none;
  border-color: transparent;
  overflow: auto;
}
</style>
