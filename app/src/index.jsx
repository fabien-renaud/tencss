import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.less';

import Header from './Header.jsx';
import Footer from './Footer.jsx';

class Index extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Welcome to TenCSS !</h1>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
