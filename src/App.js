import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Navbar />
          <Hero />
          <Contact />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
