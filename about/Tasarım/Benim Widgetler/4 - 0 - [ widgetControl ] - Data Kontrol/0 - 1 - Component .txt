import "./index.css"

//! Date
import Moment from 'moment'; //! Date
import { useState } from "react";
Moment.locale(Moment.locale()); // Lokasyona göre Zaman alıyor

export const Index =(props: any) => {  //console.log("proops:",props);
  
   //console.log("props:",props);
   //console.log("created_at:",props.created_at);
   //console.log("Moment:",Moment(props.created_at).format('L'));
   //console.log("Moment:",Moment(props.created_at).format('LTS'));


    
  return (
        <div className='widgetControl'>
            <div className="widgetControlTop">
               <p className="checkValue">{props.status==true? "Açık": "Kapalı"}</p>
               <div onClick={()=> {{props.setStatus(!props.status); props.onClick();}}} className={props.status==true ? "checkType active" : "checkType"}></div>
            </div>
            <div className="widgetControlBottom">
                <div className="widgetControlBottomIcon"> {props.icon} </div>
                <h1 className="widgetControlBottomH1"> {props.title} </h1>
                <div className="widgetControlOnlineStatus" style={{ color:props.onlineStatus==true ? "green": "red"}}> {props.onlineStatus == true ? "Online": "Offline"}</div>
            </div>
               
        </div>
     
  )
}

export default Index;
