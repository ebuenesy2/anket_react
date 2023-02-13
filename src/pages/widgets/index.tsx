import { useState } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import WidgetInfo from '../../components/widgetsInfo';
import WidgetCardData from '../../components/widgetCardData'; 
import WidgetValue from "../../components/widgetValue";
import WidgetControl from "../../components/widgetControl";
import WidgetAddCard from "../../components/widgetAddCard";
import WidgetCategories from "../../components/widgetCategories";
import WidgetCardDataTimeLine from "../../components/widgetCardDataTimeLine";
import WidgetDataIstatistics from "../../components/widgetDataIstatistics";
import WidgetPost from "../../components/widgetPost";
import WidgetInbox from "../../components/widgetInbox";

import WidgetProgressbar from "../../components/widgetProgressbar";
import WidgetProgressbarCirculer from "../../components/widgetProgressbarCirculer";

import WidgetCardChart from "../../components/widgetCardChart";
import WidgetCardChartMini  from "../../components/widgetCardChartMini";
import "./index.css";

//! icon
import NoteIcon from '@material-ui/icons/Note';
import PersonIcon from '@material-ui/icons/Person';
import TimerIcon from '@material-ui/icons/Timer';

import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import BatteryFullIcon from '@material-ui/icons/BatteryFull'; 
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import WifiIcon from '@material-ui/icons/Wifi';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';


