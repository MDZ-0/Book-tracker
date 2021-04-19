<template>
  <div class="home">
    <BookSearchPanel />
    <BookPanel />
  </div>
</template>

<script>
// @ is an alias to /src
import BookPanel from './BookPanel'
import BookSearchPanel from './BookSearchPanel'
//import Panel from '../components/Panel.vue'

export default {
  components: {
    BookPanel,
    BookSearchPanel
  },
  data (){
    return {
    }
  }
}
</script>
<style scoped>

</style>
