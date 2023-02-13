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
        <div className='widgetCardData'>
             <div className="widgetContainer ">
                  <div className="widgetBox"> {props.icon}</div>
                  <div className="widgetDetail">
                     <div className="widgetDetailTitle">{props.title}</div>
                     <div className="widgetDetailContent">{props.value}</div>
                     <div className="widgetOnlineStatus" style={{ color:props.onlineStatus==true ? "green": "red"}}> {props.onlineStatus == true ? "Online": "Offline"}</div>
                  </div>
             </div>
               
        </div>
     
  )
}

export default Index;
