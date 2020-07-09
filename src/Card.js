import React from 'react';
import bann from './bann.jpg';

const Card =(props) =>{

    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow'>
            <img alt='photo' src={bann} width="200" height="200" />
            <div>
                <h2> {props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )

}

export default Card;