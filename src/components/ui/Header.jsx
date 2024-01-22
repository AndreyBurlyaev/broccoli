// import axios from 'axios';
import React from 'react';

function Header({ user }) {
  // const logoutHandler = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.get('/api/auth/logout');
  //     if (response.status === 200) window.location = '/';
  //   } catch (error) {
  //     alert(error.response.data.message);
  //   }
  // };

  return (
    <header role="banner" className="mar-t-5 pad-t-2 pad-b-4 pad-s-1 wrap-float bg-white">
      <div className="max-w-700 center wrap-float">
        <nav className="clearfix mar-b-1">
          <li className="pipe-separate t-light-green left">
            {user ? `Hello, ${user.username}` : 'Привет, Гость'}
          </li>
          <li className="pipe-separate t-light-green left"><a href="/">home</a></li>
          <li className="pipe-separate t-light-green left"><a href="/profile">profile</a></li>
          {!user ? (
            <>
              <li className="pipe-separate t-light-green left"><a href="/auth/signup">sign up</a></li>
              <li className="pipe-separate t-light-green left"><a href="/auth/login">login</a></li>
            </>
          ) : (
            <>
              <li className="pipe-separate t-light-green left"><a href="/auth/logout">logout</a></li>
              
            </>
          )}
        </nav>

        <div className="logo-container">
          <img src="/images/logo.png" alt="brokk" className="center block logo" />
          <h1>Broccoli Blog</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
