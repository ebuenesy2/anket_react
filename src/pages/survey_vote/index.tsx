import "./index.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import WidgetDataIstatistics from "../../components/widgetDataIstatistics";
import TableSurveyVote from '../../components/tableSurveyVote';


//! İcon
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';


function Index() {

       const [searchId, setSearchId] = useState(0);

       //! Api State
       const [success, setSuccess] = useState(0);
       const [tableData, setTableData] = useState<any[]>([])
       const [tableCount, setTableCount] = useState(0);
       const [tableVoteCount, setTableVoteCount] = useState(0);
     
     
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
             setTableVoteCount(response.data.voteCount);

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
                            </div>

                            <div className="listContainer"> 
                               <div className="listTitle">  (# {searchId} ) Anket Oy Verenler  </div>
                            
                                                
                              {success === 1 ?
                                <TableSurveyVote data={tableData} pageSize="10" modalOpen={modalOpen} setModalOpen={setModalOpen}  apiGet={apiGet} />
                                :
                                <p>Veri Bekleniyor</p>
                              }
           
            
          
            
                            </div>
                    </div>
               </div>
        </div>
    
  )
}

export default Index;
