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
        <div className='widgetControl'  style={{ backgroundColor:props.status==true ? "green": "red"}} >
            <div className="widgetControlTop">
               <p className="checkValue" style={{ color:"black" }} >{props.status==true? "Açık": "Kapalı"}</p>
               <div onClick={()=> {{props.setStatus(!props.status); props.onClick();}}} className={props.status==true ? "checkType active" : "checkType"}></div>
            </div>
            <div className="widgetControlBottom" onClick={()=> {{props.setStatus(!props.status); props.onClick();}}} >
                <div className="widgetControlBottomIcon"> {props.icon} </div>
                <h1 className="widgetControlBottomH1" style={{ color:props.colorTitle ? props.colorTitle: "black", fontSize: props.fontSizeTitle ? props.fontSizeTitle : "16px", fontWeight:props.fontWeightTitle ? props.fontWeightTitle : "700" }} > {props.title} </h1>
                <div className="widgetControlOnlineStatus" style={{ color:"black", fontSize: props.fontSizeStatus ? props.fontSizeStatus : "16px", fontWeight:props.fontWeightStatus ? props.fontWeightStatus : "700" }} > {props.onlineStatus == true ? "Online": "Offline"}</div>
            </div>
               
        </div>
     
  )
}

export default Index;
