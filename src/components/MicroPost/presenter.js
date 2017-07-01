import React, { Component } from 'react';

class MicroPost extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.votes !== nextProps.votes;
  }

  render() {
    return (
      <li className="list-group-item">
        <i className="glyphicon glyphicon-chevron-up" onClick={ () => this.props.upvote(this.props.id) }></i>
        <span className="label label-primary">{ this.props.votes }</span>
        <i className="glyphicon glyphicon-chevron-down" onClick={ () => this.props.downvote(this.props.id) }></i>
        <a>{ this.props.title }</a>
      </li>
    );
  }
}

export default MicroPost;
