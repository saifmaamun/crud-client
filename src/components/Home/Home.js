import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const users  = useLoaderData();
    const [usersData,setUsersData] = useState(users);

    const handleDelete=user=>{
        const permission=window.confirm(`Are you sure you want to delete {user.name}`)
        if (permission){
            fetch(`http://localhost:7000/user/${user._id}`,{
            method:"DELETE",
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
            })
        }
    }


    return (
        <div>
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