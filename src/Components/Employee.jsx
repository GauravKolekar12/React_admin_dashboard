import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router'

const Employee = () => {


    const [allData,setAllData]=useState([])

    const [data,setData]=useState([])

    const FetchData=async()=>{
        try{
        const result=await axios.get('http://localhost:3000/Employee')
        setData(result.data)
        setAllData(result.data)
        }catch (err){
            console.log(err)
        }
    }

    useEffect( ()=>{
        FetchData()
    },[])

    
    const DeleteEmp=async(id)=>{

        try{
            const result=data.filter((val)=>val.id !== id)
            setData(result)
            await axios.delete(`http://localhost:3000/Employee/${id}`)
            FetchData()
        }catch (err){
            console.log(err)
        }
    }


    // *****************Buttons********************

    const DeveloperData=()=>{
        setData(allData.filter((emp)=>emp.position === 'Developer'))
    }

    const TesterData=()=>{
        setData(allData.filter((emp)=>emp.position === 'Tester'))
    }

    const ManagerData=()=>{
        setData(allData.filter((emp)=>emp.position === 'Manager'))
    }







    return (
        <>
        <div className='text-center'>
            <h1 >Employee details</h1>
            <div className='p-2 m-2 '>
                <button className='btn btn-outline-secondary btn-sm mx-1' onClick={() => setData(allData)}>All</button>
                <button className='btn btn-outline-secondary btn-sm mx-1 ' onClick={()=>DeveloperData()}>Developer</button>
                <button className='btn btn-outline-secondary btn-sm mx-1' onClick={()=>TesterData()}>Tester</button>
                <button className='btn btn-outline-secondary btn-sm mx-1' onClick={()=>ManagerData()}>Manager</button>
            </div>
        </div>

        <table className='table table-striped table-bordered text-center shadow-lg'>
            <thead>
                <tr>
                    <th>Sr.No</th>
                    <th>Name</th>
                    <th>Skill</th>
                    <th>Position</th>
                    <th>Company</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                Array.isArray(data) && data.map((val,index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{val.name}</td>
                            <td>{val.skill}</td>
                            <td>{val.position}</td>
                            <td>{val.company}</td>
                            <td><button className='btn btn-sm mx-2' onClick={() => { if (window.confirm('Are You Sure?')) { DeleteEmp(val.id) } }}><i className="bi bi-trash"></i></button>
                            <NavLink to={`/empedit/${val.id}`} className='btn btn-sm mx-2'><i className="bi bi-pencil-square"></i></NavLink>
                            </td>
                            
                        </tr>
                    )
                })}
            </tbody>
        </table>
        
        </>
    )
}

export default Employee