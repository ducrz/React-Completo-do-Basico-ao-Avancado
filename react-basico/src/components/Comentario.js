import React from 'react';
import { formatRelative } from 'date-fns';
import { ptBR } from 'date-fns/locale'
import './Comentario.css';
import imagemUsuario from './user.png';

//JSX
const Comentario = props => {
 
      return  <div className='Comentario'>
            <img class="avatar" src={ imagemUsuario} alt={props.nome} />
            <div class="conteudo">
            <h2 class="nome">{props.nome}</h2>
            <p class="email">{props.email}</p>
            <p class="mensagem">{props.children}</p>
            <p class="data">{formatRelative(props.data, new Date(), {locale: ptBR})}</p>
            <button onClick={props.onRemove}>&times;</button>
        </div>
        </div>       
};

export default Comentario;