import {useContext} from "react";
import {AlertContext} from "../context/alert/alertContext";

const Search = () => {
  const {show} = useContext(AlertContext)

  const onSubmit = (e) => {
    if (e.key === "Enter") {
      show(e.target.value)
      e.target.value = ''
    }
  }

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Введите данные"
        onKeyPress={onSubmit}
      />
    </div>
  )
}

export default Search;