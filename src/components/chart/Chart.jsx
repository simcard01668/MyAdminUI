import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'January',
    Total: 4000
  },
  {
    name: 'February',
    Total: 3000,
  },
  {
    name: 'March',
    Total: 2780
  },
  {
    name: 'April',
    Total: 1890
  },
  {
    name: 'May',
    Total: 2390
  },
  {
    name: 'June',
    Total: 3490
  },
];
const Chart = ({aspect, customHeight, title}) => {
  
  return (
    <div className='flex-[2] myBoxShadow p-[10px] h-[100%]'>
      <div className="div m-[5px]">{title}</div>
      <ResponsiveContainer width="100%" height={customHeight}>
      <AreaChart height="100%" data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
  
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
  </ResponsiveContainer>
      </div>

  )
}

export default Chart