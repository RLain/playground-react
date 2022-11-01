import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    /* The following is JSX which stands for JavaScript XML. JSX allows us to write HTML in React. 
    JSX makes it easier to write and add HTML in React.
    Babel will compile this JSX into calls to React to create elements */
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
