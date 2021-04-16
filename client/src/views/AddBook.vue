<template>
  <div class="home">
    <CreateBook />
  </div>
</template>

<script>
// @ is an alias to /src
import CreateBook from '@/components/CreateBook.vue'

export default {
  name: 'AddBook',
  components: {
    CreateBook
  }
}
</script>
