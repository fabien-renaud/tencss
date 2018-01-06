import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.location.pathname,
    }
  }

  isActive(path) {
    return this.state.active.startsWith("/" + path) ? "active" : "";
  }

  render() {
    return (
      <div id="header">
        <div className="container">
          <a href="/" id="logo"><img src="public/logo.svg"></img></a>
            <nav>
              <ul>
                <li className={this.state.active === "/" ? "active" : ""}>
                  <a href="/">WELCOME</a></li>
                <li className={this.isActive("skins")}>
                  <a href="/skins">SKINS</a></li>
                <li className={this.isActive("about")}>
                  <a href="/about">ABOUT</a></li>
                <li className={this.isActive("contact")}>
                  <a href="/contact">CONTACT</a></li>
              </ul>
            </nav>
        </div>
      </div>
    );
  }
}

export default Header;
