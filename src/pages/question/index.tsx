import "./index.css"
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import CircularProgressbar from '../../components/Items/CircularProgressbar';
import Progressbar from '../../components/Items/Progressbar';

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

function onChangeValue(event:any) { 
     console.log("onChangeValue:",event.target.value);
}

function Index() {
    
      const [searchId, setSearchId] = useState(0);

       //! Api State
       const [success, setSuccess] = useState(0);
       const [answersData, setAnswersData] = useState<any[]>([])
       const [questionTitle, setQuestionTitle] = useState("");
       
     
     
       useEffect(() => { apiGet(); }, []);

       const apiGet = () => {  
        
          let pathname = window.location.search;
          let Id= pathname.split('?id=');

          const searchIdValue = Id.length == 2 ? Id[1] : 0 ;

          setSearchId(Number(searchIdValue)); //! Search

          console.log("searchIdValue:",searchIdValue);

         const apiUrl_table=process.env.REACT_APP_API_URL+"/api/survey/"+searchIdValue;
         console.log("apiUrl_table:",apiUrl_table);
         
         axios.get(apiUrl_table)
              .then(response => {
                
                   console.log("response:", response.data);
     
               
                   setSuccess(response.data.status); //! Başarılı
               
                   setQuestionTitle(response.data.DB.question); //! Soru
                   setAnswersData(response.data.DB.answers); //! Cevaplar
                   
                   console.log("answersData:", answersData[0].title);
               
           })
           .catch(error => {  console.log("Api Error:",error.message); });
         
       };
     
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
                                                       <div className="choiceBox"> 
                                                            <div className="choice"> <p className="letter"> A </p> </div>
                                                            <div className="choiceAnswer"> <FormControlLabel onChange={onChangeValue} value="a" control={<Radio />} label={answersData[0]?.title} /> </div>
                                                       </div>

                                                       <div className="choiceBox"> 
                                                            <div className="choice"> <p className="letter"> B </p> </div>
                                                            <div className="choiceAnswer"> <FormControlLabel value="b" onChange={onChangeValue} control={<Radio />} label={answersData[1]?.title} /> </div>
                                                       </div>

                                                       <div className="choiceBox" style={{ display:answersData[2]?.title == null ? "none" : "flex" }} > 
                                                            <div className="choice"> <p className="letter"> C </p> </div>
                                                            <div className="choiceAnswer"> <FormControlLabel value="c" onChange={onChangeValue} control={<Radio />} label={answersData[2]?.title} /> </div>
                                                       </div>

                                                       <div className="choiceBox" style={{ display:answersData[2]?.title == null ? "none" : "flex" }} > 
                                                            <div className="choice"> <p className="letter"> D </p> </div>
                                                            <div className="choiceAnswer"> <FormControlLabel value="d" onChange={onChangeValue} control={<Radio />} label={answersData[3]?.title} /> </div>
                                                       </div>
                                                  </div>
                                                  </RadioGroup>

                                                  <div className="buttonBox">
                                                       <div className="buttonPre"> <ArrowLeftIcon className="icon" /> </div>
                                                       <div className="buttonPre"> <TouchAppIcon className="icon" /> </div>
                                                       <div className="buttonPre"> <ArrowRightIcon className="icon" /> </div>
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
