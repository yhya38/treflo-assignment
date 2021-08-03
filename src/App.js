import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Home, Cart } from "./pages";
import { Header } from "./components";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
