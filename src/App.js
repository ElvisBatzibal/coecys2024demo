import logo from './coesys2024.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido al demo de COECYS 2024
        </p>
        <a
          className="App-link"
          href="https://www.facebook.com/coecys.usac"
          target="_blank"
          rel="noopener noreferrer"
        >
          COECYS 2024
        </a>
      </header>
    </div>
  );
}

export default App;
