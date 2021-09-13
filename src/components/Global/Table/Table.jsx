import React, {memo} from 'react';
import './Table.scss';

const TableMemo = ({children}) => {
    return <div className = "table">{children}</div>
}

export const Table = memo(TableMemo);