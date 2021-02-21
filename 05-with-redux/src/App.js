import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Search from './components/Search';
import Anime from './components/Anime';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <header className="app-header">
          <h1>React Anime Search</h1>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <Search />
            </Route>
            <Route path="/anime">
              <Anime />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
