import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {userColumns,userRows} from '../data/products-small'
import { Link, useParams } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
import { GrFormView } from 'react-icons/gr';

const ListData=()=> {
  const {id}=useParams()
  const handelDelet=()=>{
 
  }
const Actioncol=[
  { field: "Action", headerName: "Action", width: 190,
  renderCell: (params) => {
    return (
      <div className="flex items-center justify-center gap-5 m-2 text-lg text-white">
        <button className='  rounded-full  text-3xl flex items-center justify-center text-red-500 h-[35px] w-[35px]' onClick={handelDelet()}><AiFillDelete/></button>
        <Link to={`/user/${params.row.id}`}>
          <button className='rounded-full bg-slate-100  text-3xl flex items-center justify-center  h-[35px] w-[35px]'>
           <GrFormView/>
        </button></Link>

      </div>
    );
  },


}



]


  return (
    <div style={{ height: 800, width: '100%' }} >
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(Actioncol)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        className='text-white'
      />
    </div>
  );
}
export default  ListData