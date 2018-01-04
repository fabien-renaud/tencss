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
        <div class="container">
          <h1>Skins</h1>
          <p>Here you'll find somes CSS Styles for your Website !</p>
        </div>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
