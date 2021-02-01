import {NavLink} from "react-router-dom";


const Nav = () => {
  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
      <div className="navbar-brand">
        GitHub
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link">Главная</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link">Информация</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
