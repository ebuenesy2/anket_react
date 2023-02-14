import "./index.css";
import { DataGrid, GridToolbarExport, GridToolbarContainer } from '@material-ui/data-grid';

//! icons
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';
import PanToolIcon from '@material-ui/icons/PanTool';
import Swal from 'sweetalert2';

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




/* Html Veri Ekleme */

//! Birleştirmw
function getFullName(params:any) {
  return `${params.row.firstName || ''} ${params.row.lastName || ''}`;
}

 //! Link
function getLink(params:any) { 
  return <a href={`${params.row.link}`}>Link</a>;
}

//! Yazı
function getText(params:any) { 
  return <a> {params.row.category} </a>;
}

//! Resim
function getImage(params:any) {
  return <img  style={{ width: "50px", height:"50px", borderRadius:"50%" }} src={params.row.image} />;
}

//! Div Kullanma
function getDiv(params:any) {
  return <div style={{ display:"flex", gap:"5px" }}> <a> {params.row.firstName} </a> <a> {params.row.lastName} </a> </div>;
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
function getQuestion(params:any) {
  return <div style={{ display:"flex", gap:"5px" }}> <a> {params.row.question} </a>  </div>;
}

//! Div Kullanma
function getVote(params:any) {
  return <div style={{ display:"flex", gap:"5px" }}> <a> {params.row.voteCount} </a>  </div>;
}



//! Zaman Kullanma - Otomatik bulur
function getTime (params:any) { 
  return <div style={{ display:"flex", gap:"5px" }}> {params.formattedValue != null ?  <p> {Moment(params.formattedValue).format('DD-MM-YYYY')} - {Moment(params.formattedValue).format('HH:mm:ss')} </p> : <div style={{ color:"darkgreen" }}> Online</div> } </div>;
}



/* Html Veri Ekleme */

const columns = [
  { field: 'id', headerName: 'ID', width: 180 },
  { field: 'actions', headerName: 'Actions', width: 150,  renderCell:getActions, editable: false},
  { field: 'questions', headerName: 'Soru', width: 150,  renderCell:getQuestion,  editable: false},
  { field: 'vote', headerName: 'Oylama Sayısı', width: 200,  renderCell:getVote,  editable: false},

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

  const [success, setSuccess] = useState(0); //! Success

  const [questionState, setQuestionState] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
   
  //! Verileri Kayıt Etme
  const addData = () => {
    
     console.log("Veri Ekleme");

    if (questionState == "") {  alert("Soru Eksik"); }
    else if (answer1 == "") {  alert("En az bir cevap yazılmalıdır"); }
     else {

        const answers = {
            answer1:answer1 == '' ? null : answer1,
            answer2:answer2 == '' ? null : answer2,
            answer3:answer3 == '' ? null : answer3,
            answer4:answer4 == '' ? null : answer4
        }

        const apiUrl_table=process.env.REACT_APP_API_URL+"/api/survey/add";
        console.log("apiUrl_table:",apiUrl_table);
        
          //Eklenen Veriler
          const NewData={
            serverId: "0",
            serverToken:"yildirimdev",
            question:questionState,
            answers: answers,
            created_byToken:"created_byToken"
          }
     

          axios.post(apiUrl_table,NewData)
            .then(response => {
            
            //! State
            setSuccess(response.data.status); //! Durum
            
            //! console
            console.log("Data:", response.data);
              
              
              if (response.data.status == 1) {
              
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'İşleminiz Başarılı',
                  showConfirmButton: false,
                  timer: 2000
                });
                
                props.setModalOpen(false);
                 props.apiGet();

                //! window.location.href ="/survey"; //! Sayfa Yönledirme
              }
            
              else if (response.data.status == 0) {
              
                Swal.fire({
                  position: 'center',
                  icon: 'error',
                  title: 'İşleminiz Hatalı',
                  showConfirmButton: false,
                  timer: 2000
                });
                
              
              }
            
              
          })
          .catch(error => {  console.log("Api Error:",error.message); });

    }

  }

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
             
             <Dialog open={props.modalOpen} >
               <DialogTitle style={{ display:"flex", justifyContent:"center", width:"600px"}} >
                <div style={{display:"flex", justifyContent:"space-between", width:"500px"}} >
                  <p>Anket Ekle</p>
                  <ClearIcon onClick={()=>{props.setModalOpen(false);}}  style={{cursor:"pointer",color:"red",border:"1px solid"}}  />
                </div>
               </DialogTitle>
               <hr/>
               <DialogContent>
               <form  >
                  <div className="form-group">
                          <label htmlFor="question"> Soru </label>
                          <input type="text"  className="form-control"
                          name="question"  placeholder="Anket Sorusunu Yazınız.."
                          value={questionState} onChange={(e)=>{ setQuestionState(e.target.value); }} />                       
                  </div>

                  <div className="form-group">
                      <div style={{ marginTop:"10px",  display:"flex", gap:"10px" }}>
                        <PanToolIcon style={{fontSize:"30px", color:"red"}} />
                        <p style={{ marginTop:"auto", marginBottom:"auto" }}>Dikkat: Yazılan Cevap Kadar Gösterir </p>
                      </div>
                  </div>

                  <hr />

                  <div className="form-group">
                          <label htmlFor="answer1"> Cevap 1 </label>
                          <input type="text"  className="form-control"
                          name="answer1"  placeholder="Cevap .."
                          value={answer1} onChange={(e)=>{ setAnswer1(e.target.value);  }} />                       
                  </div>

                  <hr />

                  <div className="form-group">
                          <label htmlFor="answer2"> Cevap 2 </label>
                          <input type="text"  className="form-control"
                          name="answer2"  placeholder="Cevap .."
                          value={answer2} onChange={(e)=>{ setAnswer2(e.target.value);  }} />                       
                  </div>

                  <hr />
                  

                  <div className="form-group">
                          <label htmlFor="answer3"> Cevap 3 </label>
                          <input type="text"  className="form-control"
                          name="answer3"  placeholder="Cevap .."
                          value={answer3} onChange={(e)=>{ setAnswer3(e.target.value);  }} />                       
                  </div>

                  <hr />

                  <div className="form-group">
                          <label htmlFor="answer4"> Cevap 4 </label>
                          <input type="text"  className="form-control"
                          name="answer4"  placeholder="Cevap .."
                          value={answer4} onChange={(e)=>{ setAnswer4(e.target.value);  }} />                       
                  </div>

                  <hr />
                  
                  
                  <Button variant="outlined" color="primary" style={{ marginTop:"40px",backgroundColor:"cadetblue", color:"white" }} onClick={()=>{   addData(); }} > Kaydet</Button>

                  <hr />
                    

                </form>
               </DialogContent>
             </Dialog>

        </div>
    
  )
}

export default Index;

