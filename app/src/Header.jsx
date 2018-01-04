import React from 'react';

import Navbar from './Navbar.jsx';

function Header(props) {
  return (
    <div id="header">
      <div class="container">
        <a id="title">TenCSS</a>
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
