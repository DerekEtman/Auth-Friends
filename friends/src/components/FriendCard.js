import React, {useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';



export const FriendCard = (props) => {
    const {id, name, age, email, setFriend} = props;

    console.log("Friend Card: ", props);

    const deleteFriend = () => {
        axiosWithAuth()
        .delete(`/friends/${id}`)
        .then(res => {
            setFriend(res.data)
        })
        .catch( err => {
            alert("Unable To Delete");
        })
    }

    return (
    <>
        <div className="friend-card">
         <div className="friend-wrapper">
            <h4>Name: {name} </h4>
                <div className="friend-info">
                    <p>Age: {age}</p>
                    <p>email: {email}</p>
                </div>
                <button onClick={deleteFriend}>Ex-Friend</button>
            </div>
        </div>
    </>
    );
};