import React from 'react';
import s from './../Messages.module.css';

const MessageItems = (props) => {
    return (
        <div className={s.Message}>{props.mes}</div>
    );
}

export default MessageItems;