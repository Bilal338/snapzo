import logo from "./download.jfif";
import "./App.css";
import products from "./products.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a className="App-link" rel="noopener noreferrer">
          SNAPZO
        </a>
        <a>
          <p>Ann photographer app!</p>
        </a>

        <img src={logo} className="App-logo" alt="logo" />
        {products.map(({ name, price, image }) => (
          <img className={name} src={image} alt="logo"></img>
        ))}
      </header>
    </div>
  );
}

export default App;
