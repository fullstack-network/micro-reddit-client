import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions';
import MicroPost from './presenter';

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
    upvote: (id) => { actions.upvote(dispatch, id) },
    downvote: (id) => { actions.downvote(dispatch, id) },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MicroPost);

