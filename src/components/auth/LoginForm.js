import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { axiosWithAuth } from '../../utils/axiosWithAuth'

const initialCredentials = {
    username: '',
    password: ''
}

const LoginForm = () => {
    const history = useHistory()
    const [credentials, setCredentials] = useState(initialCredentials)

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        axiosWithAuth()
            .post('/auth/login', credentials)
            .then(res => {
                sessionStorage.setItem('token', res.data.token)
                sessionStorage.setItem('username', res.data.username)
                history.push('/jokes')
                setCredentials(initialCredentials)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='username'
                    aria-label='Username'
                    placeholder='Username'
                    value={credentials.username}
                    onChange={handleChange}
                />
                <input
                    type='password'
                    name='password'
                    aria-label='Password'
                    placeholder='Password'
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default LoginForm