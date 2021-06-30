import React from 'react'


const Nav = () => (
  <nav className="navbar is-dark">
    <a href="/" className="navbar-brand">
      <div className="navbar-item">
        <img className="logo" src="../static/logo.png"/>
      </div>
      <div className="navbar-item">
        <h1 className="title">IMGHOARD</h1>
      </div>
    </a>
    <div className="navbar-menu is-right">
      <div className="navbar-end">
        <div className="navbar-item">
          <a>Upload</a>
        </div>
      </div>
    </div>
  </nav>
)

export default Nav
