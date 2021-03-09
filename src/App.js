import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./css/App.css";
import MovieList from "./Movie.js";
import MovieDetail from "./components/MovieDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/movie/:id">
            <MovieDetail />
          </Route>
          <Route path="/">
            <MovieList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