function Index() {

     //! State
     const [ widgetControlStatus , setWidgetControlStatus] = useState(true);
     const [ widgetControlStatus1 , setWidgetControlStatus1] = useState(false);

          
     const JsonData = [
         {
            "title":"Toplam Dosyalar",
            "content":"Sayısı: 1451 / 1 TB 200 GB 150 MB 100 KB",
            "icon": <AttachFileIcon style={{ fontSize:"20px"}}/>,
            "onClick":()=> { alert("Toplam Dosyalar"); },
            "backgroundColor":"rgb(76, 175, 80)"
         },
         {
            "title":"Toplam Fotoğraflar",
            "content":"Sayısı: 14 / 0 TB 20 GB 150 MB 100 KB",
            "icon": <PhotoLibraryIcon style={{ fontSize:"20px"}}/>,
            "onClick":()=> { alert("Toplam Fotoğraflar"); },
            "backgroundColor":"rgb(244, 67, 53)"
          },
          {
            "title":"Toplam Videolar",
            "content":"Sayısı: 14 / 0 TB 20 GB 150 MB 100 KB",
            "icon": <VideoLibraryIcon style={{ fontSize:"20px"}}/>,
            "onClick":()=> { alert("Toplam Videolar"); },
            "backgroundColor":"rgb(26, 115, 232)"
          },
          {
            "title":"Toplam Videolar",
            "content":"Sayısı: 14 / 0 TB 20 GB 150 MB 100 KB",
            "icon": <VideoLibraryIcon style={{ fontSize:"20px"}}/>,
            "onClick":()=> { alert("Toplam Videolar"); },
            "backgroundColor":"rgb(26, 115, 232)"
          },
          {
            "title":"Toplam Videolar",
            "content":"Sayısı: 14 / 0 TB 20 GB 150 MB 100 KB",
            "icon": <VideoLibraryIcon style={{ fontSize:"20px"}}/>,
            "onClick":()=> { alert("Toplam Videolar"); },
            "backgroundColor":"rgb(26, 115, 232)"
          },
          {
            "title":"Toplam Videolar",
            "content":"Sayısı: 14 / 0 TB 20 GB 150 MB 100 KB",
            "icon": <VideoLibraryIcon style={{ fontSize:"20px"}}/>,
            "onClick":()=> { alert("Toplam Videolar"); },
            "backgroundColor":"rgb(26, 115, 232)"
          },
          {
            "title":"Toplam Videolar",
            "content":"Sayısı: 14 / 0 TB 20 GB 150 MB 100 KB",
            "icon": <VideoLibraryIcon style={{ fontSize:"20px"}}/>,
            "onClick":()=> { alert("Toplam Videolar"); },
            "backgroundColor":"rgb(26, 115, 232)"
          }
          
     ];

     //! Sabit Data
      const JsonDataApi = [
         {
            "id":1,
            "table": "user",
            "title": "user_update_successful",
            "description": "Kullanıcı Güncelleme Başarılı",
            "logStatus": "success",
            "created_at": "2022-06-19T18:18:08+03:00"
         },
         {
            "id":2,
            "table": "file",
            "title": "file_add_successful",
            "description": "Dosya Ekleme Başarılıı",
            "logStatus": "success",
            "created_at": "2022-06-30T06:42:19+03:00"
         },
         {
            "id":3,
            "table": "note",
            "title": "note_add_successful",
            "description": "Not Ekleme Başarılı",
            "logStatus": "success",
            "created_at": "2022-06-30T06:43:50+03:00"
         },
         {
            "id":4,
            "table": "time",
            "title": "time_add_successful",
            "description": "Time Ekleme Başarılı",
            "logStatus": "success",
            "created_at": "2022-06-30T06:43:50+03:00"
         },
         {
            "id":5,
            "table": "note",
            "title": "note_add_successful",
            "description": "Not Ekleme Başarılı",
            "logStatus": "success",
            "created_at": "2022-06-30T06:43:50+03:00"
         },
         {
            "id":6,
            "table": "time",
            "title": "time_add_successful",
            "description": "Time Ekleme Başarılı",
            "logStatus": "success",
            "created_at": "2022-06-30T06:43:50+03:00"
         },
         {
            "id":7,
            "table": "file",
            "title": "file_add_successful",
            "description": "Dosya Ekleme Başarılıı",
            "logStatus": "success",
            "created_at": "2022-06-30T06:43:50+03:00"
         }
      ];

      const IconCssJson =[
         {
            "table": "user",
            "icon": <PersonIcon style={{ fontSize:"20px"}}/>,
            "backgroundColor":"rgb(76, 175, 80)",
            "onClick":()=> { alert("Toplam User"); }
         },
         {
            "table": "note",
            "icon": <NoteIcon style={{ fontSize:"20px"}}/>,
            "backgroundColor":"rgb(244, 67, 53)",
            "onClick":()=> { alert("Toplam Note"); }
         },
         {
               "table": "file",
               "icon": <AttachFileIcon style={{ fontSize:"20px"}}/>,
               "backgroundColor":"#FF2F50",
               "onClick":()=> { alert("Toplam File"); }
         },
         {
            "table": "time",
            "icon": <TimerIcon style={{ fontSize:"20px"}}/>,
            "backgroundColor":"#4682B4",
            "onClick":()=> { alert("Toplam Time"); }
         }
      ]

     const ChartJsonData = [
         { name: 'Ocak', pv: 0 },
         { name: 'Şubat', pv:25 },
         { name: 'Mart', pv: 100 },
         { name: 'Nisan', pv:25 },
         { name: 'Mayis', pv: 100 },
         { name: 'Haziran', pv: 25 },
         { name: 'Temmuz', pv: 100 },
         { name: 'Ağustos', pv:25 },
         { name: 'Eylül', pv:100},
         { name: 'Ekim', pv:25 },
         { name: 'Kasim', pv: 50 },
         { name: 'Aralik', pv: 125},
     ];   

     const ChartWeekJsonData = [
       { name: 'Ocak', pv: 0 },
       { name: 'Şubat', pv:25 },
       { name: 'Mart', pv: 100 },
       { name: 'Nisan', pv:25 },
       { name: 'Mayis', pv: 100 },
       { name: 'Haziran', pv: 50 },
       { name: 'Temmuz', pv: 100 },
     ];
    
  return (
        <div className='widgets'>
               <Sidebar/>
               <div className="widgetsHome">
                    <Navbar />
                    <div className="widgetsContainer">
                     <h1> Widget: widgetInfo </h1>
                    <div style={{ display:"flex",gap:"10px"}}>
                            <WidgetInfo userId={"15"}
                                   userAvatar={"./assets/img/1.jpg"}
                                   userStatus={true}
                                   username={"username1"}
                                   nameSurname={"Olga Sukhorukova"}
                                   country={"Turkiye"}
                                   city={"Ankara"}
                                   dateofBirth={"17-03-1998"}
                                   created_at={"2022-06-19T13:56:51+03:00"}
                                   userActive={true}
                                   onlineTime={"22gun/8ay/2yıl 13sa:39dak:44sn:900ms"}
                                   editClick={()=> {alert("editClick")}}
                                   viewClick={()=> {alert("viewClick")}}
                                   deleteClick={()=> {alert("deleteClick")}}
                            />
                                                 
                            <WidgetInfo userId={"657"}
                                   userAvatar={"./assets/img/2.jpg"}
                                   userStatus={false}
                                   username={"username2"}
                                   nameSurname={"Teresa McCall"}
                                   country={"Turkiye"}
                                   city={"Ankara"}
                                   dateofBirth={"17-03-1998"}
                                   created_at={"2022-06-19T13:56:51+03:00"}
                                   userActive={false}
                                   onlineTime={"22gun/8ay/2yıl 13sa:39dak:44sn:900ms"}
                                   editClick={()=> {alert("editClick")}}
                                   viewClick={()=> {alert("viewClick")}}
                                   deleteClick={()=> {alert("deleteClick")}}
                            />   
                     </div>

                     <h1 style={{marginTop:"15px"}}> Widget: widgetCardData </h1>
                     <div style={{ width:"720px", display:"flex", gap:"10px"}}>
                         <div style={{ width:"350px" }}>
                            <WidgetCardData
                                backgroundColor={"#F1F1F1"}
                                WidgetBoxColor={"#0052CC"}
                                icon={<BatteryFullIcon style={{ fontSize:"40px"}} />}
                                          
                                title={"Battery Health"}
                                colorTitle={"#888888"}
                                fontSizeTitle={"16px"}
                                fontWeightTitle={"700"}

                                value={"99 %"}
                                colorValue={"black"}
                                fontSizeValue={"16px"}
                                fontWeightValue={"700"}

                                onlineStatus={true}
                                fontSizeStatus={"14px"}
                                fontWeightStatus={"700"}
                             />
                          </div>
                          <div style={{ width:"350px" }}>
                            <WidgetCardData
                                backgroundColor={"#F1F1F1"}
                                WidgetBoxColor={"#0052CC"}
                                icon={<WbSunnyIcon style={{ fontSize:"40px"}} />}
                                          
                                title={"Aydınlık Seviyesi"}
                                colorTitle={"#888888"}
                                fontSizeTitle={"16px"}
                                fontWeightTitle={"700"}

                                value={"99 %"}
                                colorValue={"black"}
                                fontSizeValue={"16px"}
                                fontWeightValue={"700"}

                                onlineStatus={true}
                                fontSizeStatus={"14px"}
                                fontWeightStatus={"700"}
                             />
                          </div>


                     </div>

                     <h1 style={{marginTop:"15px"}}> Widget: widgetValue </h1>
                     <div style={{ width:"420px", display:"flex", gap:"10px" }}>
                                     
                        <div style={{ width:"200px" }}>
                           <WidgetValue
                              backgroundColor={"#F1F1F1"}
                              
                              value={"21"}
                              colorValue={"red"}
                              fontSizeValue={"44px"}
                              fontWeightValue={"700"}
                              
                              valueKey={"°C"}
                              colorValueKey={"red"}
                              fontSizeValueKey={"18px"}
                              fontWeightValueKey={"700"}

                              title={"Mutfak Odası"}
                              colorTitle={"black"}
                              fontSizeTitle={"16px"}
                              fontWeightTitle={"700"}
                              
                              type={"Sıcaklık"}
                              colorType={"rgb(103, 116, 142)"}
                              fontSizeType={"12px"}
                              fontWeightType={"500"}

                              onlineStatus={true}
                              fontSizeStatus={"14px"}
                              fontWeightStatus={"700"}
                           />
                        </div>
                                                   
                        <div style={{ width:"200px" }}>
                           <WidgetValue
                              backgroundColor={"#F1F1F1"}
                              
                              value={"45"}
                              colorValue={"blue"}
                              fontSizeValue={"44px"}
                              fontWeightValue={"700"}
                              
                              valueKey={"%"}
                              colorValueKey={"blue"}
                              fontSizeValueKey={"18px"}
                              fontWeightValueKey={"700"}

                              title={"Yemek Odası"}
                              colorTitle={"black"}
                              fontSizeTitle={"16px"}
                              fontWeightTitle={"700"}
                              
                              type={"Nem"}
                              colorType={"rgb(103, 116, 142)"}
                              fontSizeType={"12px"}
                              fontWeightType={"500"}

                              onlineStatus={false}
                              fontSizeStatus={"14px"}
                              fontWeightStatus={"700"}
                           />
                        </div>

                     </div>
                 
                     <h1 style={{ marginTop: "15px" }}> Widget: widgetControl </h1>
                     <div style={{ width:"420px", display:"flex", gap:"10px" }}>
                                                        
                          <div style={{ width:"200px" }}>
                              <WidgetControl
                                 title={"Wifi"}
                                 colorTitle={"white"}
                                 fontSizeTitle={"40px"}
                                 fontWeightTitle={"700"}
                                   
                                 icon={<WifiIcon style={{ fontSize:"70px"}}/>}
                                 status={widgetControlStatus1}
                                 setStatus={setWidgetControlStatus1}
                                   
                                 onlineStatus={false}
                                 fontSizeStatus={"14px"}
                                 fontWeightStatus={"700"}
                                   
                                 onClick={()=> {alert("tiklama wifi")}}
                               />
                          </div>

                           <div style={{ width:"200px" }}>
                              <WidgetControl
                                 title={"Lamba"}
                                 colorTitle={"white"}
                                 fontSizeTitle={"40px"}
                                 fontWeightTitle={"700"}
                                   
                                 icon={<EmojiObjectsIcon style={{ fontSize:"70px" }}/>}
                                 status={widgetControlStatus}
                                 setStatus={setWidgetControlStatus}
                                   
                                 onlineStatus={false}
                                 fontSizeStatus={"14px"}
                                 fontWeightStatus={"700"}
                                   
                                 onClick={()=> {alert("tiklama lamba")}}
                               />
                          </div>
                     </div>

                     <h1 style={{marginTop:"25px"}}> Widget: widgetAddCard </h1>
                     <div style={{ width:"200px" }}>
                         <WidgetAddCard 
                            backgroundColor="#F1F1F1"
                            title="Yeni Cihaz"
                            colorTitle={"#8392ab"}
                            fontSizeTitle={"20px"}
                            fontWeightTitle={"700"}
                            onClick={()=> {alert("yeni")}}
                         />
                      </div>
                     
                     <h1 style={{marginTop:"45px"}}> Widget: widgetCategories </h1>
                     <div style={{ width:"450px", display:"flex", gap:"10px" }}>
                            <WidgetCategories 
                              backgroundColor={"#F1F1F1"}
                            
                              title={"Tüm Veriler"}
                              colorTitle={"#344563"}
                              fontSizeTitle={"16px"}
                              fontWeightTitle={"900"}
                    
                              arrowShow={true}
                              JsonData={JsonData}
                              colorBoxTitle={"#344563"}
                              fontSizeBoxTitle={"14px"}
                              fontWeightBoxTitle={"700"}
                              colorBoxDescription={"rgb(123, 128, 154)"}
                              fontSizeBoxDescription={"12px"}
                              fontWeightBoxDescription={"400"}
                              
                            />
                    </div>

                                         
                    <h1 style={{marginTop:"45px"}}> Widget: widgetCardDataTimeLine </h1>
                    <div style={{ width:"450px", display:"flex", gap:"10px" }}>
                       <WidgetCardDataTimeLine 
                            backgroundColor={"#F1F1F1"}
                            colorTitle={"#344563"}
                            title={"Tüm Veriler TimeLine"}
                            fontSizeTitle={"16px"}
                            fontWeightTitle={"700"}
                            status={"positive"}
                            titleDetailDescription={"20%"}
                            fontSizeDetailDescription={"14px"}
                            fontWeightDetailDescription={"400"}

                            titleDetailContent={"Bu ay"}
                            colorDetailContent={"#344563"}
                            fontSizeDetailContent={"15px"}
                            fontWeightDetailContent={"700"}
                            
                            productsData={JsonDataApi}
                            IconCssJson={IconCssJson}
                            colorBoxTitle={"#344563"}
                            fontSizeBoxTitle={"14px"}
                            fontWeightBoxTitle={"700"}
                            colorBoxDescription={"#344563"}
                            fontSizeBoxDescription={"12px"}
                            fontWeightBoxDescription={"400"}
                        />
                    </div>

                     <h1 style={{marginTop:"45px"}}> Widget: widgetDataIstatistics </h1>                                        
                     <div style={{ width:"450px" }}>
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
                     </div>

                     <h1 style={{marginTop:"45px"}}> Widget: widgetPost </h1>    
                     <div style={{ width:"450px" }}>
                        <WidgetPost
                            backgroundColor={"#344563"}
                            postUrl="./assets/img/16.jpg"
                            
                            userId="1"
                            userUrl="Profile?id=1"
                            userImage="./assets/img/1.jpg"
                            userNameSurname="Olga Sukhorukova"
                            colorUserNameSurname="aliceblue"
                            fontSizeUserNameSurname="14px"
                            fontWeightUserNameSurname="900"

                            Time="12 saat önce"
                            colorTime="aliceblue"
                            fontSizeTime="12px"
                            fontWeightTime="400"

                            liked="true"
                            likeOnClick={()=> { alert("beğenildi") } }
                            countLiked="300"
                            colorLike="aliceblue"
                            fontSizeLike="12px"
                            fontWeightLike="400"

                            commentOnClick={()=> { alert("yorum yap") } }
                            countComment="200"
                            colorComment="aliceblue"
                            fontSizeComment="12px"
                            fontWeightComment="400"

                            visibilityOnClick={()=> { alert("Görüntüleyenler") } }
                            countVisibility="100"
                            colorVisibility="aliceblue"
                            fontSizeVisibility="12px"
                            fontWeightVisibility="400"

                            shareOnClick={()=> { alert("paylaş") } }
                            deleteOnClick={()=> { alert("Sil") } }                           
                        />
                     </div>

                     <h1 style={{marginTop:"45px"}}> Widget: widgetInbox </h1>
                     <div style={{ width:"350px" }}> 
                        <WidgetInbox
                           backgroundColor={"#F1F1F1"}
                           onlineStatus={false}

                           userId="1"
                           userUrl="Profile?id=1"
                           userImage="./assets/img/1.jpg"
                           userNameSurname="Olga Sukhorukova"
                           colorUserNameSurname="black"
                           fontSizeUserNameSurname="14px"
                           fontWeightUserNameSurname="900"

                           message="Project has been already"
                           colorMessage="#540A0A"
                           fontSizeMessage="14px"
                           fontWeightMessage="100"

                           time="08:45"
                           colorTime="#540A0A"
                           fontSizeTime="12px"
                           fontWeightTime="400"
                        />
                     </div>

                     <h1 style={{marginTop:"45px"}}> Widget: WidgetProgressbar </h1>
                     <div style={{ display:"flex", gap:"10px", flexDirection:"column"}}>
                        <div style={{ width:"200px" }}> 
                           <WidgetProgressbar 
                              value="70"
                              maxValue="100"
                           />
                        </div>
                        <div style={{ width:"200px" }}> 
                           <WidgetProgressbar 
                              value="80"
                              maxValue="100"
                           />
                        </div>
                     </div>

                     <h1 style={{marginTop:"45px"}}> Widget: widgetProgressbarCirculer </h1>
                     <div style={{ width:"150px" }}> 
                        <WidgetProgressbarCirculer 
                           title="Toplam Yemek Hakları"
                           titleSize={"13px"}
                           titleColor={"rgb(52, 69, 99)"}
                           titleWeight={"300"}
                           thickness={8}
                           percentileIcon={false}
                           /*  backColor={"#0052CC"} */
                           marginTop={"0px"}
                           text={"Kişi"}
                           value={100}
                           maxValue={200}
                           textColor={"#0052CC"}
                           textSize={"25px"}
                           textWeight={"bold"}
                           subTextSize={"11px"}
                           subtextWeight={"bold"}    
                           timer={80}
                           disableAnim={true}
                        />
                     </div>
              
                     <h1 style={{marginTop:"45px"}}> Widget: widgetCardChart </h1>
                     <div style={{ width:"1055px" }}> 
                        <WidgetCardChart
                           backgroundColor={"#F1F1F1"}
                           
                           WidgetBoxColor={"#0052CC"}
                           WidgetBoxWidth={"48px"}
                           WidgetBoxHeight={"48px"}
                           icon={<BatteryFullIcon style={{ fontSize: "35px", color: "#fff" }} />}
         
                           title={"Tüm Veriler"}
                           colorTitle={'#344563'}
                           fontSizeTitle={"14px"}
                           fontWeightTitle={"400"}

                           value={"500"}
                           colorValue={'#344563'}
                           fontSizeValue={"20px"}
                           fontWeightValue={"700"}
                           marginTopValue={"-14px"}
                     
         
                           progressBarValue={Math.ceil(Math.random() * (100 - 5))}
                           progressBarMaxValue={100}
                           colorProgressBarText={'#344563'}
                           //colorProgressBarValue={'0052CC'}
                           
                           chartLineColor={'#0052CC'}
                           JsonData={ChartJsonData}
                        />
                     </div> 
              
                      <h1 style={{marginTop:"45px"}}> Widget: widgetCardChartMini </h1>
                     <div style={{ width:"380px" }}> 
                        <WidgetCardChartMini
                           backgroundColor={"#F1F1F1"}
            
            
                           title={"Yemek Siparişleri"}
                           colorTitle={"#344563"}
                           fontSizeTitle={"14px"}
                           fontWeightTitle={"400"}

                           value={"480"}
                           colorValue={"#344563"}
                           fontSizeValue={"20px"}
                           fontWeightValue={"700"}

                           status={"negative"}
                           titleDetailDescription={"20%"}
                           fontSizeDetailDescription={"14px"}
                           fontWeightDetailDescription={"700"}
                           
                           titleDetailTimeDescription={"Bu Hafta"}
                           colorDetailTimeDescription={"#344563"}
                           fontSizeDetailTimeDescription={"14px"}
                           fontWeightDetailTimeDescription={"700"}
            
                           chartLineColor={"#344563"}
                           JsonData={ChartWeekJsonData}
                        />
                     </div>
              
                    </div>
               </div>
        </div>
    
  )
}

export default Index;
