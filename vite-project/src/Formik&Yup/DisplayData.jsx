import React from 'react';

const DisplayData = ({ data, SetData, updateUser }) => {


    const deleteUser = (i) => {
        let filterdata = data.filter((ele, index) => {
            return ele.id !== i
        })
        SetData(filterdata)
    }
    return (
        <>
            <div className='container mt-4'>
                <h2>All User</h2>
                <div className='row'>
                    <table className="table text-center">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col"> name</th>
                                <td>Email</td>
                                <th scope="col">Password</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                data.map((user, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.password}</td>
                                            <td>
                                                <button className='btn btn-primary' onClick={() => updateUser(user)}>Update</button>
                                                <button className='btn btn-success' onClick={() => deleteUser(user.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        </>
    )
}

export default DisplayData