export default class RegistrationService {
    constructor() {
        // this.$http = $http;
        this.endpoint = '/register';
    }
    postRegister(){
        return this.post(`${this.endpoint}`);
    }
}