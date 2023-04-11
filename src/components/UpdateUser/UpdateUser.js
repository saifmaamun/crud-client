import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateUser = () => {
    const user  = useLoaderData();
    const [userData,setUsersData] = useState(user);
    return (
        <div>
            <h2>updating User {user.name}</h2>
        </div>
    );
};

export default UpdateUser;