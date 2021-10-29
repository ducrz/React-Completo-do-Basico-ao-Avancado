import { Component } from 'react';
import './App.css';

import Comentario from './components/Comentario';

class App extends Component{

  state = {
    comentarios: [
      {
        nome: 'Eduardo',
        email: 'ducatolico@gmail.com',
        data: new Date(2021, 10, 29, 18, 20, 0),
        mensagem: 'Olá, tudo bem?'
      },
      {
        nome: 'João',
        email: 'joao@gmail.com',
        data: new Date(2021, 10, 29, 18, 21, 0),
        mensagem: 'Olá, tudo bem sim....'
      }
    ]   
  }
  render(){
    
    return (
      <div className="App">
       <h1>Meu Projeto</h1>

       {this.state.comentarios.map((comentario, indice) => (
              <Comentario
              key={indice}
              nome={comentario.nome} 
              email={comentario.email}
              data={comentario.data}>
              {comentario.mensagem}
             </Comentario>  
       ))}
    
      </div>
    );
  } 
}

export default App;
