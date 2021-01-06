import React from 'react';
import classes from '../ComponentaContent.module.css';
import s from './Messages.module.css';
import DialogsItems from './DialogItem/DialogItem.jsx';
import MessageItems from './MessageItem/MessageItem.jsx';

let dialogitem = [
    {id: 1, name: "Dima"},
    {id: 2, name: "Victor"},
    {id: 3, name: "Slavna"},
    {id: 4, name: "Kirya"}
]

let mesitem = [
    {id: 1, mes: 'Hi'},
    {id: 2, mes: 'Hello'},
    {id: 3, mes: 'Good Guy'},
    {id: 4, mes: 'Rip'}
]

let dialogElements = dialogitem.map( d => <DialogsItems name={d.name} id={d.id}/>);
let messageElements = mesitem.map(m => <MessageItems mes={m.mes} />);
const Messages = () => {
    
    
    return (
        <div className={classes.content}>
            <div className={s.Dialogs}>
                <div className={s.DialogsItem}>
                    {dialogElements} {/* метод map позволяет не печатать все элементы массива вручную */}
                    {/* <DialogsItems name={dialogitem[0].name} id={dialogitem[0].id}/>
                    <DialogsItems name={dialogitem[1].name} id={dialogitem[1].id}/>
                    <DialogsItems name={dialogitem[2].name} id={dialogitem[2].id}/>
                    <DialogsItems name={dialogitem[3].name} id={dialogitem[3].id}/>  */}
                </div>
                <div className={s.Messages}>
                    {messageElements}
                    {/* <MessageItems mes={mesitem[0].mes} />
                    <MessageItems mes={mesitem[1].mes} />
                    <MessageItems mes={mesitem[2].mes} />
                    <MessageItems mes={mesitem[3].mes} /> */}
                </div>
            </div>
        </div>
    );
}
export default Messages;