import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, } from 'react-router-dom'

import 'rxjs/add/operator/do'
import 'rxjs/add/operator/ignoreElements'

import App from './App'
import { store } from './store'
import registerServiceWorker from './registerServiceWorker'

import 'normalize.css'
import './styles/global.scss'

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
    document.getElementById('root'))

registerServiceWorker()
