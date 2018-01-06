import React from 'react';

class Skins extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      name: this.props.name,
    }
  }

  render() {
    return (
      <div className="skinItem">
        <h3>{this.state.name}</h3>
        <div>Demo</div>
        <div className="listButtons">
          <button><img src="public/images/thumbs_up.svg"></img></button>
          <button><img src="public/images/share_icon.svg"></img></button>
          <button><img src="public/images/copy.svg"></img></button>
        </div>
      </div>
    );
  }
}

export default Skins;
