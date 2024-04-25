import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../store/profileSlice'

function Login() {
    const [name, setName] = useState('')
    const dispatch = useDispatch()

    const onclickHandler = (e) => {
        e.preventDefault();
        dispatch(login(name))
    }

    return (
        <div>
            <label >Enter Name : </label>
            <input
                type="text"
                placeholder='Enter Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <button
                className=''
                onClick={onclickHandler}
                type="button"
            >Login</button>
        </div>
    )
}

export default Login
