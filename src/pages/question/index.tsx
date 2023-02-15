import "./index.css"
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";


//! item
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

//! icon
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";


function Index() {
    
      const [searchId, setSearchId] = useState(0);

       //! Api State
       const [success, setSuccess] = useState(0);
       const [answersData, setAnswersData] = useState<any[]>([])
       const [questionTitle, setQuestionTitle] = useState("");
       const [answerChange, setanswerChange] = useState(null);
       
     
       //! Radio
       function onChangeValue(id:any) { 
           //console.log("id:",id);
           setanswerChange(id);
       };
     
     
       //! Data from API
       useEffect(() => { apiGet(); }, []);

       const apiGet = () => {  
        
          let pathname = window.location.search;
          let Id= pathname.split('?id=');

          const searchIdValue = Id.length == 2 ? Id[1] : 0 ;

          setSearchId(Number(searchIdValue)); //! Search

          //console.log("searchIdValue:",searchIdValue);

         const apiUrl_table=process.env.REACT_APP_API_URL+"/api/survey/"+searchIdValue;
         //console.log("apiUrl_table:",apiUrl_table);
         
         axios.get(apiUrl_table)
              .then(response => {
                
                   //console.log("response:", response.data);
     
               
                   setSuccess(response.data.status); //! Başarılı
               
                   setQuestionTitle(response.data.DB.question); //! Soru
                   setAnswersData(response.data.DB.answers); //! Cevaplar
                   
                   //console.log("answersData:", answersData[0].title);
               
           })
           .catch(error => {  console.log("Api Error:",error.message); });
         
       };   //! Data from API


       //! Voting function
       const postSurvey = () => {
         console.log("answerChange:",answerChange);

          if(answerChange == null) {

               Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Seçim Yapılmadı',
                    showConfirmButton: false,
                    timer: 2000
                  });
          }
          else {

               const apiUrl_table=process.env.REACT_APP_API_URL+"/api/survey_vote/add";
               console.log("apiUrl_table:",apiUrl_table);

               //! Data to be posted
               const NewData = {
                    serverId:0,
                    serverToken:"yildirimdev",
                    voterId: Number(localStorage.getItem('userId')) ,
                    surveyId:searchId,
                    surveyAnswersId: Number(answerChange),
                    created_byToken: localStorage.getItem('userToken')
               }; //! Data to be posted


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

                      
                          //window.location.href ="/survey";
                    
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

       }; //! Voting function
     
  return (
        <div className='question'>
               <Sidebar/>
               <div className="questionHome">
                    <Navbar />
                    <div className="questionContainer">
                         <div className="questionPanel">
                              <div className="questionTitle">
                                   <div className="question"> 
                                        
                                        <div className="questionName">
                                             <p> Soru {searchId} </p>
                                        </div>
                                   </div>
                                   
                              </div>
                              <div className="questionDescription">
                                   <div className="questionDescriptionLeft">  
                                        <div className="questionView">
                                             <div className="questionsHead" > 
                                                  <p style={{ opacity: 1 }} > {questionTitle} </p>
                                             </div>
                                            
                                             <div className="answerBox">
                                                  <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group" >
                                                    <div className="answerDescription"  > 
                                                       <div className="choiceBox" style={{ display:answersData[0]?.title == null ? "none" : "flex" }}> 
                                                            <div className="choice"> <p className="letter"> A </p> </div>
                                                            <div className="choiceAnswer"> <FormControlLabel onChange={() => {onChangeValue(answersData[0]?.id)}} value="a" control={<Radio />} label={answersData[0]?.title} /> </div>
                                                       </div>

                                                       <div className="choiceBox" style={{ display:answersData[1]?.title == null ? "none" : "flex" }}> 
                                                            <div className="choice"> <p className="letter"> B </p> </div>
                                                            <div className="choiceAnswer"> <FormControlLabel onChange={() => {onChangeValue(answersData[1]?.id)}} value="b" control={<Radio />} label={answersData[1]?.title} /> </div>
                                                       </div>

                                                       <div className="choiceBox" style={{ display:answersData[2]?.title == null ? "none" : "flex" }} > 
                                                            <div className="choice"> <p className="letter"> C </p> </div>
                                                            <div className="choiceAnswer"> <FormControlLabel onChange={() => {onChangeValue(answersData[2]?.id)}} value="c" control={<Radio />} label={answersData[2]?.title} /> </div>
                                                       </div>

                                                       <div className="choiceBox" style={{ display:answersData[3]?.title == null ? "none" : "flex" }} > 
                                                            <div className="choice"> <p className="letter"> D </p> </div>
                                                            <div className="choiceAnswer"> <FormControlLabel onChange={() => {onChangeValue(answersData[3]?.id)}} value="d" control={<Radio />} label={answersData[3]?.title} /> </div>
                                                       </div>
                                                  </div>
                                                  </RadioGroup>

                                                  <div className="buttonBox">
                                                       <div className="buttonPre"> <ArrowLeftIcon className="icon" onClick={() => { window.location.href="/survey"; }} /> </div>
                                                       <div className="buttonPre"> <TouchAppIcon className="icon" onClick={() => {postSurvey(); }} /> </div>
                                                       <div className="buttonPre"> <ArrowRightIcon className="icon" onClick={() => { window.location.href="/survey"; } } /> </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                  
                              </div>
                         </div>
                    </div>
               </div>
        </div>
    
  )
}

export default Index;
