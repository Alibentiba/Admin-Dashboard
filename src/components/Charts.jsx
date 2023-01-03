import React ,{ PureComponent }  from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Charts = () => {
  const data = [
    {name:"jan",Total:1200},
    {name:"fev",Total:150},
    {name:"mar",Total:200},
    {name:"av",Total:1500},
    {name:"joun",Total:2200},
    {name:"jui",Total:4500},
    {name:"out",Total:10},
    {name:"sept",Total:2200},
    {name:"octo",Total:3300},
    {name:"nev",Total:1590},
    {name:"dec",Total:100},
   
  ];
  return (

    <div className='w-full h-full flex flex-col  shadow-lg shadow-gray-400'>
      <p className='text-xl font-semibold pl-3 text-gray-300'>Last 6 Month(Totale Revenue)</p>
       <ResponsiveContainer width="100%" height="100%">
       <AreaChart width={730} height={250} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="Total" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
              
            </defs>

              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#Total)" />
          </AreaChart>
              
      </ResponsiveContainer>


        
    </div>
  )
}

export default Charts