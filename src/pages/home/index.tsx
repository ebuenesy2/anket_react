import "./index.css";
import Sidebar from '../../components/sidebar';
import Navbar from '../../components/navbar';

import WidgetDataIstatistics from "../../components/widgetDataIstatistics";
import Chart from '../../components/charts';

//! icon
import FaceIcon from '@material-ui/icons/Face';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import AlarmIcon from '@material-ui/icons/Alarm';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import BlurCircularIcon from '@material-ui/icons/BlurCircular';
import { useEffect, useState } from "react";
import axios from "axios";



function Index() {
  
  
  useEffect(() => { 
    
    const userLoginStatus = localStorage.getItem("userLogin") || "false";
    if (userLoginStatus != "true") { window.location.href = "/login"; }
   
   }, []);

    
    const [tableData, setTableData] = useState<any[]>([])
    const [userCount, setUserCount] = useState(0);
    const [surveyCount, setSurveyCount] = useState(0);
    const [surveyVoteCount, setSurveyVoteCount] = useState(0);

    const apiGet = () => {  
      const apiUrl_table=process.env.REACT_APP_API_URL+"/dashboard";
      console.log("apiUrl_table:",apiUrl_table);
      
      axios.get(apiUrl_table)
        .then(response => {
  
          //! State
          
          setTableData(response.data.DB);
          setUserCount(response.data.user.length);
          setSurveyCount(response.data.survey.length);
          setSurveyVoteCount(response.data.survey_vote.length);

          
          console.log("Data:",response.data);
         
            
        })
        .catch(error => {  console.log("Api Error:",error.message); });
      
    };

    useEffect(() => { apiGet(); }, []);
    
  return (
        <div className='home'>
              <Sidebar/>
              <div className="homeContainer"> 
                  <Navbar />
                  <div className="Widgets"> 
                                            
                    <div style={{ width:"1900px", display:"flex", gap:"10px"}}>
                          <WidgetDataIstatistics
                            backgroundColor={"#F1F1F1"}                            
                           
                            title={"Kullanıcılar"}
                            colorTitle={"#344563"}
                            fontSizeTitle={"16px"}
                            fontWeightTitle={"700"}

                            value={userCount}
                            colorValue={"black"}
                            fontSizeValue={"28px"}
                            fontWeightValue={"400"}

                            titleDescription={"xxx: "}
                            colorDescription={"rgb(160, 160, 160)"}
                            fontSizeDescription={"12px"}
                            fontWeightDescription={"700"}

                            titleDescriptionValue={"xx"}
                            colorDescriptionValue={"rgb(160, 160, 160)"}
                            fontSizeDescriptionValue={"12px"}
                            fontWeightDescriptionValue={"700"}

                            LinkName={"Kullanıcı Listesi"}
                            LinkUrl={"/users"}
                            colorLink={"blue"}
                            fontSizeLink={"12px"}
                            fontWeightLink={"700"}

                            status={"positive"}
                            titleDetailDescription={"xx%"}
                            fontSizeDetailDescription={"14px"}
                            fontWeightDetailDescription={"400"}

                            titleDetailContent={"Bu ay"}
                            colorDetailContent={"#344563"}
                            fontSizeDetailContent={"15px"}
                            fontWeightDetailContent={"700"}

                            WidgetBoxColor={"#FEDDC7"}
                            icon={<PersonOutlineOutlinedIcon style={{ fontSize:"35px",color:"black"}} />}
                          />

                           <WidgetDataIstatistics
                            backgroundColor={"#F1F1F1"}                            
                           
                            title={"Anket"}
                            colorTitle={"#344563"}
                            fontSizeTitle={"16px"}
                            fontWeightTitle={"700"}

                            value={surveyCount}
                            colorValue={"black"}
                            fontSizeValue={"28px"}
                            fontWeightValue={"400"}

                            titleDescription={"xx "}
                            colorDescription={"rgb(160, 160, 160)"}
                            fontSizeDescription={"12px"}
                            fontWeightDescription={"700"}

                            titleDescriptionValue={"xx"}
                            colorDescriptionValue={"rgb(160, 160, 160)"}
                            fontSizeDescriptionValue={"12px"}
                            fontWeightDescriptionValue={"700"}

                            LinkName={"Anket Listesi"}
                            LinkUrl={"/survey"}
                            colorLink={"blue"}
                            fontSizeLink={"12px"}
                            fontWeightLink={"700"}

                            status={"negative"}
                            titleDetailDescription={"10%"}
                            fontSizeDetailDescription={"14px"}
                            fontWeightDetailDescription={"400"}

                            titleDetailContent={"Bu ay"}
                            colorDetailContent={"#344563"}
                            fontSizeDetailContent={"15px"}
                            fontWeightDetailContent={"700"}

                            WidgetBoxColor={"#65d2e4"}
                            icon={<FaceIcon style={{ fontSize:"35px",color:"black"}} />}
                          />
                                                    
                          <WidgetDataIstatistics
                            backgroundColor={"#F1F1F1"}                            
                           
                            title={"Oylanan Anket Sayısı"}
                            colorTitle={"#344563"}
                            fontSizeTitle={"16px"}
                            fontWeightTitle={"700"}

                            value={surveyVoteCount}
                            colorValue={"black"}
                            fontSizeValue={"28px"}
                            fontWeightValue={"400"}

                            titleDescription={"xx"}
                            colorDescription={"rgb(160, 160, 160)"}
                            fontSizeDescription={"12px"}
                            fontWeightDescription={"700"}

                            titleDescriptionValue={"xx"}
                            colorDescriptionValue={"rgb(160, 160, 160)"}
                            fontSizeDescriptionValue={"12px"}
                            fontWeightDescriptionValue={"700"}

                            LinkName={"Detay(#1)"}
                            LinkUrl={"/survey/vote?id=1"}
                            colorLink={"blue"}
                            fontSizeLink={"12px"}
                            fontWeightLink={"700"}

                            status={"positive"}
                            titleDetailDescription={"65"}
                            fontSizeDetailDescription={"14px"}
                            fontWeightDetailDescription={"400"}

                            titleDetailContent={"Bu ay"}
                            colorDetailContent={"#344563"}
                            fontSizeDetailContent={"15px"}
                            fontWeightDetailContent={"700"}

                            WidgetBoxColor={"#dab6fc"}
                            icon={<ImportContactsIcon style={{ fontSize:"30px",color:"black"}} />}
                          />
                                    
                    </div>
                        
                  </div>
                

               
                  
              </div>
        </div>
    
  )
}

export default Index;
