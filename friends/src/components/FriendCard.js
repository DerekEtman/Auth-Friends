import React, {useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';



export const FriendCard = (props) => {
    const {name, age, email} = props;

    console.log("Friend Card: ", props);

    return (
    <>
        <div className="friend-card">
         <div className="friend-wrapper">
            <h4>Name: {name} </h4>
                <div className="friend-info">
                    <p>Age: {age}</p>
                    <p>email: {email}</p>
                </div>
                <button>Ex-Friend</button>
            </div>
        </div>
    </>
    );
};