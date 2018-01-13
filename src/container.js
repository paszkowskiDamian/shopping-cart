import { Container } from "inversify";
import { helpers } from "inversify-vanillajs-helpers";
import { initializeApp } from 'firebase'
import 'reflect-metadata'

import { identifiers } from './services/identifiers'
import { firebaseConfig } from './firebaseConfig'
import { ProductsRepository } from './services/ProductsRepository'
import { DiscountRepository } from './services/DiscountRepository'
import { AuthService } from './services/AuthService'

export const container = new Container()

container.bind(identifiers.APP).toConstantValue(initializeApp(firebaseConfig))
container.bind(identifiers.DATABASE).toFactory(context => context.container.get(identifiers.APP).database())
container.bind(identifiers.AUTH).toFactory(context => context.container.get(identifiers.APP).auth())

container.bind(identifiers.PRODUCTS_REPOSITORY).to(ProductsRepository)
container.bind(identifiers.DISCOUNT_REPOSITORY).to(DiscountRepository)
container.bind(identifiers.AUTH_SERVICE).to(AuthService)

helpers.annotate(ProductsRepository, [identifiers.DATABASE])
helpers.annotate(DiscountRepository, [identifiers.DATABASE])
helpers.annotate(AuthService, [identifiers.AUTH])