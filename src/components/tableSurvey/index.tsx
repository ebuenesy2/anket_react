import "./index.css";
import { DataGrid, GridToolbarExport, GridToolbarContainer } from '@material-ui/data-grid';

//! icons
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';
import PanToolIcon from '@material-ui/icons/PanTool';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import Swal from 'sweetalert2';

//! Date
import Moment from 'moment'; //! Date
import { Button, Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import { useState } from "react";
import axios from "axios";
Moment.locale(Moment.locale()); // Lokasyona göre Zaman alıyor


/* Function */
const deleteUser =(id:any) => {
    Swal.fire({
        title: 'Emin misiniz?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Evet Sil',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Hayır'
    }).then((result) => {
        if (result.isConfirmed) {
           
            const apiUrl_table=process.env.REACT_APP_API_URL+"/api/survey/delete/"+id;
            console.log("apiUrl_table:",apiUrl_table);

            //! Data to be posted
            const NewData = {
                 serverToken:"yildirimdev",
                 deleted_byToken: localStorage.getItem('userToken')
            }; //! Data to be posted


            console.log("NewData:",NewData);

            
            axios.post(apiUrl_table,NewData)
            .then(response => {
                 
                
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

                      window.location.reload();
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
        }
    });
}

const vieweUser =(id:any) => { window.location.href="/survey/vote?id="+id; }

const editAnswer =(id:any) => { window.location.href="/question?id="+id; }



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



export const Index =(props: any) => {
  //console.log("props:",props);

  const [success, setSuccess] = useState(0); //! Success

  const [questionState, setQuestionState] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");

  //! Api State
  const [modalEdit, setModalEdit] = useState(false);
  const [editToken, setEditToken] = useState<any[]>([])
 
   
  //! Verileri Kayıt Etme
  const addData = () => {
    
    if (questionState == "") {  alert("Soru Eksik"); }
    else if (answer1 == "") {  alert("En az bir cevap yazılmalıdır"); }
     else {

        const answers = [
          {
            id:1,
            title: answer1 == '' ? null : answer1
          },
          {
            id:2,
            title: answer2 == '' ? null : answer2
          },
          {
            id:3,
            title: answer3 == '' ? null : answer3
          },
          {
            id:4,
            title: answer4 == '' ? null : answer4
          }
        ]
          

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
          
          console.log("NewData:",NewData);

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

  //! Data display
  const editData = (id:any) => {

    
    const apiUrl_table=process.env.REACT_APP_API_URL+"/api/survey/"+id;
    console.log("apiUrl_table:",apiUrl_table);
    
    axios.get(apiUrl_table)
      .then(response => {

        //! State
        
        setEditToken(response.data.DB.token);
       
        console.log("Data:",response.data);
      
        //! Edit Modal Open
        if(response.data.status == 1) {  

          setModalEdit(true); //! Open
          
          //! saves data in state
          setQuestionState(response.data.DB.question);
          setAnswer1(response.data.DB.answers[0]?.title);
          // setAnswer2(response.data.DB.answers[1]?.title);
          // setAnswer3(response.data.DB.answers[2]?.title );
          // setAnswer4(response.data.DB.answers[3]?.title);

          console.log("answers",response.data.DB.answers);
          console.log("answer3",response.data.DB.answers[0]?.title);
          
        }
        else {
          
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Veri Hatası',
            showConfirmButton: false,
            timer: 2000
          });

        }

        
          
      })
      .catch(error => {  console.log("Api Error:",error.message); 
    
        
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'İşleminiz Hatalı',
          showConfirmButton: false,
          timer: 2000
        });
      });

  }
     
  //! Verileri Kayıt Etme
  const editPostData = () => {
    
   if (questionState == "") {  alert("Soru Eksik"); }
   else if (answer1 == "") {  alert("En az bir cevap yazılmalıdır"); }
   else {

        const answers = [
          {
            id:1,
            title: answer1 == '' ? null : answer1
          },
          {
            id:2,
            title: answer2 == '' ? null : answer2
          },
          {
            id:3,
            title: answer3 == '' ? null : answer3
          },
          {
            id:4,
            title: answer4 == '' ? null : answer4
          }
        ]
        
       const apiUrl_table=process.env.REACT_APP_API_URL+"/api/survey/update";
       console.log("apiUrl_table:",apiUrl_table);
       
         //Eklenen Veriler
         const NewData={
           serverToken:"yildirimdev",
           token:editToken,
           question:questionState,
           answers: answers,
           updated_byToken:"updated_byToken"
         }
    
         console.log("NewData:",NewData);

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
               
                setModalEdit(false); //! Close
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

  
//! Actions Kullanma
function getActions(params:any) {
  return <div style={{ display:"flex", gap:"5px",cursor:"pointer" }}>
     <div style={{ color:"red" }} onClick={()=> { deleteUser( params.row.id) }} >   <DeleteIcon />  </div>
     <div style={{ color:"blue" }} onClick={()=> { vieweUser( params.row.id) }} >   <VisibilityIcon />  </div>
     <div style={{ color:"black" }} onClick={()=> { editData( params.row.id) }} >   <EditIcon />  </div>
     <div style={{ color:"green" }} onClick={()=> { editAnswer( params.row.id) }} >   <QuestionAnswerIcon />  </div>
   
  </div>;
}

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

             
             <Dialog open={modalEdit} >
               <DialogTitle style={{ display:"flex", justifyContent:"center", width:"600px"}} >
                <div style={{display:"flex", justifyContent:"space-between", width:"500px"}} >
                  <p>Anket Güncelle</p>
                  <ClearIcon onClick={()=>{setModalEdit(false);}}  style={{cursor:"pointer",color:"red",border:"1px solid"}}  />
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
                  
                  
                  <Button variant="outlined" color="primary" style={{ marginTop:"40px",backgroundColor:"cadetblue", color:"white" }} onClick={()=>{   editPostData(); }} > Güncelle</Button>

                  <hr />
                    

                </form>
               </DialogContent>
             </Dialog>

        </div>
    
  )
}

export default Index;



