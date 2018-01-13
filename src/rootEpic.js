import { combineEpics } from 'redux-observable'

import { productsEpic } from './epics/productsEpic'
import { discountEpic } from './epics/discountEpic'
import { authEpic } from './epics/authEpic'
import { identifiers } from './services/identifiers'
import { container } from './container'
import { auth } from 'firebase';

export const rootEpic = combineEpics(
    productsEpic(container.get(identifiers.PRODUCTS_REPOSITORY)),
    discountEpic(container.get(identifiers.DISCOUNT_REPOSITORY)),
    authEpic(container.get(identifiers.AUTH_SERVICE))
)