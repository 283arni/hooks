import {Github} from "../types";


const handlers = {
  [Github.SEARCH_USERS]: (state, payload) => ({...state, users: payload, loading: false}),
  [Github.GET_REPOS]: (state, payload) => ({...state, repos: payload, loading: false}),
  [Github.GET_USER]: (state, payload) => ({...state, user: payload, loading: false}),
  [Github.SET_LOADER]: (state) => ({...state, loading: true}),
  [Github.CLEAR_USERS]: (state) => ({...state, users: []}),
  DEFAULT: (state) => state
}

const githubReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action.payload)
}

export default githubReducer
