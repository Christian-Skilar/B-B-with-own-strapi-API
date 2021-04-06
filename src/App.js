import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navigation from "./components/Nav";
import './sass/styles.scss';

function App() {
  return (
        <Router>
            <Navigation />
  
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact"><Contact /></Route>
          </Switch>

      </Router>
  );
}

export default App;