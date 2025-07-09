import React from 'react'
import { NavLink } from 'react-router'

const Sidebar = () => {
    return (
        <>
        <div className='sidebar bg-info-subtle'>  
            <div className='container'>
                <div className='row bg-light shadow-sm p-1 mt-4 text-center'>
                    <div>
                        <h4 className='pb-4 mt-5'><img src='./vite.svg' className='thumbnail' alt='react' style={{width:'20px',}}/> Admin Dashboard</h4>
                    </div> 
                </div>
                <div className='row  bg-light shadow-sm my-2 text-center p-3 '>
                    <ul className='list-unstyled'>
                        <li><NavLink to='/' className='link '>Home</NavLink></li>
                        <li><NavLink to='/about' className='link'>About</NavLink></li>
                        <li><NavLink to='/employee' className='link'>Employee</NavLink></li> 
                    </ul>
                </div>
            </div>




                
        </div>
        </>
    )
}

export default Sidebar