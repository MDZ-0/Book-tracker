<template>
  <v-container>
      <v-layout>
          <v-flex xs4>
              <Panel title="Book Meta-Data">
                <v-text-field 
                label="Title" 
                :rules="[required]"
                v-model="book.title">
                </v-text-field>
                <v-text-field
                :rules="[required]" 
                label="Author" 
                v-model="book.author">
                </v-text-field>
                <v-text-field
                :rules="[required]" 
                label="Genre" 
                v-model="book.genre">
                </v-text-field>
                <v-text-field
                :rules="[required]" 
                label="Year" 
                v-model="book.year">
                </v-text-field>
                <v-text-field
                :rules="[required]" 
                label="Cover Image" 
                v-model="book.coverImageUrl">
                </v-text-field>
                <v-text-field
                :rules="[required]" 
                label="Youtube Url" 
                v-model="book.youtubeId">
                </v-text-field>
                
            </Panel>
          </v-flex>
          <v-flex xs8>
            <Panel title="Book Back Info">
            <v-text-field
            :rules="[required]" 
            label="Back Cover Image" 
            v-model="book.backCover">
            </v-text-field>
            <v-textarea
            :rules="[required]"
            autocomplete="After Word"
            label="afterword"
            v-model="book.afterWord"
            ></v-textarea>
            </Panel>
            <span class="red_alert" v-if="error">
                {{error}}
            </span>
            <br>
            <v-btn class="white--text purple" @click="save">Save</v-btn>
            
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
            },
            required: (value) => !!value || 'Required',
            error : null
        }
    },
    methods: {
        async save() {
            this.error = null
            const fieldsValidation = Object.keys(this.book).every(key => !!this.book[key])
            if(!fieldsValidation){
                this.error = "Please fill in all required fields!"
                return
            }
            const bookId = this.$store.state.route.params.bookId
            try {               
                await BooksServices.put(this.book)
                 this.$router.push({
                    name: 'ViewBook',
                    params:{
                        bookId: bookId
                    }
                })
            } catch (error) {
                console.log(error)
            }
        }
    },
    async mounted() {
        try {
                const bookId = this.$store.state.route.params.bookId
                this.book = (await BooksServices.show(bookId)).data
            } catch (error) {
                console.log(error)
            }
    }
  }
</script>
<style scoped>

</style>
