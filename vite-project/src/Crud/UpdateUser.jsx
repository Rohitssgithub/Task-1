import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const UpdateUser = () => {
    let { id } = useParams()
    let navigate = useNavigate()

    let [updateData, setUpdateData] = useState({})

    useEffect(() => {
        const updateUser = async () => {
            try {
                const response = await axios.get(`https://64ccec782eafdcdc851a772a.mockapi.io/users/${id}`);
                setUpdateData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        updateUser();
    }, [])

    const newData = (e) => {
        setUpdateData({ ...updateData, [e.target.name]: e.target.value });
    };
    const handleUpdate = (e) => {
        e.preventDefault();

        const updateUser = async () => {
            try {
                const response = await axios.put(`https://64ccec782eafdcdc851a772a.mockapi.io/users/${id}`, updateData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        updateUser();
        navigate('/')

    }
    return (
        <>
            <h1>Update User</h1>
            <form onSubmit={handleUpdate}>
                <input type="text" name='name' placeholder='name' value={updateData.name} onChange={newData} />
                <input type="text" name='email' placeholder='email' value={updateData.email} onChange={newData} />
                <input type="text" name='phone' placeholder='phone' value={updateData.phone} onChange={newData} />
                <button>Submit</button>
            </form>
        </>
    )
}

export default UpdateUser