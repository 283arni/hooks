import {useContext, useState} from "react";
import {AlertContext} from "../context/alert/alertContext";
import {GithubContext} from "../context/github/githubContext";

const Search = () => {
  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)
  const github = useContext(GithubContext)

  const onSubmit = (e) => {
    if (e.key !== "Enter") {
      return;
    }

    github.clearUsers()

    if(value.trim()) {
      alert.hide()
      github.searchUsers(value.trim())
    } else {
      alert.show('Введите данные!')
    }
  }

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Введите данные"
        onKeyPress={onSubmit}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  )
}

export default Search;
