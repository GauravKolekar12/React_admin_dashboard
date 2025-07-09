import React from 'react'
import { NavLink } from 'react-router'

const Home = () => {
    return (
        <>
        <div className='text-center'>
            <h1>Home</h1>
            <NavLink to='/empregister' className='btn btn-primary btn-sm'>Employee Register</NavLink>
        </div>
        </>
    )
}

export default Home