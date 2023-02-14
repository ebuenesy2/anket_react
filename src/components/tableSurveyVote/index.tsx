import "./index.css";
import { DataGrid, GridToolbarExport, GridToolbarContainer } from '@material-ui/data-grid';

//! icons
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';
import PanToolIcon from '@material-ui/icons/PanTool';


//! Date
import Moment from 'moment'; //! Date
import { Button, Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import { useState } from "react";
import axios from "axios";
Moment.locale(Moment.locale()); // Lokasyona göre Zaman alıyor




/* Function */
const deleteUser =(id:any) => {
    alert(id);
    alert("delete");
}

const vieweUser =(id:any) => {
  alert(id);
  alert("vieweUser");

  window.location.href="/survey/vote?id="+id;
}

const editUser =(id:any) => {
  alert(id);
  alert("editUser");
}


//! Actions Kullanma
function getActions(params:any) {
  return <div style={{ display:"flex", gap:"5px",cursor:"pointer" }}>
     <div style={{ color:"red" }} onClick={()=> { deleteUser( params.row.id) }} >   <DeleteIcon />  </div>
     <div style={{ color:"blue" }} onClick={()=> { vieweUser( params.row.id) }} >   <VisibilityIcon />  </div>
     <div style={{ color:"black" }} onClick={()=> { editUser( params.row.id) }} >   <EditIcon />  </div>
   
  </div>;
}



//! Div Kullanma
function getUserId(params:any) {
  return <div style={{ display:"flex", gap:"5px" }}> <a> {params.row.voterInfo.id} </a>  </div>;
}



//! Zaman Kullanma - Otomatik bulur
function getTime (params:any) { 
  return <div style={{ display:"flex", gap:"5px" }}> {params.formattedValue != null ?  <p> {Moment(params.formattedValue).format('DD-MM-YYYY')} - {Moment(params.formattedValue).format('HH:mm:ss')} </p> : <div style={{ color:"darkgreen" }}> Online</div> } </div>;
}



/* Html Veri Ekleme */

const columns = [
  { field: 'id', headerName: 'ID', width: 180 },
  { field: 'actions', headerName: 'Actions', width: 150,  renderCell:getActions, editable: false},
  { field: 'UserId', headerName: 'KullanıcıId', width: 200,  renderCell:getUserId,  editable: false},

  { field: 'created_at', headerName: 'Oluşturduğu Zaman', width: 250, renderCell:getTime, editable: false}
];


//! Export
function MyExportButton() {
  return (<GridToolbarContainer style={{justifyContent: 'flex-end'}}>
           <GridToolbarExport csvOptions={{ allColumns: true }} value="deneme" />
           </GridToolbarContainer>
         );
}

export const Index =(props: any) => {
  //console.log("props:",props);



  return (
        <div  className='TableUserList'>

            <DataGrid
              rows={props.data}
              columns={columns}
              pageSize={ Number(props.pageSize) ? Number(props.pageSize) : 8 }
              checkboxSelection
              disableSelectionOnClick
              components={{
                Toolbar: MyExportButton,
              }}
            />
             
        

        </div>
    
  )
}

export default Index;
function useStyles() {
  throw new Error("Function not implemented.");
}

