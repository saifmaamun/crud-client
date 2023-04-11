import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AddUsers from '../AddUsers/AddUsers';

const Home = () => {
    const users  = useLoaderData();
    const [usersData,setUsersData] = useState(users);

    const handleDelete=user=>{
        const permission=window.confirm(`Are you sure you want to delete ${user.name}`)
        if (permission){
            fetch(`http://localhost:7000/users/${user._id}`,{
            method:"DELETE",
            })
            .then(res=>res.json())
            .then(data=>{
                if (data.deletedCount === 1) {
                    alert(`${user.name} has been deleted`)
                    const remainingUsers= usersData.filter(remainingUser=>remainingUser._id !== user._id)
                    setUsersData(remainingUsers)
                    
                  } 
            })
        }
    }


    return (
        <div>
            <Link to={"/add"}> <button>Add User</button></Link>
            <h2>
                user {users.length}
            </h2>
            {
                usersData.map(user=>
                    <div key={user._id}>
                        <p>{user._id}, {user.name}, {user.email}, {user.address}</p>
                        <button onClick={()=>handleDelete(user)}> delete user</button>
                        <br />
                        <br />
                    </div>
                )
            }
        </div>
    );
};

export default Home;