import React, { useState, useEffect }  from 'react';

import {axiosWithAuth} from '../utils/axiosWithAuth';



const GetFriends = () => {
    const [friend, setFriend] = useState();
    
    useEffect(() => {
       getData();
    }, [friend]);


    const getData = () => {
        axiosWithAuth()
        .get("/friends")
        .then(res => console.log("GetData: ", res))
        .catch(err => console.log("Axios Err: ", err))
    };

    return(
    <>
        <div className="friends">
                <h2> Friends</h2>
            
        <div className="friend-wrapper">
            <h2>Friend Name</h2>
            <div className="friend-info">
                <p>Age:</p>
                <p>email:</p>
            </div>
        </div>

        </div>
    </>
    )
};

export default GetFriends;