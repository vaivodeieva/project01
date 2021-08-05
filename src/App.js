import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Views/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
       <Router>
                <Header />
                <Switch>

                    <Route exact path="/">
                        <Home />
                    </Route>

                </Switch>
                <Footer />
            </Router>

      
    </div>
  );
}

export default App;
