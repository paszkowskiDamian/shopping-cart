import { combineEpics } from 'redux-observable'

import { productsEpic } from './epics/productsEpic'
import { identifiers } from './services/identifiers'
import { container } from './container'

export const rootEpic = combineEpics(
    productsEpic(container.get(identifiers.PRODUCTS_REPOSITORY))
)