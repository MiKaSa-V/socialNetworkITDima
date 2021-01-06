import React from 'react';
import classes from './MyPost.css';
import Posts from './Posts/Posts';

const MyPost = () => {
    return (
        <div className={classes.item}>
            My posts
            <div className={classes.item}>
                <textarea></textarea>
                <button>App posts</button>
            </div>
            <div className={classes.item}>
                <Posts />
                {/* {postElement} */}
                {/* <Posts message ={postsData[0].message} like ={postsData[0].like}/>
                <Posts message ={postsData[1].message} like ={postsData[1].like}/> */}
            </div>
        </div>
    );
}
export default MyPost;