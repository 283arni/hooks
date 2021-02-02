import {AlertContext} from "./alertContext";
import {Alert} from "../types"
import {reducer} from "./alertReducer"
import {useReducer} from "react";

const AlertState = ({children}) => {
  const [state, dispatch] = useReducer(reducer, null)

  const show = (text, type = "secondary") => {
    dispatch({
      type: Alert.SHOW,
      payload: {text, type}
    })
  }

  const hide = () => dispatch({type: Alert.HIDE})

  return (
    <AlertContext.Provider value={{
      show, hide, alert: state
    }}>
      {children}
    </AlertContext.Provider>
  )
}

export default AlertState;