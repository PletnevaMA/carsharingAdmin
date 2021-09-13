import React, {memo} from 'react';
import './EntityContainer.scss';

const EntityContainerMemo = ({children }) => {
    return <div className = "entity-container">{children}</div>
};

export const EntityContainer =  memo(EntityContainerMemo);