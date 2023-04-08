/**
 * USER main class
 */

export class User {
    name: String;
    email: String;
    password: String;

    constructor(name: String, email: String, passasord: String){
        this.name = name;
        this.email = email;
        this.password = passasord;
    }
}