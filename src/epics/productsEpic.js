import { combineEpics } from 'redux-observable'

export function productsEpic() {
    const counterEpic = action$ => action$.ofType('ADD').do(a => console.log(a)).ignoreElements()

    return combineEpics(counterEpic)
}