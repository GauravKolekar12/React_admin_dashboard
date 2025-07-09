import React,{useEffect, useState} from 'react'
import { NavLink } from 'react-router'

import axios from 'axios';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#e64980', '#9b59b6'];

import './Home.css'

const Home = () => {

    const [chartData, setChartData] = useState([]);


    // to fetch the data in pie chart form
    const fetchEmployeeData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/Employee');
            const positionCounts = response.data.reduce((acc, curr) => {
                acc[curr.position] = (acc[curr.position] || 0) + 1;
                return acc;
                }, {});

            const finalData = Object.entries(positionCounts).map(([position, count]) => ({
                name: position,
                value: count,
            }));

            setChartData(finalData);
            } catch (err) {
            console.error(err);
            }
        };

    useEffect(() => {
        fetchEmployeeData();
    }, []);

    return (
        <>
        <div className='conatiner-fluid'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <div className="card datacard">
                                <div className="card-body d-flex justify-content-center ">
                                    <i className="bi bi-people icon bg-primary" ></i>
                                    <p className='mx-2 text-muted'>Employee{/*<span className='d-block'>700</span>*/}</p>
                                    <p className='fw-bold'>700</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div className="card datacard">
                                <div className="card-body d-flex justify-content-center  ">
                                        <i className="bi bi-buildings icon bg-warning"></i>
                                        <p className='mx-2 text-muted'>Companies </p>
                                        <p  className='fw-bold'>30</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div className="card datacard">
                                <div className="card-body d-flex justify-content-center ">
                                        <i className="bi bi-calendar-range icon bg-info"></i>
                                        <p className='mx-2 text-muted'>Leaves </p>
                                        <p  className='fw-bold'>07</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div className="card datacard">
                                <div className="card-body d-flex justify-content-center ">
                                        <i className="bi bi-person-up icon bg-success"></i>
                                        <p className='mx-2 text-muted'>Income </p>
                                        <p  className='fw-bold'>$5.4M</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

        {/* ************Emp Position Distribution in pie chart************** */}
        <div className='mt-3 border p-3'>
                    <h4 className='text-center'>Employee Position Distribution</h4>
                    <ResponsiveContainer width='100%' height={300}>
                        <PieChart>
                            <Pie
                                data={chartData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                label
                            >
                                {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
        </div>

        {/* *********************************** */}
        </>
    )
}

export default Home