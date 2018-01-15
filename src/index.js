import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'


import 'rxjs/add/operator/do'
import 'rxjs/add/operator/ignoreElements'
import 'rxjs/add/operator/mapTo'
import 'rxjs/add/operator/map'

import App from './App'
import { store } from './store'
import registerServiceWorker from './registerServiceWorker'

import 'normalize.css'
import './styles/global.scss'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'))

registerServiceWorker()
