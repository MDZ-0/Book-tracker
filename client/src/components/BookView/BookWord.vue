<template>
  <v-container>
    <v-layout>
        <Panel title="Book After Word">
          <v-textarea
          readonly
          class="afterword"
          filled
          v-model="afterWord">
          </v-textarea>
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
        'afterWord'
    ]
  }
</script>

<style scoped>
.afterword{
  font-family: monospace;
  border:none;
  border-style: none;
  border-color: transparent;
  overflow: auto;
}
</style>