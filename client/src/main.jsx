import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap/dist/css/bootstrap.min.css"
import store from './store/store'
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
    <App />
    </Provider>
  </>
  ,
)
