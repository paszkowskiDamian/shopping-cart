import { Observable } from 'rxjs'
export class AuthService {
    constructor(auth) {
        this._auth = auth
    }

    signUp(email, password) {
        try {
            this._auth.signInWithEmailAndPassword(email, password)
        } catch (err) {
            console.log(err)
        }
    }

    signOut() {
        try {
            this._auth.signOut()
        } catch (err) {
            console.log(err)
        }
    }

    authStream$() {
        return Observable.create(observer => {
            this._auth.onAuthStateChanged(user => observer.next(user))
        })
    }
}