import React, { useState, useEffect }  from 'react';
import { withRouter } from 'react-router';
import { FriendCard } from './FriendCard';
import { AddFriend } from './AddFriend';
import {axiosWithAuth} from '../utils/axiosWithAuth';



const GetFriends = () => {
    const [friend, setFriend] = useState([]);
    console.log("friend: ", friend);
    
    useEffect(() => {        
        axiosWithAuth()
        .get("/friends")
        .then(res => setFriend(res.data))
        .catch(err => console.log("Axios Err: ", err));
    }, []);
    


    return(
    <>
        <div className="friends">
                <h2> Friends</h2>
                <AddFriend />

                <div className="friend-list">
                { friend.map(data => (<FriendCard  name={data.name} age={data.age} email={data.email} />))}
                </div>
        </div>

    </>
    )
};

export default withRouter(GetFriends);