import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Edit src/App.js and save to reload.</code>
        </p>
        <a href="https://reactjs.org" className="text-decoration-none mr-2">
          Example link text
          <i className="bi bi-arrow-right-square ml-2"></i>
        </a>
      </header>
    </div>
  );
}

export default App;
