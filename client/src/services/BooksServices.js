import Api from '@/services/Api'
// Container for services
var BooksServices = {}
// Setting up request

// Get all books
BooksServices.index = function (){
    return Api().get('books')
}
BooksServices.post = function (book){
    return Api().post('books', book)
}
BooksServices.show = function (bookId){
    return Api().get(`books/${bookId}`)
}
BooksServices.put = function (book){
    return Api().put(`books/${book.id}`, book)
}

export default BooksServices
