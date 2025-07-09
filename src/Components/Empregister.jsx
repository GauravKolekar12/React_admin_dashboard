import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const Empregister = () => {
    // 1
    const [data,setData]=useState({name:'',skill:'',position:'',company:''})

    const nav=useNavigate()

    const GetData=(e)=>{
        console.log(e.target.value)
        console.log(e.target.name)

        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }


    const SaveForm=async(e)=>{
        try{

            e.preventDefault()

            await axios.post('http://localhost:3000/Employee',data)
            console.log(data)

            setData({
                name:'',skill:'',position:'',company:''
            })
        }catch(err){
            console.log(err)
        }

        nav('/employee')

    }





    return (
        <>
        <div className='Container-fluid p-5'>
            <h1 className='text-center'>Employee Register</h1>
            <form action={''} onSubmit={(e)=>SaveForm(e)}>
            {/* 2 - set initial values to input fields using value attribute */}
            <div className='row p-5 shadow-lg fw-bold'>
            <div className='col-md-12'>

                <div className='row '>
                <div className='col-md-12 my-3 '>
                    <label htmlFor="empname" >Name</label>
                    <input type="text" className='form-control' name='name' id='empname' placeholder='Enter Employee name' value={data.name} onChange={(e)=>GetData(e)}></input>
                </div>

                <div className='col-md-12 my-3'>
                    <label htmlFor="empemail">Position</label>
                    <select className='form-control' name='position' id='empposition' value={data.position} onChange={(e)=>GetData(e)} >
                        <option value=''>Select Position</option>
                        <option value='Manager'>Manager</option>
                        <option value='Developer'>Developer</option>
                        <option value='Admin'>Admin</option>
                        <option value='Tester'>Tester</option>
                        <option value='Team Lead'>Team Lead</option>
                    </select>
                </div>

                <div className='col-md-12 my-3'>
                    <label htmlFor="empskill">Skill</label>
                    <input type="text" className='form-control'name='skill' id='empskill' placeholder='Enter Employee Skills' value={data.skill} onChange={(e)=>GetData(e)}></input>
                </div>

                <div className='col-md-12 my-3'>
                    <label htmlFor="empcompany">Company</label>
                    <input type="text" className='form-control'name='company' id='empcompany' placeholder='Enter Employee company' value={data.company} onChange={(e)=>GetData(e)}></input>
                </div>

                <div className='col-md-12 mt-3 text-center'>
                    <button type='submit' className='btn btn-success fw-bold ' onSubmit={(e)=>SaveForm(e) }>Submit</button>
                </div>

                </div>

            </div>
            </div>
        </form>


        </div>

        </>
    )
}

export default Empregister