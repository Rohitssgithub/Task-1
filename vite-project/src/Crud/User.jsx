import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

const User = () => {
    let [data, SetData] = useState([])
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://64ccec782eafdcdc851a772a.mockapi.io/users');
                SetData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchUsers();

    }, [])
    const deleteuser = (id) => {
        let user = data.filter((user) => {
            return user.id !== id
        })
        SetData(user)
    }
    return (
        <>
            <Link to='/CreateUser'><button className='btn btn-success my-3'>Create User</button></Link>
            <div className='table-responsive'>
                <table className="table">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col"> name</th>
                            <th scope="col">email</th>
                            <th scope="col">phone</th>
                            <th scope="col">Image</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            data.map((user, index) => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td><img src={user.avatar} alt="" /></td>
                                        <td>
                                            <Link to={`/updateuser/${user.id}`} > <button className='btn btn-primary'>Update</button></Link>
                                            <button className='btn btn-success' onClick={() => deleteuser(user.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default User

// create a user details CRUD OPERATION. use json server for dummy api.
//  use useEefect hook for hiting a api. then store data to state using useState.