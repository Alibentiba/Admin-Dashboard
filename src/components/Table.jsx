import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const BasicTable = () => {
  
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
    <div className="w-full h-[500px] gap-2 flex flex-col p-4 ">
      <p className=" text-xl  font-semibold text-gray-300">Latest Transaction</p>

    <TableContainer component={Paper} className="table h-full bg-black ">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="bg-blue-400">
            <TableCell className="bg-black text-gray-300 text-lg font-semibold">Tracking ID</TableCell>
            <TableCell className="tableCell text-gray-300 text-lg font-semibold">Product</TableCell>
            <TableCell className="bg-black text-gray-300 text-lg font-semibold">Customer</TableCell>
            <TableCell className="tableCell text-gray-300 text-lg font-semibold ">Date</TableCell>
            <TableCell className="bg-black text-gray-300 text-lg font-semibold">Amount</TableCell>
            <TableCell className=" text-gray-300 text-lg font-semibold">Payment Method</TableCell>
            <TableCell className="bg-black text-gray-300 text-lg font-semibold">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} className="bg-black text-white font-semibold">
              <TableCell className="text-white">{row.id}</TableCell>
              <TableCell className="text-white">
                <div className="flex items-center justify-start gap-2">
                  <img src={row.img} alt="" className=" w-[80px] h-[80px] rounded-full object-cover" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="text-white">{row.customer}</TableCell>
              <TableCell className="text-white">{row.date}</TableCell>
              <TableCell className="text-white">{row.amount}</TableCell>
              <TableCell className="text-white">{row.method}</TableCell>
              <TableCell className="text-white">
                <span className={` rounded-md p-2 ${row.status=="Approved" ?'text-green-700 bg-green-200':'text-orange-200 bg-orange-400'}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>

  );
};

export default BasicTable;