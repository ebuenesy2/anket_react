import { useEffect } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";

import WidgetToggleButton from "../../components/widgetToggleButton";

import WidgetFileCard from "../../components/widgetFileCard";
import WidgetFileTimeLine from "../../components/widgetFileTimeLine";

import WidgetSurveyVote from "../../components/widgetSurveyVote";
import "./index.css"

//! icon
import ImageIcon from '@material-ui/icons/Image';

function Index() {

  useEffect(() => {
    //console.log("Profile");
  }, [])

  const ToggleButtonJsonData = [
    { id:1, text:"1"},
    { id:2, text:"2"},
    { id:3, text:"3"},
    { id:4, text:"4"},
    { id:5, text:"5"},
    { id:6, text:"6"}
  ];
  
  const FileTimelineJsonData = [
    {
      id: 1, time: "10:10", description: "8 tane resim yüklendi",
      data: [
        { id: 1, imgUrl: "./assets/img/1.jpg", type: "img", url: "./assets/img/1.jpg" },
        { id: 2, imgUrl: "./assets/img/2.jpg", type: "img", url: "./assets/img/2.jpg" },
        { id: 3, imgUrl: "./assets/img/3.jpg", type: "img", url: "./assets/img/3.jpg" },
        { id: 4, imgUrl: "./assets/img/4.jpg", type: "img", url: "./assets/img/4.jpg" },
        { id: 5, imgUrl: "./assets/img/5.jpg", type: "img", url: "./assets/img/5.jpg" },
        { id: 6, imgUrl: "./assets/img/6.jpg", type: "img", url: "./assets/img/6.jpg" },
        { id: 7, imgUrl: "./assets/img/7.jpg", type: "img", url: "./assets/img/7.jpg" },
        { id: 8, imgUrl: "./assets/img/8.jpg", type: "img", url: "./assets/img/8.jpg" }
      ]
    },
    {
      id: 2, time: "12:40", description: "3 tane resim yüklendi",
      data: [
        { id: 1, imgUrl: "./assets/img/10.jpg", type: "img", url: "./assets/img/10.jpg" },
        { id: 2, imgUrl: "./assets/img/12.jpg", type: "img", url: "./assets/img/12.jpg" },
        { id: 3, imgUrl: "./assets/img/13.jpg", type: "img", url: "./assets/img/13.jpg" }
      ]
    },    
    {
      id: 3, time: "15:45", description: "3 tane video yüklendi",
      data: [
        { id: 1, imgUrl: "./assets/img/15.jpg", type: "video", url: "./assets/img/15.jpg" },
        { id: 2, imgUrl: "./assets/img/16.jpg", type: "video", url: "./assets/img/16.jpg" },
        { id: 3, imgUrl: "./assets/img/17.jpg", type: "video", url: "./assets/img/17.jpg" }
      ]
    },
        
    {
      id: 4, time: "19:45", description: "4 tane ses yüklendi",
      data: [
        { id: 1, imgUrl: "./assets/img/18.jpg", type: "voice", url: "./assets/img/18.jpg" },
        { id: 2, imgUrl: "./assets/img/11.jpg", type: "voice", url: "./assets/img/11.jpg" },
        { id: 3, imgUrl: "./assets/img/13.jpg", type: "voice", url: "./assets/img/13.jpg" },
        { id: 4, imgUrl: "./assets/img/14.jpg", type: "voice", url: "./assets/img/14.jpg" }
      ]
    },

  ];
    
  return (
        <div className='widgets2'>
               <Sidebar/>
               <div className="widgets2Home">
                    <Navbar />
                    <div className="widgets2Container">
                       <h1> Widget: widgetToggleButton </h1>
                        <div style={{ width:"380px" }}> 
                          <WidgetToggleButton
                            backgroundColor={"#F1F1F1"}
                            onClick={(index: any) => { /*  alert("tiklama");  */ console.log("index:", index);  }}  
                            JsonData={ToggleButtonJsonData}
                          />
                    </div>
                     
                    <div style={{ marginTop:"20px" }}>
                        <h1> Widget: widgetFileCard </h1>
                        <div style={{ width:"300px" }}> 
                          <WidgetFileCard
                            backgroundColor={"#F1F1F1"}
            
                            widgetBoxColor={"#43B37A"}
                            widgetBoxWidth={"40px"}
                            widgetBoxHeight={"40px"}
                            icon={<ImageIcon style={{ fontSize: "30px", color: "#fff" }} />}
            
                            title={"Videolar"}
                            colorTitle={"#7E817C"}
                            fontSizeTitle={"10px"}
                            fontWeightTitle={"700"}

                            description={"Sayısı: 14 / 0 TB 20 GB 150 MB 100 KB"}
                            colorDescription={"#344563"}
                            fontSizeDescription={"10px"}
                            fontWeightDescription={"700"}
                            
                            colorValue={"#344563"}
                            fontSizeValue={"15px"}
                            fontWeightValue={"900"}
                                            
                            value={"71"}
                            maxValue={"80"}
                          />
                        </div>
                    </div>

                    <div style={{ marginTop:"20px" }}>
                        <h1> Widget: widgetSurveyVote </h1>
                        <div style={{ width:"300px" }}> 
                          <WidgetSurveyVote
                            backgroundColor={"#F1F1F1"}
            
                            question1={"Soru1"}
                            colorQuestion1={"#7E817C"}
                            fontSizeQuestion1={"10px"}
                            fontWeightQuestion1={"700"}
                            valueQuestion1={"71"}
                            maxValueQuestion1={"80"}

                            
                            question2={"Soru2"}
                            colorQuestion2={"#7E817C"}
                            fontSizeQuestion2={"10px"}
                            fontWeightQuestion2={"700"}
                            valueQuestion2={"40"}
                            maxValueQuestion2={"80"}

                            question3={"Soru3"}
                            colorQuestion3={"#7E817C"}
                            fontSizeQuestion3={"10px"}
                            fontWeightQuestion3={"700"}
                            valueQuestion3={"40"}
                            maxValueQuestion3={"80"}

                            question4={"Soru4"}
                            colorQuestion4={"#7E817C"}
                            fontSizeQuestion4={"10px"}
                            fontWeightQuestion4={"700"}
                            valueQuestion4={"40"}
                            maxValueQuestion4={"80"}

                           
                            
                            colorValue={"#344563"}
                            fontSizeValue={"15px"}
                            fontWeightValue={"900"}
                          
                          />
                        </div>
                    </div>
          
                    <div style={{ marginTop:"20px" }}>
                        <h1> Widget: widgetFileTimeLine </h1> 
                        <div style={{ display:"flex", gap:"5px" }}>
                            <div style={{ width:"450px", height:"600px" }}> 
                                <WidgetFileTimeLine
                                  backgroundColor={"#F1F1F1"}                                  
                            
                                  title={"File Timelenes"}
                                  colorTitle={"#344563"}
                                  fontSizeTitle={"20px"}
                                  fontWeightTitle={"700"}

                                  JsonData={FileTimelineJsonData}
                                
                                  JsonDataColorTitle={"#43B37A"}
                                  JsonDataFontSizeTitle={"12px"}
                                  JsonDataFontWeightTitle={"700"}
                                                
                                  JsonDataColorDescrtion={"#344563"}
                                  JsonDataFontSizeDescrtion={"12px"}
                                  JsonDataFontWeightDescrtion={"700"}
                                />
                            </div>
                        </div>
                    </div>
          
                    </div>
               </div>
        </div>
    
  )
}

export default Index;
