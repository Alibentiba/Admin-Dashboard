import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {userColumns,userRows} from '../data/products-small'
import { Link, useParams } from 'react-router-dom';

import Fab from '@mui/material/Fab';
import VisibilityIcon  from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
const ListData=()=> {
  const {id}=useParams()
  const handelDelet=()=>{
 
  }
const Actioncol=[
  { field: "Action", headerName: "Action", width:'250',
  renderCell: (params) => {
    return (
      <div className="flex items-center justify-center gap-5 ml-2 text-lg text-white p-5">
         <Fab size="small" color="error" aria-label="add">
        <DeleteIcon  />
      </Fab>
        <Link to={`/user/${params.row.id}`}>
        <Fab size="small" color="primary" aria-label="add">
        <VisibilityIcon fontSize="large" />
      </Fab>
        </Link>

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
        sx={{'& .MuiSvgIcon-root':{color:'white',fontSize:'28px',fontWeight:'600'},
        '& .MuiDataGrid-columnHeadersInner':{fontSize:'20px',backgroundColor:'#0b80d3',width:'100%',borderBottom:'none'}
      
      
      }}
      />
    </div>
  );
}
export default  ListData