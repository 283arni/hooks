import {Link} from "react-router-dom";

const Card = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5>React</h5>
        <Link to={`/profile/react`} className="btn btn-primary">Открыть</Link>
      </div>
    </div>
  )
}

export default Card