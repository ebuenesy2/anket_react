import "./index.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import WidgetDataIstatistics from "../../components/widgetDataIstatistics";
import TableSurveyVote from '../../components/tableSurveyVote';


//! İcon
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import WidgetSurveyVote from "../../components/widgetSurveyVote";


function Index() {

       const [searchId, setSearchId] = useState(0);

       //! Api State
       const [success, setSuccess] = useState(0);
       const [tableData, setTableData] = useState<any[]>([])
       const [tableCount, setTableCount] = useState(0);
       const [tableVoteCount, setTableVoteCount] = useState(0);

       const [answer1, setAnswer1] = useState(null);
       const [answer1Count, setAnswer1Count] = useState(0);

       const [answer2, setAnswer2] = useState(null);
       const [answer2Count, setAnswer2Count] = useState(0);

       const [answer3, setAnswer3] = useState(null);
       const [answer3Count, setAnswer3Count] = useState(0);


       const [answer4, setAnswer4] = useState(null);
       const [answer4Count, setAnswer4Count] = useState(0);
     
     
       useEffect(() => { apiGet(); }, []);

       const apiGet = () => {  
        
          let pathname = window.location.search;
          let Id= pathname.split('?id=');

          const searchIdValue = Id.length == 2 ? Id[1] : 0 ;

          setSearchId(Number(searchIdValue)); //! Search

          console.log("searchIdValue:",searchIdValue);

         const apiUrl_table=process.env.REACT_APP_API_URL+"/api/survey_vote/find_surveyId/"+searchIdValue;
         console.log("apiUrl_table:",apiUrl_table);
         
         axios.get(apiUrl_table)
           .then(response => {
     
             //! State
             
             setTableData(response.data.DB);
             setTableCount(response.data.size);
             setTableVoteCount(response.data.answersCount);

             setAnswer1(response.data.answers[0].title);
             setAnswer1Count(response.data.answers[0].count);

             setAnswer2(response.data.answers[1].title);
             setAnswer2Count(response.data.answers[1].count);

             setAnswer3(response.data.answers[2].title);
             setAnswer3Count(response.data.answers[2].count);

             setAnswer4(response.data.answers[3].title);
             setAnswer4Count(response.data.answers[3].count);

             console.log("Data:",response.data);
        
             setSuccess(response.data.status); //! Başarılı
               
           })
           .catch(error => {  console.log("Api Error:",error.message); });
         
       };

      
       
       //! Modal Açma
       const [modalOpen, setModalOpen] = useState(false);

    
  return (
        <div className='users'>
               <Sidebar/>
               <div className="usersHome">
                    <Navbar />
                    <div className="usersContainer">
                            <div className="Widgets"> 
                                                     
                              <div style={{ width:"450px", display:"flex", gap:"10px" }}>
                                    <WidgetDataIstatistics
                                      backgroundColor={"#F1F1F1"}                            
                                    
                                      title={"Anket Oy Sayısı"}
                                      colorTitle={"#344563"}
                                      fontSizeTitle={"16px"}
                                      fontWeightTitle={"700"}

                                      value={tableCount}
                                      colorValue={"black"}
                                      fontSizeValue={"28px"}
                                      fontWeightValue={"400"}

                                      titleDescription={"Oylanan Anket Sayısı: "}
                                      colorDescription={"rgb(160, 160, 160)"}
                                      fontSizeDescription={"12px"}
                                      fontWeightDescription={"700"}

                                      titleDescriptionValue={tableVoteCount}
                                      colorDescriptionValue={"rgb(160, 160, 160)"}
                                      fontSizeDescriptionValue={"12px"}
                                      fontWeightDescriptionValue={"700"}

                                    

                                      status={"positive"}
                                      titleDetailDescription={"xx%"}
                                      fontSizeDetailDescription={"14px"}
                                      fontWeightDetailDescription={"400"}

                                      titleDetailContent={"Bu ay"}
                                      colorDetailContent={"#344563"}
                                      fontSizeDetailContent={"15px"}
                                      fontWeightDetailContent={"700"}

                                      WidgetBoxColor={"#FEDDC7"}
                                      icon={<QuestionAnswerIcon style={{ fontSize:"35px",color:"black"}} />}
                                    />
                              </div>

                              <div style={{ width:"300px" }}> 
                                <WidgetSurveyVote
                                  backgroundColor={"#F1F1F1"}
                  
                                  
                                  question1={answer1}
                                  colorQuestion1={"#7E817C"}
                                  fontSizeQuestion1={"10px"}
                                  fontWeightQuestion1={"700"}
                                  valueQuestion1={answer1Count}
                                  maxValueQuestion1={tableVoteCount}

                                  
                                  question2={answer2}
                                  colorQuestion2={"#7E817C"}
                                  fontSizeQuestion2={"10px"}
                                  fontWeightQuestion2={"700"}
                                  valueQuestion2={answer2Count}
                                  maxValueQuestion2={tableVoteCount}

                                  question3={answer3}
                                  colorQuestion3={"#7E817C"}
                                  fontSizeQuestion3={"10px"}
                                  fontWeightQuestion3={"700"}
                                  valueQuestion3={answer3Count}
                                  maxValueQuestion3={tableVoteCount}

                                  question4={answer4}
                                  colorQuestion4={"#7E817C"}
                                  fontSizeQuestion4={"10px"}
                                  fontWeightQuestion4={"700"}
                                  valueQuestion4={answer4Count}
                                  maxValueQuestion4={tableVoteCount}

                                
                                  
                                  colorValue={"#344563"}
                                  fontSizeValue={"15px"}
                                  fontWeightValue={"600"}
                                />
                              </div>
                            </div>

                            <div className="listContainer"> 
                               <div className="listTitle">  (# {searchId} ) Anket Oy Verenler  </div>
                            
                                                
                              {success === 1 ?
                                <TableSurveyVote data={tableData} pageSize="10" modalOpen={modalOpen} setModalOpen={setModalOpen}  apiGet={apiGet} />
                                :
                                <div style={{ border:"1px solid", padding:"10px",  marginTop:"50px" }}>
                                    Veri Bekliyor
                                </div>
                              }
           
            
          
            
                            </div>
                    </div>
               </div>
        </div>
    
  )
}

export default Index;
