import React,{useEffect, useState} from 'react'
import { NavLink } from 'react-router'

import axios from 'axios';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer,LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#e64980', '#9b59b6'];

import './Home.css'
import  {RecentActivity, TableData, Teamleads, UpcomingLeaves } from './StatictableData';
// import Linegraph from './Linegraph';



// Sample salary data per month
const data = [
    { month: 'Jan', salary: 35000 },
    { month: 'Feb', salary: 37000 },
    { month: 'Mar', salary: 40000 },
    { month: 'Apr', salary: 42000 },
    { month: 'May', salary: 41000 },
    { month: 'Jun', salary: 43000 },
    { month: 'Jul', salary: 45000 },
    { month: 'Aug', salary: 46000 },
    { month: 'Sep', salary: 44000 },
    { month: 'Oct', salary: 47000 },
    { month: 'Nov', salary: 48000 },
    { month: 'Dec', salary: 50000 },
];

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
                <div className='row mb-4'>
                    {[
                    { icon: "bi-people bg-primary", label: "Employee", value: 700 },
                    { icon: "bi-buildings bg-warning", label: "Companies", value: 30 },
                    { icon: "bi-calendar-range bg-info", label: "Leaves", value: 7 },
                    { icon: "bi-person-up bg-success", label: "Income", value: "$5.4M" }
                    ].map((val, index) => (
                    <div className='col-12 col-sm-6 col-md-3 mb-3' key={index}>
                        <div className="card datacard h-100">
                            <div className="card-body d-flex align-items-center justify-content-center">
                                <i className={`bi ${val.icon} icon`}></i>
                                <div className="ms-3">
                                    <p className='text-muted mb-1'>{val.label}</p>
                                    <p className='fw-bold mb-0'>{val.value}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>



            {/* ************Emp Position Distribution in pie chart************** */}
            <div className='row my-3 p-3 '>
                
                        <div className='col-12 col-lg-6 mb-4  '>
                            <div className='p-3 shadow-sm bg-white rounded h-100'>
                                <h5 className='text-center'>Employee Position Distribution</h5>
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
                        </div>

                        {/* ************company Salary Distribution in line chart************** */}
                        <div className='col-12 col-lg-6 mb-4 '>
                            <div className='p-3 shadow-sm  bg-white rounded h-100'>
                                <h5 style={{ textAlign: 'center' }}>Monthly Salary Chart</h5>
                                <ResponsiveContainer>
                                    <LineChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 20 }}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis dataKey="salary" />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="salary" stroke="#8884d8" strokeWidth={2} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    
            </div>

            {/* *************Static Table Data distribution************* */}
            <div className='row'>
                <div className='col-12 col-lg-6 mb-4'>
                    <TableData/>
                </div>
                <div className='col-12 col-lg-6 mb-4'>
                    <Teamleads/>
                </div>
            </div>

            <div className='row'>
                <div className='col-12 col-lg-6 mb-4'>
                    <RecentActivity/>
                </div>
                <div className='col-12 col-lg-6 mb-4'>
                    <UpcomingLeaves/>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default Home