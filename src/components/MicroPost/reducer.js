const initialState = []

import { LOADED_FROM_SERVER, UPVOTE, DOWNVOTE} from "./actionTypes";

export default function (state = initialState, action) {

  if (action.type === LOADED_FROM_SERVER ) {
    return action.posts;
  }

  if (action.type === UPVOTE || action.type === DOWNVOTE) {
    const posts = state.map((post, index) => {

      if (post.id === action.id) {
        if (action.type === UPVOTE) {
          post.votes += 1;
        } else {
          post.votes -= 1;
        }
      }

      return post;
    });

    return posts;
  }

  return state;
}
