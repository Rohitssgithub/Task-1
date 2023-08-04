import React from 'react'

const Form = () => {
    const handleButtonColor = (event) => {
        event.target.style.backgroundColor = 'red';
    }
    return (
        <>
            <div>Form</div>
            <form action="">
                <input type="text" name="name" />
                <input type="text" name='email' />
                <button onClick={handleButtonColor}>Submit</button>
            </form>

        </>
    )
}

export default Form