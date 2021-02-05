import {useReducer} from "react";
import {GithubContext} from "./githubContext";
import githubReducer from "./githubReducer";
import {Github} from "../types";
import axios from "axios";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

const joinUrl = (url) => {
  return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
}


const GithubState = ({children}) => {
  const initialState = {
    user: {},
    users:[],
    loading: false,
    repos: []
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  const setLoader = () => {

    dispatch({
      type: Github.SET_LOADER
    })
  }

  const getUser = async (name) => {
    setLoader()

    const response = await axios.get(
      joinUrl(`https://api.github.com/users/${name}?`)
    )

    dispatch({
      type: Github.GET_USER,
      payload: response.data
    })
  }

  const searchUsers = async (value) => {
    setLoader()

    const response = await axios.get(
      joinUrl(`https://api.github.com/search/users?q=${value}&`)
    )

    dispatch({
      type: Github.SEARCH_USERS,
      payload: response.data.items
    })
  }

  const getRepos = async (name) => {
    setLoader()

    const response = await axios.get(
      joinUrl(`https://api.github.com/users/${name}/repos?per_page=5&`)
    )

    dispatch({
      type: Github.GET_REPOS,
      payload: response.data
    })
  }

  const clearUsers = () => {

    dispatch({
      type: Github.CLEAR_USERS,
    })
  }

  const { user, users, loading, repos } = state


  return (
    <GithubContext.Provider value={{
      user, users, loading, repos, clearUsers, getRepos, searchUsers,
      getUser
    }}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubState
