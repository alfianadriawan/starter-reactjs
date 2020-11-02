import logo from "./logo.svg";
import "./App.css";
import "./assets/css/style.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p className="text-xl font-light text-yellow-300">
                    This is your ReactJS x Tailwindcss starter template
                </p>
                <a
                    className="text-3xl text-yellow-700 font-bold"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
