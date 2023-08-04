import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
    let navigate = useNavigate()

    let [data, SetData] = useState({})

    const handlechange = (e) => {
        SetData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const postUser = async () => {
            try {
                const response = await axios.post('https://64ccec782eafdcdc851a772a.mockapi.io/users', data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        postUser();
        navigate('/')
    }
    return (
        <>
            <h1>Create User</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='name' onChange={handlechange} />
                <input type="text" name='email' placeholder='email' onChange={handlechange} />
                <input type="text" name='phone' placeholder='phone' onChange={handlechange} />
                <button>submit</button>

            </form>
        </>
    )
}

export default CreateUser