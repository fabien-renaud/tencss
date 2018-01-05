import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, withRouter} from 'react-router-dom';
import './styles/main.less';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import Skins from './Skins.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';

let WrappedHeader = withRouter(Header);
render(
  <Router>
    <div>
      <WrappedHeader />
      <Route exact path="/" component={Home}/>
      <Route path="/skins" component={Skins}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Footer />
    </div>
  </Router>,
  document.getElementById('root')
);
