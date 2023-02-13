import "./index.css"
import AddIcon from '@material-ui/icons/Add';


//! Date
import Moment from 'moment'; //! Date
Moment.locale(Moment.locale()); // Lokasyona göre Zaman alıyor

export const Index =(props: any) => {  //console.log("proops:",props);
  
   //console.log("props:",props);
       
  return (
        <div className='widgetAddCard' style={{ backgroundColor:props.backgroundColor ? props.backgroundColor : "#F1F1F1" }} >
          <div onClick={()=> {props.onClick()}} className="widgetAddCardContainer">
               <div className="widgetIcon"> <AddIcon style={{ color:"#8392ab", fontSize:"50px", fontWeight:"600"}} /></div>
               <h1 className="widgetText" style={{ color: props.colorTitle ? props.colorTitle : "black", fontSize: props.fontSizeTitle ? props.fontSizeTitle : "16px", fontWeight:props.fontWeightTitle ? props.fontWeightTitle : "700"  }} >{props.title}</h1>
          </div>
               
        </div>
     
  )
}

export default Index;
