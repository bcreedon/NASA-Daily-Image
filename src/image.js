import React from 'react';
import style from './image.module.css'

const Image = ({title,explanation, url, copyright}) => {
return(
    <div className={style.container}>
        <img src={url} alt="" className={style.image}></img>
        <h1>{copyright}</h1>            
        <h2>{title}</h2>
        <p>{explanation}</p>

    </div>
);
}

export default Image