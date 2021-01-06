import React from 'react';
import MyPost from './MyPosts/MyPost.jsx';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = () => {
    return (
        <div className={classes.content}>
            <ProfileInfo />
            <MyPost />
        </div>
    );

}
export default Profile;
