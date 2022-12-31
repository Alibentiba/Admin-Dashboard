import React ,{ PureComponent }  from 'react'
// import { useParams } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Single = () => {
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
      const rows = [
        {
          id: 1143155,
          product: "Acer Nitro 5",
          img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "John Smith",
          date: "1 March",
          amount: 785,
          method: "Cash on Delivery",
          status: "Approved",
        },
        {
          id: 2235235,
          product: "Playstation 5",
          img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Michael Doe",
          date: "1 March",
          amount: 900,
          method: "Online Payment",
          status: "Pending",
        },
        {
          id: 2342353,
          product: "Redragon S101",
          img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "John Smith",
          date: "1 March",
          amount: 35,
          method: "Cash on Delivery",
          status: "Pending",
        },
        {
          id: 2357741,
          product: "Razer Blade 15",
          img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Jane Smith",
          date: "1 March",
          amount: 920,
          method: "Online",
          status: "Approved",
        },
        {
          id: 2342355,
          product: "ASUS ROG Strix",
          img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Harold Carol",
          date: "1 March",
          amount: 2000,
          method: "Online",
          status: "Pending",
        },
      ];
  return (
    <div className='w-full h-screen flex flex-col items-start justify-start gap-1  overflow-x-hidden overflow-scroll scrollbar-hide'>
        
        {/* Top */}

        <div className='h-1/3 w-full flex gap-4 p-2 '>

            {/* Top left */}
            <div className='h-72 w-1/2 flex pl-3 rounded-lg shadow-lg shadow-gray-400'>


                <div className='flex flex-col items-start justify-start'>
                    <p className='text-2xl text-gray-600 font-semibold'>information <button className='text-lg bg-rose-400 px-2 rounded-sm text-black'> Edit</button></p>
                    <img className='w-[200px] h-[200px] object-cover rounded-full' src="https://fr.web.img4.acsta.net/pictures/17/01/24/15/19/303818.jpg" alt="" />
                </div>


                <div className='h-full  w-1/2 flex flex-col items-start gap-2 pl-5 pt-5 justify-start'>
                    <span className='text-2xl font-semibold'>Amola Daw</span>
                    <span className='flex items-center justify-center gap-2'><p className='text-xl font-medium'>Email:</p>Amola@gmail.com</span>
                    <span className='flex items-center justify-center gap-2'><p className='text-xl font-medium'>Phon:</p>+213774710434</span>
                    <span className='flex items-center justify-center gap-2'><p className='text-xl font-medium'>Address:</p>Ale coty</span>
                    <span className='flex items-center justify-center gap-2'><p className='text-xl font-medium'>Country:</p>Aleria</span>
                </div>

            </div>


           {/* Top right */}
           <div className='w-2/3 h-72  flex flex-col  shadow-lg shadow-gray-400  '>
                    <p className='text-xl font-semibold pl-3 text-gray-500'>Last 6 Month(Totale Revenue)</p>
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

        </div>

        
        {/* Bottom */}
<div className="w-full min-h-[600px] mt-24 gap-4 flex flex-col p-2">

      <p className=" text-xl  font-semibold text-gray-600">Latest Transaction</p>

    <TableContainer component={Paper} className="table h-full ">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell className="tableCell text-gray-600 text-lg font-semibold">Tracking ID</TableCell>
            <TableCell className="tableCell text-gray-600 text-lg font-semibold">Product</TableCell>
            <TableCell className="tableCell text-gray-600 text-lg font-semibold">Customer</TableCell>
            <TableCell className="tableCell text-gray-600 text-lg font-semibold ">Date</TableCell>
            <TableCell className="tableCell text-gray-600 text-lg font-semibold">Amount</TableCell>
            <TableCell className="tableCell text-gray-600 text-lg font-semibold">Payment Method</TableCell>
            <TableCell className="tableCell text-gray-600 text-lg font-semibold">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="flex items-center justify-start">
                  <img src={row.img} alt="" className=" w-16 rounded-full object-contain" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={` rounded-md p-2 ${row.status=="Approved" ?'text-green-700 bg-green-200':'text-orange-600 bg-orange-200'}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>

</div>
  )
}

export default Single