import React from 'react';
import classes from './Posts.module.css';


const PostsItem = (props) => {
    let likeCount = 'Like: ' + props.Like;
    return (
        <div>
            <div className={classes.item}>{props.Pict} {props.mess} {likeCount}</div> 
        </div>
    );
}
    let postsMess = [
        {id: 1, mess: 'Hi', Like: 12, Pict: <img alt="" src='https://i12.fotocdn.net/s119/89add5103065d77d/user_l/2724187789.jpg' />},
        {id: 2, mess: 'first post', Like: 12, Pict: <img alt="" src='https://i12.fotocdn.net/s119/89add5103065d77d/user_l/2724187789.jpg' />},
        {id: 3, mess: 'first post', Like: 12, Pict: <img alt="" src='https://i12.fotocdn.net/s119/89add5103065d77d/user_l/2724187789.jpg' />},
        {id: 4, mess: 'first post', Like: 12, Pict: <img alt="" src='https://i12.fotocdn.net/s119/89add5103065d77d/user_l/2724187789.jpg' />}
    ]
let postMess = postsMess.map( m => <PostsItem mess ={m.mess} Like = {m.Like} Pict = {m.Pict}/>);


const Posts = (props) => {
    return (
        <div className={classes.item}>
           {postMess}
        </div>
    );
}
export default Posts;