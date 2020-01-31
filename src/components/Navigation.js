import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Navbar, NavbarBrand, Nav, NavLink, NavItem } from 'reactstrap'

const Navigation = () => {
    const history = useHistory()

    const navigate = path => {
        history.push(path)
    }

    const logout = e => {
        e.preventDefault()
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('username')
        history.push('/')
    }

    return (
        <Navbar color='light' expand='md'>
            <NavbarBrand onClick={() => navigate('/jokes')}>Dad Jokes</NavbarBrand>
            {sessionStorage.getItem('token') ? (
                <Nav className='mr-auto' navbar>
                    <NavItem>
                        <NavLink href='#' onClick={() => navigate('/jokes')}>Jokes</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='#' onClick={logout}>Logout</NavLink>
                    </NavItem>
                </Nav>
                
            ) : (
                <Nav className='mr-auto' navbar>
                    <NavItem>
                        <NavLink href='#' onClick={() => navigate('/')}>Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='#' onClick={() => navigate('/register')}>Register</NavLink>
                    </NavItem>
                </Nav>
            )}
        </Navbar>
    )
}

export default Navigation