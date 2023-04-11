import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const UpdateUser = () => {
    const user  = useLoaderData();
    const [userData,setUsersData] = useState(user);




    // update user on submit
    const updateUser=e=>{
        e.preventDefault();
        fetch()

    }

    const getData=e=>{
        const field= e.target.name;
        const data = e.target.value;
        const updatedUser={...user}
        updatedUser[field] = data;
        setUsersData(updatedUser)
    }



    return (
        <div>
            <Link to={'/'}> <button>Home</button></Link>
            <Link to={'/add'}> <button>Add Users</button></Link>
            <h2>Updating User {user.name}</h2>

            <div>   
                <form onSubmit={updateUser}>
                    <input onChange={getData} type="text" name="name" id="" defaultValue={user.name} /><br />
                    <input onChange={getData} type="email" name="email" id="" defaultValue={user.email} /><br />
                    <input onChange={getData} type="text" name="address" id="" defaultValue={user.address} /><br />
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateUser;