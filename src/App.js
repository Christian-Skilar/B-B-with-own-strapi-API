import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Hotels from "./components/pages/Hotels";
import Navigation from "./components/layout/Nav";
import HotelDetail from "./components/pages/Detail";
import './sass/styles.scss';

function App() {
  return (
        <Router>
            <Navigation />
  
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/hotels"><Hotels /></Route>
            <Route path="/contact"><Contact /></Route>
            <Route path="/detail/:id"><HotelDetail /></Route>
          </Switch>

      </Router>
  );
}

export default App;