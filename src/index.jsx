/**
 * @file entry file
 *  - Render dom
 *  - Enable module hot replacement
 */
import ReactDom from "react-dom"
import App from './App'
import axios from 'axios'
import { Button, message, Icon } from 'antd'
import stores from './stores'

axios.interceptors.response.use(function (response) {
  let res = response.data
  if (res.statusCode != 200 ) {
    if (res.statusCode == 403) {
      // debugger
      stores.userStore.loginOut()
    }
    if (res.message) {
      message.error(res.message)
    }
    return Promise.reject(res.message || 'Request Error')
  } else {
    return res.data
  }
}, function (error) {
  if(error.response.status === 403) {
    // debugger
    stores.userStore.loginOut()
  }
  return Promise.reject(error)
})

function renderApp(App) {
  ReactDom.render(
    <App />,
    document.getElementById("root")
  )
}

renderApp(require('./App').default)

if (module.hot) {
  module.hot.accept(
    "./App",
    () => renderApp(require('./App').default)
  )
}