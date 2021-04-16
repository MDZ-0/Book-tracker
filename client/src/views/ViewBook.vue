<template>
  <div class="home">
      <BookInfo />
  </div>
</template>

<script>
// @ is an alias to /src
import BookInfo from '@/components/BookView/BookInfo.vue'

export default {
  name: 'AddBook',
  components: {
    BookInfo
  }
}
</script>