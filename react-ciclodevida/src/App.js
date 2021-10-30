import logo from './logo.svg';
import './App.css';
import MeuComponente from './components/MeuComponente'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MeuComponente titulo="Olá mundo" />
      </header>
    </div>
  );
}

export default App;
