import { LOADED_FROM_SERVER } from "./actionTypes";

export function loadPostsFromServer(dispatch) {
  fetch("http://localhost:4000/posts").then(res => res.json()).then((posts) => {

    dispatch({
      type: LOADED_FROM_SERVER,
      posts
    })

  });
}
