import {useContext, useEffect} from "react";
import {GithubContext} from "../context/github/githubContext";
import {Link} from "react-router-dom";
import Repos from "../component/Repos";

const Profile = ({match}) => {
  const {user, loading, getUser, getRepos, repos} = useContext(GithubContext)
  const urlName = match.params.name

  useEffect(() => {
    getRepos(urlName)
    getUser(urlName)
    // eslint-disable-next-line
  }, [])

  const {
    avatar_url, public_repos, html_url,
    location, bio, blog, login,
    followers, public_gists, company,
    name,following
  } = user

  if(loading) {
    return <p className="text-center">Загрузка...</p>
  }

  return (
    <>
      <Link to="/" className="btn btn-link">На главную</Link>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img src={avatar_url} alt={name} style={{maxWidth: "200px"}}/>
              <h1>{name}</h1>
              {location && <p>Местоположение: {location}</p>}
            </div>
            <div className="col">
              {
                bio && <>
                  <h3>BIO</h3>
                  <p>{bio}</p>
                </>
              }
              <a
                href={html_url}
                target="_blank"
                className="btn btn-dark"
                rel="noreferrer"
              >Открыть профиль</a>
              <ul>
                {login && <li>
                  <strong>Username:</strong> {login}
                </li>}
                {company && <li>
                  <strong>Компани:</strong> {company}
                </li>}
                {blog && <li>
                  <strong>Website:</strong> {blog}
                </li>}
              </ul>

              <div className="badge badge-primary">Подписчики: {followers}</div>
              <div className="badge badge-dark">Подписан: {following}</div>
              <div className="badge badge-success">Репозитории: {public_repos}</div>
              <div className="badge badge-info">Gists: {public_gists}</div>
            </div>
          </div>
        </div>
      </div>
      <Repos repos={repos}/>
    </>
  )
}

export default Profile
