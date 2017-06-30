import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './Actions';
import List from './List';
import { loadPostsFromServer } from './actions';
import { injectReducer } from '../../store/reducers'
import reducer from "./reducer";
import store from "./reducer";

function mapStateToProps(state) {
  const { posts } = state;

  return {
    posts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadPosts: () => { loadPostsFromServer(dispatch); }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

