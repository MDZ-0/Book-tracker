<template>
  <v-container>
    <v-layout>
        <Panel title="Youtube - Meta Data">
          <v-layout>
              <youtube
              :video-id="youtubeId"
              :player-width="500"
              :player-height="210"></youtube>
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
    props: [
        'youtubeId'
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
