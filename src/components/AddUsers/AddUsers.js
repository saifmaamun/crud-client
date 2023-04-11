import React from 'react';

const AddUsers = () => {



    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.pass.value;
        const address = e.target.address.value;
        const user = {name: name, email: email, password: password, address: address}
        // console.log(user)
        fetch("http://localhost:7000/user",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.acknowledged){
                window.alert("user added successfully")
                e.target.reset()
            }
        })

    }
    return (
        <div>
            <h2>
                Add users
            </h2>
                <h3>forms</h3>
            <form onSubmit={handleSubmit} >
                <input type="text" name="name" id="" placeholder='enter your name' /><br />
                <input type="email" name="email" id="" placeholder='enter your mail' /><br />
                <input type="password" name="pass" id=""placeholder='Type your pasword'  /><br />
                <input type="text" name="address" id="" placeholder='enter your full address' /><br />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUsers;