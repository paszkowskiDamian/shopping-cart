import { Observable } from 'rxjs'
export class ProductsRepository {
    constructor(db) {
        this._db = db.ref('products')
    }

    getStream() {
        return Observable.fromEvent(this._db, 'value').map(res => res.val())
    }

    add(name, price) {
        this._db.push({ name, price: Number(price) })
    }

    delete(id) {
        this._db.child(id).remove()
    }

}
