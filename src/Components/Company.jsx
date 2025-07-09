import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router'

const Company = () => {

    const[data,setData]=useState([])


    const FetchData=async()=>{

        try{
            const result=await axios.get('http://localhost:3000/Companydetails',data)
            console.log(result.data)

            setData(result.data)


        }catch(err){
            console.log(err)
        }
    }

    useEffect( ()=>{
        FetchData()
    },[])
    return (
        <>

        <div className='container'>
            <div className='row mb-5'>
                <div className='col-md-12 d-block '>
                    <p className='fw-bold'>Company Details</p>
                    <NavLink to='/' className='btn btn-sm text-primary fw-bold'><i className="bi bi-house-door "></i>Home</NavLink>
                    <div className='col-md-3  '>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-primary" type="submit">Search</button>
                        </form>
                    </div>
                </div>


            </div>

            <div className='row'>
                {/* ******Get company details from api in table****** */}
                <table className='table table-bordered table-striped p-2'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.isArray(data) && data.map((val,index)=>{
                                return(
                                <>
                                <tr key={index}>
                                    <td>{val.img}{val.companyname}</td>
                                    <td>{val.address},{val.city}</td>
                                    <td>{val.companymail}</td>
                                    <td>{val.phone}</td>
                                </tr>
                                </>)
                            })
                        }

                    </tbody>
                </table>
            </div>

        </div>

        </>
    )
}

export default Company