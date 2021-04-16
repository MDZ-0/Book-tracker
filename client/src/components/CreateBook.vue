<template>
  <v-container>
      <v-layout>
          <v-flex xs4>
              <Panel title="Book Meta-Data">
                <v-text-field 
                label="Title" 
                v-model="book.title">
                </v-text-field>
                <v-text-field 
                label="Author" 
                v-model="book.author">
                </v-text-field>
                <v-text-field 
                label="Genre" 
                v-model="book.genre">
                </v-text-field>
                <v-text-field 
                label="Year" 
                v-model="book.year">
                </v-text-field>
                <v-text-field 
                label="Cover Image" 
                v-model="book.coverImageUrl">
                </v-text-field>
                <v-text-field 
                label="Youtube Url" 
                v-model="book.youtubeId">
                </v-text-field>
                
            </Panel>
          </v-flex>
          <v-flex xs8>
            <Panel title="Book Back Info">
            <v-text-field 
            label="Back Cover Image" 
            v-model="book.backCover">
            </v-text-field>
            <v-textarea
            autocomplete="After Word"
            label="afterword"
            v-model="book.afterWord"
            ></v-textarea>
            </Panel>
            <v-btn class="white--text purple" @click="create">Create</v-btn>
          </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
import Panel from './Panel.vue'
import BooksServices from '../services/BooksServices'
  export default {
    components: { 
        Panel 
    },
    data () {
        return {
            book:{
                title : null,
                author: null,
                genre : null,
                year : null,
                coverImageUrl : null,
                youtubeId :null,
                backCover :null,
                afterWord :null 
            }
        }
    },
    methods: {
        async create() {
            try {
                await BooksServices.post(this.book)
                this.$router.push({
                    name: 'Books'
                })
            } catch (error) {
                console.log(error)
            }
        }
    }
  }
</script>
