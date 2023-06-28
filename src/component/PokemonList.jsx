import React from 'react';
import '../styles/style.css';
import giratinaImage from '../img/giratina-origin.png';


class pokemonList extends React.Component {
    render() {
        return (
            <img className='img' src={giratinaImage} alt="" />
        );
      }
}

export default pokemonList;
