import React, {useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';



export const FriendCard = () => {

    const [friend, setFriend] = useState();
    console.log("friend: ", friend);
    
    useEffect(() => {        
        axiosWithAuth()
        .get("/friends")
        .then(res => setFriend(res.data))
        .catch(err => console.log("Axios Err: ", err))
    }, []);

    return (
    <>
        <div className="friend-card">
         <div className="friend-wrapper">
            <h4>Name: </h4>
                <div className="friend-info">
                    <p>Age:</p>
                    <p>email:</p>
                </div>
            </div>
        </div>
    </>
    );
};