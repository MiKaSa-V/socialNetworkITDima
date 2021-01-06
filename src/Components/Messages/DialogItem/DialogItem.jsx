import React from 'react';
import s from './../Messages.module.css';
import { NavLink } from 'react-router-dom';

const DialogsItems = (props) => {
    let path = '/Dialog/' + props.id;
    return (
        <div className={s.Dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}
export default DialogsItems;