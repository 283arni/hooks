import {Alert} from "../types";

const handlers = {
  [Alert.HIDE]: () => null,
  [Alert.SHOW]: (state, action) => action.payload,
  DEFAULT: (state) => state
}

export const reducer = (state, action) => {
    const handler = handlers[action.type] || Alert.DEFAULT
  return handler(state, action)
}
