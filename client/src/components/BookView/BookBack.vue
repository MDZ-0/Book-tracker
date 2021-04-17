<template>
  <v-container>
    <v-layout>
        <Panel title="Book Back Cover">
          <img class="book-back-cover" :src="backCover" />
        </Panel>
    </v-layout>
  </v-container>
</template>

<script>
//import BooksServices from '../../services/BooksServices'
import Panel from '../Panel'
  export default {
  components: { Panel },
    props: [
        'backCover'
    ]
  }
</script>

<style scoped>
.book-back-cover{
  width:50%;
  margin: 0 auto;
}
</style>