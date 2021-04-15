import Api from '@/services/Api'
var AuthentificationService = {}
AuthentificationService.register = function (credentials){
    return Api().post('register', credentials)
}

export default AuthentificationService
