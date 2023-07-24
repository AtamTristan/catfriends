import React from 'react';
import './Card.css';

const Card = ({ name, email, tag }) => {
  return (
    <div className='contactcard tc grow br3 pa3 ma2 dib bw2 shadow-5'>
        <img alt='cats' src={`https://cataas.com/cat/${tag}`} width={200} height={200}/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
