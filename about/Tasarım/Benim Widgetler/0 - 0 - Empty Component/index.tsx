import "./index.css"



//! Date
import Moment from 'moment'; //! Date
Moment.locale(Moment.locale()); // Lokasyona göre Zaman alıyor

export const Index =(props: any) => {  //console.log("proops:",props);
  
   console.log("props:",props);
   console.log("created_at:",props.created_at);
   console.log("Moment:",Moment(props.created_at).format('L'));
   console.log("Moment:",Moment(props.created_at).format('LTS'));


    
  return (
        <div className='widgetInfo'>
           <p> {props.title} </p>
               
        </div>
     
  )
}

export default Index;
