import "./index.css"



//! Date
import Moment from 'moment'; //! Date
Moment.locale(Moment.locale()); // Lokasyona göre Zaman alıyor

export const Index =(props: any) => {  //console.log("proops:",props);
  
   //console.log("props:",props);
   //console.log("created_at:",props.created_at);
   //console.log("Moment:",Moment(props.created_at).format('L'));
   //console.log("Moment:",Moment(props.created_at).format('LTS'));


    
  return (
        <div className='widgetCardData' style={{ backgroundColor:props.backgroundColor ? props.backgroundColor : "#F1F1F1" }} >
             <div className="widgetContainer ">
                  <div className="widgetBox" style={{ background:props.WidgetBoxColor ? props.WidgetBoxColor : "#F1F1F1" }} > {props.icon}</div>
                  <div className="widgetDetail">
                     <div className="widgetDetailTitle" style={{ color: props.colorTitle ? props.colorTitle : "black", fontSize: props.fontSizeTitle ? props.fontSizeTitle : "16px", fontWeight:props.fontWeightTitle ? props.fontWeightTitle : "700"  }} >{props.title}</div>
                     <div className="widgetDetailContent" style={{ color: props.colorValue ? props.colorValue : "black", fontSize: props.fontSizeValue ? props.fontSizeValue : "16px", fontWeight:props.fontWeightValue ? props.fontWeightValue : "700"  }} >{props.value}</div>
                     <div className="widgetOnlineStatus" style={{ color:props.onlineStatus==true ? "darkgreen": "red", fontSize: props.fontSizeStatus ? props.fontSizeStatus : "16px", fontWeight:props.fontWeightStatus ? props.fontWeightStatus : "700" }}> {props.onlineStatus == true ? "Online": "Offline"}</div>
                  </div>
             </div>
               
        </div>
     
  )
}

export default Index;
