import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import Loadable from 'react-loadable'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const AsyncHome = Loadable({
  loader: () => import('../components/Home'),
  loading() {
    return <div>Loading...</div>
  }
})

const AsyncHelloWorld = Loadable({
  loader: () => import('../components/HelloWorld'),
  loading() {
    return <div>Loading...</div>
  }
})

const AsyncGoodnightMoon = Loadable({
  loader: () => import('../components/GoodnightMoon'),
  loading() {
    return <div>Loading...</div>
  }
})

export const history = createHistory()

const AppRouter = (props) => {
  return (
    <Router history={history}>
      <div>
        <NavBar />
        <Switch>
          <Route path='/' component={AsyncHome} exact />
          <Route path='/hello' component={AsyncHelloWorld} exact />
          <Route path='/goodbye' component={AsyncGoodnightMoon} exact />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default AppRouter
