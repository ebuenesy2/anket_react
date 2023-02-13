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
        <div className='widgetValue'>
            <h1 className="widgetValueH1" style={{ color:props.valueColor ? props.valueColor : "brown" }}>
               <span className="widgetValueValue"> {props.value} </span>
               <span className="widgetValueType"> {props.valueKey} </span>
            </h1>
            <h6 className="widgetValueH6"> {props.title }</h6>
            <p className="widgetValuep"> {props.type}</p>
            <div className="widgetOnlineStatus" style={{ color:props.onlineStatus==true ? "green": "red"}}> {props.onlineStatus == true ? "Online": "Offline"}</div>
        </div>
     
  )
}

export default Index;
