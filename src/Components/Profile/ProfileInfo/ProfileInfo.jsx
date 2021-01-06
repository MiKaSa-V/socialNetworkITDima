import React from 'react';
import classes from '../../ComponentaContent.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={classes.pict}>
                <img alt="f" src='https://lifeglobe.net/media/entry/6184/1.jpg' />
            </div>
            <div className={classes.item}>
                ava + description
            </div>
        </div>
    );    
}           
export default ProfileInfo; 