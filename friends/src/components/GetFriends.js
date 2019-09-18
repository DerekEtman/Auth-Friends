import React, { useState, useEffect }  from 'react';
import {withRouter} from 'react-router-dom';
import { FriendCard } from './FriendCard';
import { AddFriend } from './AddFriend';
import {axiosWithAuth} from '../utils/axiosWithAuth';



export const GetFriends = () => {
    const [friend, setFriend] = useState([]);
    console.log("friend: ", friend);
    
    useEffect(() => {        
        axiosWithAuth()
        .get("/friends")
        .then(res => setFriend(res.data))
        .catch(err => console.log("Axios Err: ", err));
    }, []);

    // const deleteFriend = () => {
    //     axiosWithAuth()
    //     .delete(`/friends/${id}`)
    //     .then(res => {
    //         setFriend(res.data)
    //     })
    //     .catch( err => {
    //         alert("Unable To Delete");
    //     })
    // }
    


    return(
    <>
        <div className="friends">
                <h2> Friends</h2>
                <AddFriend  setFriend={setFriend}/>

                <div className="friend-list">
                { friend.map(data => (<FriendCard id={data.id} setFriend={setFriend} name={data.name} age={data.age} email={data.email} />))}
                </div>
        </div>

    </>
    )
};

const getFriendWithRouter = withRouter(GetFriends)
export default getFriendWithRouter;