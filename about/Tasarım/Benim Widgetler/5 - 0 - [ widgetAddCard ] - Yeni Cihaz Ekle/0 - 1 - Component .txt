import "./index.css"
import AddIcon from '@material-ui/icons/Add';


//! Date
import Moment from 'moment'; //! Date
Moment.locale(Moment.locale()); // Lokasyona göre Zaman alıyor

export const Index =(props: any) => {  //console.log("proops:",props);
  
   //console.log("props:",props);
       
  return (
        <div className='widgetAddCard'>
          <div onClick={()=> {props.onClick()}} className="widgetAddCardContainer">
               <div className="widgetIcon"> <AddIcon style={{ color:"#8392ab", fontSize:"50px", fontWeight:"600"}} /></div>
               <h1 className="widgetText">{props.title}</h1>
          </div>
               
        </div>
     
  )
}

export default Index;
