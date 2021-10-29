import logo from './logo.svg';
import './App.css';

import Comentario from './components/Comentario';

function App() {
  return (
    <div className="App">
     <h1>Meu Projeto</h1>
     <Comentario nome="Eduardo" email="ducatolico@gmail.com" data={new Date(2021, 10, 29)}>
      Olá, tudo bem?
     </Comentario>
     <Comentario nome="Maria" email="maria@gmail.com" data={new Date(2021, 10, 31)} >
      Olá, tudo bem sim.
     </Comentario>
    
    </div>
  );
}

export default App;
