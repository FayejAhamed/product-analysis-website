import { data } from 'autoprefixer';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, ComposedChart, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Scatter, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401,
            "price": 15000,
            "money": 300
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500,
            "price": 11000,
            "money": 100
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010,
            "price": 30000,
            "money": -70
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405,
            "price": 65000,
            "money": -150,
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900,
            "price": 35000,
            "money": 120,
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000,
            "price": 25000,
            "money": 300
        }
    ];

    const gradientOffset = () => {
        const dataMax = Math.max(...data.map((i) => i.money));
        const dataMin = Math.min(...data.map((i) => i.money));
      
        if (dataMax <= 0) {
          return 0;
        }
        if (dataMin >= 0) {
          return 1;
        }
      
        return dataMax / (dataMax - dataMin);
      };
      
      const off = gradientOffset();

    return (
        <div className='grid grid-cols-2 gap-4 mt-6'>
            <div>
                <BarChart
                    width={700}
                    height={500}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="price" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                </BarChart>
            </div>
            <div>
                        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="month" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
            </div>
            <div>
            <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <defs>
            <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset={off} stopColor="green" stopOpacity={1} />
              <stop offset={off} stopColor="red" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="money" stroke="#000" fill="url(#splitColor)" />
        </AreaChart>
            </div>
            <div>
            <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 80,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <Tooltip />
          <Legend />

          <XAxis dataKey="revenue" type="number" label={{ value: '', position: 'insideBottomRight', offset: 0 }} />
          <YAxis unit="ms" type="number" label={{ value: '', angle: -90, position: 'insideLeft' }} />
          <Scatter name="red" dataKey="red" fill="red" />
          <Scatter name="blue" dataKey="blue" fill="blue" />
          <Line dataKey="price" stroke="blue" dot={false} activeDot={false} legendType="none" />
          <Line dataKey="revenue" stroke="red" dot={false} activeDot={false} legendType="none" />
        </ComposedChart>
            </div>
        </div>
    );
};

export default Dashboard;