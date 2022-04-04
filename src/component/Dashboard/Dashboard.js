import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Line, LineChart } from 'recharts';

const Dashboard = () => {
    const [charts, setCharts] = useState([]);
    useEffect(() =>{
        fetch('rechart.json')
        .then(res =>res.json())
        .then(data => setCharts(data))
    },[])
    return (
       <LineChart width={400} hanging={500} data={data}>
           <Line dataKey={'sell'}></Line>
       </LineChart>
    );
};

export default Dashboard;