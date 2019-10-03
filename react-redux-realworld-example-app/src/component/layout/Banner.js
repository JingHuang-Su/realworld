//Just Text

// conduit 
// A place to share your knowledge

import React from 'react';

const Banner = ({ appName, isAuth }) => {
  if (isAuth) {
    return null;
  }
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">
          {appName.toLowerCase()}
        </h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
  );
};



export default Banner;