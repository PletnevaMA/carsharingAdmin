import React from 'react';
import './ButtonNewEntity.scss';

const ButtonNewEntity =({ onClick = () => {},}) => {
    return(
        <div className = "button-new">
             <button  onClick={() => onClick()} className="button-new__button">Создать</button>
        </div>
    );
}

export default ButtonNewEntity;