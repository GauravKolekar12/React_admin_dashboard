import React from 'react'


// Sample data
const Todaysdata = [
    {
        type: 'birthday',
        name: 'Daniel Martinez',
        avatar: 'https://i.pravatar.cc/40?img=11'
    },
    {
        type: 'birthday',
        name: 'Amelia Curr',
        avatar: 'https://i.pravatar.cc/40?img=12'
    },
    {
        type: 'birthday',
        name: 'Emma Lewis',
        avatar: 'https://i.pravatar.cc/40?img=13'
    },
    {
        type: 'sick',
        name: 'Madison Andrew',
        avatar: 'https://i.pravatar.cc/40?img=14'
    },
    {
        type: 'sick',
        name: 'Victoria Celestie',
        avatar: 'https://i.pravatar.cc/40?img=15'
    },
    {
        type: 'sick',
        name: 'Daniel Patrick',
        avatar: 'https://i.pravatar.cc/40?img=16'
    },
    {
        type: 'sick',
        name: 'Jessica Renee',
        avatar: 'https://i.pravatar.cc/40?img=17'
    }
];


const TeamLeads = [
    {
        name: "Braun Kelton",
        team: "PHP",
        email: "braun@example.com",
        avatar: "https://i.pravatar.cc/40?img=1"
    },
    {
        name: "Sarah Michelle",
        team: "IOS",
        email: "sarah@example.com",
        avatar: "https://i.pravatar.cc/40?img=2"
    },
    {
        name: "Daniel Patrick",
        team: "HTML",
        email: "daniel@example.com",
        avatar: "https://i.pravatar.cc/40?img=3"
    },
    {
        name: "Emily Clark",
        team: "UI/UX",
        email: "emily@example.com",
        avatar: "https://i.pravatar.cc/40?img=4"
    },
    {
        name: "Ryan Christopher",
        team: "React",
        email: "ryan@example.com",
        avatar: "https://i.pravatar.cc/40?img=5"
    }
];

// recentActivity.js
const recentActivity = [
  {
    id: 1,
    name: "Priya Sharma",
    action: "Joined as HR Executive",
    date: "2025-07-15",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    type: "join"
  },
  {
    id: 2,
    name: "Rahul Verma",
    action: "Requested leave for 2 days",
    date: "2025-07-14",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    type: "leave"
  },
  {
    id: 3,
    name: "Sneha Patil",
    action: "Promoted to Senior Developer",
    date: "2025-07-13",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    type: "promotion"
  },
  {
    id: 4,
    name: "Amit Deshmukh",
    action: "Completed probation period",
    date: "2025-07-12",
    avatar: "https://randomuser.me/api/portraits/men/30.jpg",
    type: "milestone"
  },
  {
    id: 5,
    name: "Neha Kulkarni",
    action: "Transferred to Pune Office",
    date: "2025-07-11",
    avatar: "https://randomuser.me/api/portraits/women/15.jpg",
    type: "transfer"
  }
];

// Upcoming Leaves of Employees
 const upcomingLeaves = [
  {
    id: 1,
    name: "Priya Sharma",
    department: "HR",
    fromDate: "2025-07-20",
    toDate: "2025-07-22",
    reason: "Medical Leave",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    name: "Rahul Verma",
    department: "Finance",
    fromDate: "2025-07-21",
    toDate: "2025-07-21",
    reason: "Personal Work",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg"
  },
  {
    id: 3,
    name: "Sneha Patil",
    department: "Development",
    fromDate: "2025-07-23",
    toDate: "2025-07-25",
    reason: "Family Function",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 4,
    name: "Amit Deshmukh",
    department: "Marketing",
    fromDate: "2025-07-26",
    toDate: "2025-07-27",
    reason: "Outstation Travel",
    avatar: "https://randomuser.me/api/portraits/men/30.jpg"
  },
  {
    id: 5,
    name: "Neha Kulkarni",
    department: "Support",
    fromDate: "2025-07-28",
    toDate: "2025-07-28",
    reason: "Appointment",
    avatar: "https://randomuser.me/api/portraits/women/15.jpg"
  },
  {
    id: 6,
    name: "Rani Mehta",
    department: "Sales",
    fromDate: "2025-07-28",
    toDate: "2025-07-25",
    reason: "Sick Leave",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  
  
];



export const TableData = () => (
    
        <div className="card p-3">
            <h5 className="fw-bold mb-3">Today</h5>
            <ul className="list-group list-group-flush">
                {
                Todaysdata.map((val, index) => (
                <li key={index} className="list-group-item d-flex align-items-center justify-content-between">
                    <span className="mx-5">
                    {val.type === 'birthday' ? <i className="bi bi-cake2 bg-danger-subtle rounded-circle p-2 "></i> : <i className="bi bi-calendar2-week bg-info-subtle rounded-circle p-2 "></i>}
                    </span>
                    <span>
                    {val.name}'s {val.type === 'birthday' ? 'Birthday' : 'is off sick today'}
                    </span>
                    {/* <span>
                        {val.avatar}
                    </span> */}

                    <img
                        src={val.avatar}
                        alt={val.name}
                        className="rounded-circle ms-auto"
                        width="28"
                        height="28"
                    />
                
                </li>
                ))}
            </ul>
        </div>  
);

export const Teamleads=()=>(
    
        <div className="card p-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold">Team Leads</h5>
                <button className="btn btn-outline-secondary btn-sm">Manage Team</button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Lead Name</th>
                        <th>Team</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {TeamLeads.map((val, index) => (
                        <tr key={index}>
                            <td className="d-flex align-items-center gap-2">
                                <img src={val.avatar} alt={val.name} className="rounded-circle" width="32" height="32" />
                                {val.name}
                            </td>
                            <td><span className="badge bg-secondary">{val.team}</span></td>
                            <td>{val.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
)

export const RecentActivity=()=>(

    <div className="card p-3 shadow-sm">
        <h5 className="mb-3 fw-bold">Recent Employee Activity</h5>
        <ul className="list-group list-group-flush">
            {recentActivity.map((val,index) => (
            <li key={index} className="list-group-item d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <img
                        src={val.avatar}
                        alt={val.name}
                        className="rounded-circle me-3"
                        style={{ width: "40px", height: "40px", objectFit: "cover" }}
                    />
                    <div>
                        <strong>{val.name}</strong><br />
                        <small>{val.action}</small>
                    </div>
                    
                </div>
                <small className="text-muted">{val.date}</small>
            </li>
            ))}
        </ul>
    </div>
);


export const UpcomingLeaves=()=>(

    <div className="card p-3">
            <div className="d-flex justify-content-between align-items-center mb-2">
                <h5 className="fw-bold">Upcoming Leaves</h5>
                <button className="btn btn-outline-secondary btn-sm">Manage Leaves</button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Reason</th>
                    </tr>
                </thead>
                <tbody>
                    {upcomingLeaves.map((val, index) => (
                        <tr key={index}>
                            <td className="d-flex align-items-center gap-2">
                                <img src={val.avatar} alt={val.name} className="rounded-circle" width="28" height="28" />
                                {val.name}
                            </td>
                            <td><span className="badge bg-secondary">{val.toDate}</span></td>
                            <td><small>{val.reason}</small></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
)





