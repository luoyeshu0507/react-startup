import { Switch, Route, HashRouter } from 'react-router-dom'

// ======== pages import here ========
import Home from 'components/Home'
import 'style/font/iconfont.css'

export default class extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </HashRouter>
    )
  }
}