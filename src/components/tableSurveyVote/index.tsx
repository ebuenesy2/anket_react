import "./index.css";
import { DataGrid, GridToolbarExport, GridToolbarContainer } from '@material-ui/data-grid';



//! Date
import Moment from 'moment'; //! Date
Moment.locale(Moment.locale()); // Lokasyona göre Zaman alıyor



//! Div Kullanma
function getAnswerTitle(params:any) {
  return <div style={{ display:"flex", gap:"5px" }}> <a> {params.row.surveyAnswersTitle} </a>  </div>;
}

//! Div Kullanma
function getUserId(params:any) {
  return <div style={{ display:"flex", gap:"5px" }}> <a> {params.row.voterId} </a>  </div>;
}



//! Zaman Kullanma - Otomatik bulur
function getTime (params:any) { 
  return <div style={{ display:"flex", gap:"5px" }}> {params.formattedValue != null ?  <p> {Moment(params.formattedValue).format('DD-MM-YYYY')} - {Moment(params.formattedValue).format('HH:mm:ss')} </p> : <div style={{ color:"darkgreen" }}> Online</div> } </div>;
}



/* Html Veri Ekleme */

const columns = [
  { field: 'id', headerName: 'ID', width: 180 },
  { field: 'answerTitle', headerName: 'Cevap', width: 200,  renderCell:getAnswerTitle,  editable: false},
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


