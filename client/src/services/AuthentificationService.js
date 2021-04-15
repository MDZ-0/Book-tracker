import Api from '@/services/Api'
var AuthentificationService = {}
AuthentificationService.register = function (credentials){
    return Api().post('register', credentials)
}
AuthentificationService.login = function (credentials){
    return Api().post('login', credentials)
}

export default AuthentificationService
