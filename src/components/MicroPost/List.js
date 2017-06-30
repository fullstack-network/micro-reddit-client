import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MicroPost from "./index"

class List extends Component {
  componentDidMount() {
    this.props.loadPosts();
  }

  drawItem(item, index) {
    return (
      <MicroPost key={ item.id } {...item } />
    )
  }

  render() {
    return (
      <ul>
        {
          this.props.posts.map((item, index) => {
            return this.drawItem(item, index)
          })
        }
      </ul>
    );
  }
}

export default List;
