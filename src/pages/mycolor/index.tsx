import { useEffect } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import WidgetColorBox from "../../components/widgetColorBox";
import "./index.css"

import { standartColor, myFavoriteColor, otherColor } from "../../shared/Enum/Standart";

function Index() {

       

  useEffect(() => {
         console.log("myFavoriteColor:", myFavoriteColor);
  }, [])


  
  const colorBoxJsonData = [
    { title:"Standart - Active", color:standartColor.active },
    { title:"Standart - Hover", color: standartColor.hover },
    { title:"Standart - Passive", color:standartColor.passive },
    { title:"Standart - Negative", color:standartColor.negative },
    { title: "Standart - Positive", color: standartColor.positive },
    { title: "Standart - Background", color: standartColor.background },
    
    { title: "myFavoriteColor - Blue", color: myFavoriteColor.blue },
    { title: "myFavoriteColor - Coral", color: myFavoriteColor.coral },
    { title: "myFavoriteColor - Green", color: myFavoriteColor.green },
    { title: "myFavoriteColor - Grey", color: myFavoriteColor.grey },
    { title: "myFavoriteColor - Orange", color: myFavoriteColor.orange },
    { title: "myFavoriteColor - Red", color: myFavoriteColor.red },
    { title: "myFavoriteColor - Steelblue", color: myFavoriteColor.steelblue },
    
    { title: "otherColor - Active1", color: otherColor.active1 },
    { title: "otherColor - Green1", color: otherColor.green1 },
    { title: "otherColor - Green2", color: otherColor.green2 },
    { title: "otherColor - Pink1", color: otherColor.pink1 },
    { title: "otherColor - Nice1", color: otherColor.nice1 },
    
    { title: "1", color: "#A86296" },
    
  ];
  return (
        <div className='myColor'>
               <Sidebar/>
               <div className="myColorHome">
                    <Navbar />
                     <div className="myColorContainer">
                        <div className="myColorColorBox">
                                                               
                            {colorBoxJsonData.map((el, i) => (
                              <div style={{ width:"210px" }}> 
                                <WidgetColorBox
                                  title={colorBoxJsonData[i].title}
                                  color= {colorBoxJsonData[i].color}
                                />
                              </div>
                            ))}
                                     
                        </div>
                     </div>
               </div>
        </div>
    
  )
}

export default Index;
