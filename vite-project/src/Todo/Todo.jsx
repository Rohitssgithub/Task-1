import React, { useState } from 'react'

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [update, setupdate] = useState(false);
    let [ids, SetIds] = useState(0)


    let [data, setData] = useState({})
    console.log(data)
    console.log(todos)

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTodoItem = {
            id: Date.now(),
            title: data.title,
            description: data.description,
            completed: false,
        };
        setTodos([...todos, newTodoItem])

        setData({ title: "", description: "" })

    }

    const handleChang = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        console.log(data)
    }

    const deleteuser = (i) => {

        let filterdata = todos.filter((ele, index) => {
            return ele.id !== i
        })
        setTodos(filterdata)

    }

    const UpdateUser = (user, index) => {
        console.log(user)
        setupdate(!update)
        setData(user)
        SetIds(index)
    }

    const updatedata = () => {
        setupdate(!update)
        console.log(ids)
        let filterdata = todos.find((ele, index) => {
            return index == ids
        })
        console.log(filterdata)
        filterdata.title = data.title
        filterdata.description = data.description

        console.log(filterdata)
        setData(filterdata)
        setData({ title: "", description: "" })

    }

    const handleTodoToggle = (id) => {
        console.log(id)
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };
    return (
        <>
            <div>
                <input type="text" name="title" id="" value={data.title} onChange={handleChang} />
                <input type="text" name="description" id="" value={data.description} onChange={handleChang} />
                {
                    update ?
                        (
                            <button className='btn btn-primary' onClick={updatedata}>update</button>
                        )
                        :
                        (
                            <button className='btn btn-primary' onClick={handleSubmit}>add</button>
                        )
                }
            </div>

            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">status.</th>
                        <th scope="col">No.</th>
                        <th scope="col"> title</th>
                        <th scope="col">description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        todos.map((user, index) => {
                            return (
                                <tr key={index} style={{ textDecoration: user.completed ? 'line-through' : 'none' }}>
                                    <td>
                                        <input type="checkbox" onChange={() => handleTodoToggle(user.id)} />
                                    </td>
                                    <td>{index + 1}</td>

                                    <td>{user.title}</td>
                                    <td>{user.description}</td>
                                    <td>
                                        <button className='btn btn-primary' onClick={() => UpdateUser(user, index)}>Update</button>
                                        <button className='btn btn-success' onClick={() => deleteuser(user.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </>
    )
}

export default Todo