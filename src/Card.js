import React from 'react';
import './Card.css';

const Card = ({ title, description, id, deleteIdea, editIdea }) => {
  return (
    <div className='card'>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => deleteIdea(id)}>delete</button>
    </div>
  )
}

export default Card;