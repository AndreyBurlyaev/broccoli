import React from "react";

function Header({ user }) {
  return (
    <header role="banner" className="header">
      <div className="container">
        <nav className="navbar" style={{justifyContent: 'space-around'}}>
          <div className="nav-item">
            {user ? `Hello, ${user.username}` : "Привет, Гость"}
          </div>
          <div className="nav-item">
            <a className="nav-link" href="/">
              home
            </a>
          </div>
          <div className="nav-item">
            <a className="nav-link" href="/profile">
              profile
            </a>
          </div>
          {!user ? (
            <>
              <div className="nav-item">
                <a className="nav-link" href="/auth/signup">
                  sign up
                </a>
              </div>
              <div className="nav-item">
                <a className="nav-link" href="/auth/login">
                  login
                </a>
              </div>
            </>
          ) : (
            <div className="nav-item">
              <a className="nav-link" href="/auth/logout">
                logout
              </a>
            </div>
          )}
        </nav>
        <div className="logo-container">
          <img src="/images/logo.png" alt="brokk" className="logo" />
          <h1>Broccoli Blog</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
