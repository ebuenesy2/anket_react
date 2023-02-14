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
import { useEffect } from "react";



function Index() {
  
  
  useEffect(() => { 
    
    const userLoginStatus = localStorage.getItem("userLogin") || "false";
    if (userLoginStatus != "true") { window.location.href = "/login"; }
   
   }, []);
    
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

                            value={"19"}
                            colorValue={"black"}
                            fontSizeValue={"28px"}
                            fontWeightValue={"400"}

                            titleDescription={"Online Sayısı: "}
                            colorDescription={"rgb(160, 160, 160)"}
                            fontSizeDescription={"12px"}
                            fontWeightDescription={"700"}

                            titleDescriptionValue={"121"}
                            colorDescriptionValue={"rgb(160, 160, 160)"}
                            fontSizeDescriptionValue={"12px"}
                            fontWeightDescriptionValue={"700"}

                            LinkName={"Link Name"}
                            LinkUrl={"/linkUrl"}
                            colorLink={"blue"}
                            fontSizeLink={"12px"}
                            fontWeightLink={"700"}

                            status={"positive"}
                            titleDetailDescription={"20%"}
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
                           
                            title={"Öğretmenler"}
                            colorTitle={"#344563"}
                            fontSizeTitle={"16px"}
                            fontWeightTitle={"700"}

                            value={"300"}
                            colorValue={"black"}
                            fontSizeValue={"28px"}
                            fontWeightValue={"400"}

                            titleDescription={"Online Sayısı: "}
                            colorDescription={"rgb(160, 160, 160)"}
                            fontSizeDescription={"12px"}
                            fontWeightDescription={"700"}

                            titleDescriptionValue={"121"}
                            colorDescriptionValue={"rgb(160, 160, 160)"}
                            fontSizeDescriptionValue={"12px"}
                            fontWeightDescriptionValue={"700"}

                            LinkName={"Link Name"}
                            LinkUrl={"/linkUrl"}
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
                           
                            title={"Reklam Verenler"}
                            colorTitle={"#344563"}
                            fontSizeTitle={"16px"}
                            fontWeightTitle={"700"}

                            value={"350"}
                            colorValue={"black"}
                            fontSizeValue={"28px"}
                            fontWeightValue={"400"}

                            titleDescription={"Online Sayısı: "}
                            colorDescription={"rgb(160, 160, 160)"}
                            fontSizeDescription={"12px"}
                            fontWeightDescription={"700"}

                            titleDescriptionValue={"121"}
                            colorDescriptionValue={"rgb(160, 160, 160)"}
                            fontSizeDescriptionValue={"12px"}
                            fontWeightDescriptionValue={"700"}

                            LinkName={"Link Name"}
                            LinkUrl={"/linkUrl"}
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
                                                    
                          <WidgetDataIstatistics
                            backgroundColor={"#F1F1F1"}                            
                           
                            title={"Sponsorlar"}
                            colorTitle={"#344563"}
                            fontSizeTitle={"16px"}
                            fontWeightTitle={"700"}

                            value={"450"}
                            colorValue={"black"}
                            fontSizeValue={"28px"}
                            fontWeightValue={"400"}

                            titleDescription={"Online Sayısı: "}
                            colorDescription={"rgb(160, 160, 160)"}
                            fontSizeDescription={"12px"}
                            fontWeightDescription={"700"}

                            titleDescriptionValue={"121"}
                            colorDescriptionValue={"rgb(160, 160, 160)"}
                            fontSizeDescriptionValue={"12px"}
                            fontWeightDescriptionValue={"700"}

                            LinkName={"Link Name"}
                            LinkUrl={"/linkUrl"}
                            colorLink={"blue"}
                            fontSizeLink={"12px"}
                            fontWeightLink={"700"}

                            status={"positive"}
                            titleDetailDescription={"1000"}
                            fontSizeDetailDescription={"14px"}
                            fontWeightDetailDescription={"400"}

                            titleDetailContent={"Bu ay"}
                            colorDetailContent={"#344563"}
                            fontSizeDetailContent={"15px"}
                            fontWeightDetailContent={"700"}

                            WidgetBoxColor={"darkseagreen"}
                            icon={<BlurCircularIcon style={{ fontSize:"35px",color:"black"}} />}
                          />
                                                    
                          <WidgetDataIstatistics
                            backgroundColor={"#F1F1F1"}                            
                           
                            title={"Toplam Yapılan Ders Saati"}
                            colorTitle={"#344563"}
                            fontSizeTitle={"12px"}
                            fontWeightTitle={"700"}

                            value={"922"}
                            colorValue={"black"}
                            fontSizeValue={"28px"}
                            fontWeightValue={"400"}

                            titleDescription={"Online Sayısı: "}
                            colorDescription={"rgb(160, 160, 160)"}
                            fontSizeDescription={"12px"}
                            fontWeightDescription={"700"}

                            titleDescriptionValue={"121"}
                            colorDescriptionValue={"rgb(160, 160, 160)"}
                            fontSizeDescriptionValue={"12px"}
                            fontWeightDescriptionValue={"700"}

                            LinkName={"Link Name"}
                            LinkUrl={"/linkUrl"}
                            colorLink={"blue"}
                            fontSizeLink={"12px"}
                            fontWeightLink={"700"}

                            status={"positive"}
                            titleDetailDescription={"20%"}
                            fontSizeDetailDescription={"14px"}
                            fontWeightDetailDescription={"400"}

                            titleDetailContent={"Bu ay"}
                            colorDetailContent={"#344563"}
                            fontSizeDetailContent={"15px"}
                            fontWeightDetailContent={"700"}

                            WidgetBoxColor={"#d0e1fd"}
                            icon={<AlarmIcon style={{ fontSize:"35px",color:"black"}} />}
                          />
                    </div>
                        
                  </div>
                  <div className="Charts"> 
                      
                        <Chart />
                  </div>

               
                  
              </div>
        </div>
    
  )
}

export default Index;
