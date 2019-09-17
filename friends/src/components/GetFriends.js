import React, { useState, useEffect }  from 'react';
import { FriendCard } from './FriendCard';
import { AddFriend } from './AddFriend';
// import {axiosWithAuth} from '../utils/axiosWithAuth';



const GetFriends = () => {
    // const [friend, setFriend] = useState();
    // console.log("friend: ", friend);
    
    // useEffect(() => {        
    //     axiosWithAuth()
    //     .get("/friends")
    //     .then(res => setFriend(res.data))
    //     .catch(err => console.log("Axios Err: ", err))
    // }, []);
    

    // const formatData = () => {
    //     console.log("Friend Data: ", friendData)

    //     friend.forEach((name, age, email) => {
    //         console.log("Name: ", name, "Age: ", age, "email: ", email)
    //         friendData.push({
    //             name: name,
    //             age: age,
    //             email: email
    //         })
    //     });

    //     return friendData;
    // };



    return(
    <>
        <div className="friends">
                <h2> Friends</h2>
                <AddFriend />
                <FriendCard />
        </div>

    </>
    )
};

export default GetFriends;