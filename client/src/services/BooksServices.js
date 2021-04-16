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

export default BooksServices
