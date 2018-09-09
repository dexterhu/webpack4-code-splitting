import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">Webpack Example</NavLink>

        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/hello">Hello</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="goodbye">Goodbye</NavLink>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default NavBar
