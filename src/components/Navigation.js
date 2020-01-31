import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const Navigation = () => {
    const history = useHistory()

    const logout = e => {
        e.preventDefault()
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('username')
        history.push('/')
    }

    return (
        <div>
            <Link to='/'>Login</Link>
            <Link to='/register'>Register</Link>
            <Link to='/jokes'>Jokes</Link>
            <a href='/' onClick={logout}>Logout</a>
        </div>
    )
}

export default Navigation