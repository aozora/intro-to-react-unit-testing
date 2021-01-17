import './App.css';
import Search from './components/Search';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>React Book Search</h1>
      </header>
      <main>
        <Search />
      </main>
    </div>
  );
}

export default App;
