export class AuthService {
    constructor(auth) {
        this._auth = auth
    }

    signUp(email, password) {
        try {
            this._auth.signInWithEmailAndPassword(email, password)
        } catch (err) {

        }
    }

    signOut() {

    }

    authStream() {

    }

}