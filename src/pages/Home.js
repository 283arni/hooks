import Search from "../component/Search";
import Card from "../component/Card";
import Alert from "../component/Alert";
import {GithubContext} from "../context/github/githubContext";
import {useContext} from "react";

const Home = () => {
  const {loading, users} = useContext(GithubContext)

  return (
    <>
      <Alert />
      <Search />
      <div className="row">
        {loading ?
          <p>Загрузка...</p> :
          users.map((item, i) => (
            <div className="col-sm-4 mb-4" key={i}>
              <Card user={item}/>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Home
