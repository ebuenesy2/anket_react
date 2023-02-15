import "./index.css";
import { DataGrid, GridToolbarExport, GridToolbarContainer } from '@material-ui/data-grid';

//! Date
import Moment from 'moment'; //! Date
Moment.locale(Moment.locale()); // Lokasyona göre Zaman alıyor


/* Html Veri Ekleme */


//! Resim Ad - Soyad Kullanma
function getFullNameImage(params:any) { 
  return <div style={{ display:"flex", gap:"5px" }}>  <img  style={{ width: "50px", height:"50px", borderRadius:"10px" , objectFit:"cover", objectPosition:"50% 50%"}} src={params.row.userImageUrl} /> <a> {params.row.name} </a> <a> {params.row.surname} </a> </div>;
}

//! Div Kullanma
function getRole(params:any) {
  return <div style={{ display:"flex", gap:"5px" }}> <a> {params.row.userRoleTitle} </a> <a> {params.row.lastName} </a> </div>;
}

//! Durum Değişimi
function getStatus(params:any) {
  return <div style={{ display:"flex", gap:"5px" }}> {params.row.onlineStatus == true ? <div style={{ color:"darkgreen" }}> Online </div> : <div style={{ color:"red" }}> Offline </div> } </div>;
}

//! Aktif Değişimi
function getActive(params:any) { 
  return <div style={{ display:"flex", gap:"5px" }}> {params.row.isActive == true ? <div style={{ color:"darkgreen" }}> Active </div> : <div style={{ color:"red" }}> Pasif </div> } </div>;
}


//! Online  Değişimi
function getOnlinChange(params:any) {
  return <div style={{ display:"flex", gap:"5px" }}> {params.row.onlineStatus == true ? <div style={{ color:"darkgreen" }}> {params.formattedValue} </div> : <div style={{ color:"red" }}> Offline </div> } </div>;
}


//! Zaman Kullanma - Otomatik bulur
function getTime (params:any) { 
  return <div style={{ display:"flex", gap:"5px" }}> {params.formattedValue != null ?  <p> {Moment(params.formattedValue).format('DD-MM-YYYY')} - {Moment(params.formattedValue).format('HH:mm:ss')} </p> : <div style={{ color:"darkgreen" }}> Online</div> } </div>;
}



/* Html Veri Ekleme */

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },

  { field: 'name', headerName: 'Name', width: 250,  renderCell:getFullNameImage, editable: false},
  { field: 'role', headerName: 'Role', width: 250,  renderCell:getRole, editable: false},
  { field: 'online', headerName: 'Online', width: 150, renderCell:getStatus, editable: false},
  { field: 'aktif', headerName: 'Aktif', width: 150, renderCell:getActive, editable: false},
  { field: 'email', headerName: 'Email', width: 225,  editable: false},
  { field: 'username', headerName: 'Username', width: 225,  editable: false},
  { field: 'created_at', headerName: 'Oluşturduğu Zaman', width: 250, renderCell:getTime, editable: false},
  { field: 'onlinePage', headerName: 'Online Sayfasi', width: 225, renderCell:getOnlinChange, editable: false},
  { field: 'totalDurationMs', headerName: 'Toplam Online Süresi(ms)', width: 300, editable: false},
  { field: 'onlineMod', headerName: 'OnlineMod', width: 175, renderCell:getOnlinChange, editable: false},
  { field: 'onlineLastLogin_At', headerName: 'Login Zaman', width: 250, renderCell:getTime,  editable: false},
  

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


