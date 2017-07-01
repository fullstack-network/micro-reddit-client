import { LOADED_FROM_SERVER, UPVOTE, DOWNVOTE } from "./actionTypes";

export function loadPostsFromServer(dispatch) {
  fetch("http://localhost:4000/posts").then(res => res.json()).then((posts) => {
    dispatch({
      type: LOADED_FROM_SERVER,
      posts
    })
  });
}

export function upvote(dispatch, id) {

  const requestObject = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({ postId: id, upvote: true }),
  }

  fetch("http://localhost:4000/posts", requestObject).then((response) => {
    dispatch({
      type: UPVOTE,
      id
    });
  });
}

export function downvote(dispatch, id) {
  dispatch({
    type: DOWNVOTE,
    id
  });
}
