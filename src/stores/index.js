import { useStrict } from 'mobx'

// ======== stores import here ========
import { RouterStore } from 'mobx-react-router'
import UserStore from "./UserStore"

useStrict(true)

const stores = {
  // key can be whatever you want
  routingStore: new RouterStore(),
  userStore: new UserStore()
}

if (__DEV__) {
  window.stores = stores
}

export default stores
