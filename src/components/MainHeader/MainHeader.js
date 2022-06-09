import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1 style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>A Sample Page</h1>
      <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
    </header>
  );
};

export default MainHeader;
