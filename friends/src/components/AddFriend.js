import React, {useState, useEffect, Route, location } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import Login from './LogIn';



export const AddFriend = (props) => {
    console.log("Props addfriend: ", props)
    const { router } = props;
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [email, setEmail] = useState();

    const handleNameChanges = e =>{
        setName(e.target.value)
    }

    const handleAgeChanges = e =>{
        setAge(e.target.value)
    }

    const handleEmailChanges = e =>{
        setEmail(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/friends', {
            name,
            age,
            email
        })
        .then(res=> console.log("res: ", res))
        .catch(err => console.log("Axios Post err: ", err));
        router.push('/');

    }


 return(
    <div className="add-form">
         <form onSubmit={handleSubmit}>
         <div>
            <input 
            type="text" 
            name="Name" 
            className="name"
            placeholder="Name"
            value={name}
            onChange={handleNameChanges}
            />
         </div> 

         <div>
            <input 
            type="number"
            name="age"
            className="age"
            placeholder="Age"
            onChange={handleAgeChanges}
            />
         </div>

         <div>
            <input
            type="email"
            name="email"
            className="email"
            placeholder="Email"
            onChange={handleEmailChanges}
            />
         </div>
            
            <button className="addButton" onClick={handleSubmit} >
                Add Friend
            </button>
         </form>
    </div>
    )
}