<template>
  <div class="home">
    <ModifyBook />
  </div>
</template>

<script>
// @ is an alias to /src
import ModifyBook from '@/components/ModifyBook.vue'

export default {
  name: 'EditBook ',
  components: {
    ModifyBook
  }
}
</script>
