const initialState = []
import { LOADED_FROM_SERVER } from "./actionTypes";

export default function (state = initialState, action) {

  if (action.type === LOADED_FROM_SERVER ) {
    return action.posts;
  }

  return initialState;
}
