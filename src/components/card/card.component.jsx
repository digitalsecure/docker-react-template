import React from 'react';

import './card.style.css';

export const Card = (props) => {
    return <div className='card-container'>
        {
           <h3 key={props}>{ props.monster.name }</h3>
        }
    </div>
};