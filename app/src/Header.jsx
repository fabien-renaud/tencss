import React from 'react';

import Navbar from './Navbar.jsx';

function Header(props) {
  return (
    <div id="header">
      <div class="container">
        <a id="logo"><img src="logo.svg"></img></a>        
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
