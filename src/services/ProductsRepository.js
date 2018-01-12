import { Observable } from 'rxjs'
export class ProductsRepository {
    constructor(db) {
        this._db = db.ref('products')
    }

    getStream() {
        return Observable.fromEvent(this._db, 'value').map(res => res.val())
    }

    add() {
        this._db.push({ name: 'Mango', price: 23 })
    }

    remove() {

    }

}
