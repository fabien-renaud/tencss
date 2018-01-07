import React from 'react';
import './styles/skins.less';

import Item from './SkinsItem.jsx';

class Skins extends React.Component {
  constructor(props) {
    super(props);
    var url = this.props.location.pathname;
    var lastValURL = url.substr(url.lastIndexOf('/') + 1);
    this.state = {
      category: lastValURL !== "skins" ? lastValURL : null,
    }
  }

  isActive(category) {
    return this.state.category === category ? "active" : "no";
  }

  getCategory() {
    if(this.state.category) {
      return " - " + this.state.category[0].toUpperCase() + this.state.category.substr(1);
    }
  }

  render() {
    return (
      <div>
        <aside>
          <ul>
            <li className={this.isActive("navbars")}><a href="/skins/navbars">Navbars</a></li>
            <li className={this.isActive("buttons")}><a href="/skins/buttons">Buttons</a></li>
            <li className={this.isActive("links")}><a href="/skins/links">Links</a></li>
            <li className={this.isActive("lists")}><a href="/skins/lists">Lists</a></li>
          </ul>
        </aside>
        <div className="has-side-nav">
          <h1>Skins{this.getCategory()}</h1>
          <p>Here you'll find somes CSS Styles for your Website !</p>
          <Item id="1" name="Main Theme" />
          <Item id="2" name="Second Theme" />
          <Item id="3" name="Third Theme" />
          <Item id="4" name="Fourth Theme" />
          <Item id="1" name="Main Theme" />
          <Item id="2" name="Second Theme" />
          <Item id="3" name="Third Theme" />
          <Item id="4" name="Fourth Theme" />
          <Item id="1" name="Main Theme" />
          <Item id="2" name="Second Theme" />
          <Item id="3" name="Third Theme" />
          <Item id="4" name="Fourth Theme" />
        </div>
      </div>
    );
  }
}

export default Skins;
