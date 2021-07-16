import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Watchlist from "./components/Watchlist";
import Watched from "./components/Watched";
import "./App.css";
import AddMovie from "./components/AddMovie";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Watchlist />
        </Route>
        <Route path="/watched">
          <Watched />
        </Route>
        <Route path="/addmovie">
          <AddMovie />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
