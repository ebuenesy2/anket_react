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
        <div className='widgetValue' style={{ backgroundColor:props.backgroundColor ? props.backgroundColor : "#F1F1F1" }} >
            <h1 className="widgetValueH1" style={{ color:props.valueColor ? props.valueColor : "brown" }}>
               <span className="widgetValueValue"  style={{ color: props.colorValue ? props.colorValue : "black", fontSize: props.fontSizeValue ? props.fontSizeValue : "16px", fontWeight:props.fontWeightValue ? props.fontWeightValue : "700"  }} > {props.value} </span>
               <span className="widgetValueType" style={{ color: props.colorValueKey ? props.colorValueKey : "black", fontSize: props.fontSizeValueKey ? props.fontSizeValueKey : "16px", fontWeight:props.fontWeightValueKey ? props.fontWeightValueKey : "700"  }} > {props.valueKey} </span>
            </h1>
            <h6 className="widgetValueH6"  style={{ color: props.colorTitle ? props.colorTitle : "black", fontSize: props.fontSizeTitle ? props.fontSizeTitle : "16px", fontWeight:props.fontWeightTitle ? props.fontWeightTitle : "700"  }}  > {props.title }</h6>
            <p className="widgetValuep"  style={{ color: props.colorType ? props.colorType : "black", fontSize: props.fontSizeType ? props.fontSizeType : "16px", fontWeight:props.fontWeightType ? props.fontWeightType : "700"  }} > {props.type}</p>
            <div className="widgetOnlineStatus" style={{ color:props.onlineStatus==true ? "green": "red", fontSize: props.fontSizeStatus ? props.fontSizeStatus : "16px", fontWeight:props.fontWeightStatus ? props.fontWeightStatus : "700" }}> {props.onlineStatus == true ? "Online": "Offline"}</div>
        </div>
     
  )
}

export default Index;
