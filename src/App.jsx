import React, { PureComponent, Component } from 'react'
import createBrowserHistory from 'history/createBrowserHistory'
import { Provider } from 'mobx-react'
import { syncHistoryWithStore } from 'mobx-react-router'
import { inject, observer } from 'mobx-react'

import Routes from './routes'
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'

// stores
import stores from 'stores'

const browserHistory = createBrowserHistory()
const history = syncHistoryWithStore(browserHistory, stores.routingStore)

export default class App extends PureComponent {
  render() {
    return (
      <Provider {...stores}>
        <LocaleProvider locale={zhCN}>
          <Routes />
        </LocaleProvider>
      </Provider>
    )
  }
}
