import Search from "../component/Search";
import Card from "../component/Card";
import Alert from "../component/Alert";
import AlertState from "../context/alert/AlertState";

const Home = () => {
  const cards = new Array(14).fill('').map((_, i) => i)
  return (
    <AlertState>
      <Alert />
      <Search />
      <div className="row">
        {cards.map((item, i) => (
          <div className="col-sm-4 mb-4" key={i}>
            <Card/>
          </div>
        ))}
      </div>
    </AlertState>
  )
}

export default Home
