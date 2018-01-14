import { Observable } from 'rxjs'
export class DiscountRepository {
    constructor(db) {
        this._db = db.ref('discounts')
    }

    getStream() {
        return Observable.fromEvent(this._db, 'value').map(res => res.val())
    }

    add(id, buy, pay) {
        this._db.push({ buy, pay, productId: id })
    }

    delete(id) {
        this._db.child(id).remove()
    }

}
