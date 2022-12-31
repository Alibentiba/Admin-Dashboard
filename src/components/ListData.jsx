import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {userColumns,userRows} from '../data/products-small'
import { Link, useParams } from 'react-router-dom';
// import { iteratorSymbol } from 'immer/dist/internal';




const ListData=()=> {
  const {id}=useParams()
  const handelDelet=()=>{
 
  }
const Actioncol=[
  { field: "Action", headerName: "Action", width: 190,
  renderCell: (params) => {
    return (
      <div className="flex items-center justify-center gap-3 text-lg text-white">
        <button className='px-3 py-1  rounded-md bg-orange-500' onClick={handelDelet()}>Delete</button>
        <Link to={`/user/:${params.row.id}`}><button className='px-3 py-1  rounded-md bg-blue-400'> View</button></Link>

      </div>
    );
  },


}



]


  return (
    <div style={{ height: 800, width: '100%' }}>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(Actioncol)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
}
export default  ListData