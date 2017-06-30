import React, { Component } from 'react';

class MicroPost extends Component {

  render() {
    return (
      <li className="list-group-item">
        <i className="glyphicon glyphicon-chevron-up"></i>
        <span className="label label-primary">{ this.props.votes }</span>
        <i className="glyphicon glyphicon-chevron-down"></i>
        <a>{ this.props.title }</a>
      </li>
    );
  }
}

export default MicroPost;
