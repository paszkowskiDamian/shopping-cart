import { Observable } from 'rxjs'
import { retry } from 'rxjs/operators/retry';
export class AuthService {
    constructor(auth) {
        this._auth = auth
    }

    signUp(email, password) {
        try {
            console.log(email, password)
            this._auth.signInWithEmailAndPassword(email, password)
        } catch (err) {
            console.log(err)
        }
    }

    async signOut() {
        try {
            const response = await this._auth.signOut()
            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }

    authStream$() {
        console.log('registered')
        return Observable.create(observer => {
            this._auth.onAuthStateChanged(user => observer.next(user))
        })
    }

}