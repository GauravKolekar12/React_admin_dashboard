import React from 'react'
import { NavLink } from 'react-router'

const Sidebar = () => {
    return (
        <>
        <div className='sidebar bg-info-subtle'>  
            <div className='container'>
                <div className='row bg-light shadow-sm text-center py-3 mb-4 rounded'>
                    <div>
                        <h4 className='mb-0 d-flex justify-content-center align-items-center gap-2'>
                        <img src='./vite.svg' className='thumbnail' alt='react' style={{width:'20px',fontFamily:''}}/> Admin Dashboard</h4>
                    </div> 
                </div>
                <div className='row bg-light shadow-sm text-center p-3 mb-3 rounded'>
                    <ul className='list-unstyled'>
                        <li><NavLink to='/' className='link '>Home</NavLink></li>
                        <li><NavLink to='/about' className='link'>About</NavLink></li>
                        <li><NavLink to='/employee' className='link'>Employee</NavLink></li> 
                        <li><NavLink to='/company' className='link'>Company</NavLink></li>
                    </ul>
                </div>
                <div className='row bg-light shadow-sm text-center p-3 rounded'>
                    <NavLink to='/empregister' className='btn btn-sm fw-bold'>Employee Register</NavLink>
                </div>
            </div>
        </div>
        </>
    )
}

export default Sidebar