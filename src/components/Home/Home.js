import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const users  = useLoaderData();
    const [usersData,setUsersData] = useState(users);
    console.log(users)
    return (
        <div>
            <h2>
                user {users.length}
            </h2>
            {
                usersData.map(user=>
                    <div key={user._id}>
                        <p>{user._id}, {user.name}, {user.email}, {user.address}</p>
                        <br />
                        <br />
                    </div>
                )
            }
        </div>
    );
};

export default Home;