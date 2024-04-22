import React from "react";

class ImageComponent extends React.Component {
  render() {
    return (
        <div className={"card " + this.props.className}>
    <h2 className="card-title">{this.props.content}</h2>
    <img className="card-content" src={this.props.src} alt={this.props.content} />
    </div>
    );
  }
}

export default ImageComponent;
