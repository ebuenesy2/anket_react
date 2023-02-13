import { useEffect, useState } from "react";
import "./index.css"



//! Date
import Moment from 'moment'; //! Date
Moment.locale(Moment.locale()); // Lokasyona göre Zaman alıyor

export const Index =(props: any) => {  //console.log("proops:",props);
  
   console.log("props:",props);
   console.log("created_at:",props.created_at);
   console.log("Moment:",Moment(props.created_at).format('L'));
   console.log("Moment:", Moment(props.created_at).format('LTS'));
   

  useEffect(() => {
    console.log("Profile");
  }, [])

   //! State
   const [ widgetControlStatus , setWidgetControlStatus] = useState(10);
   const [ widgetControlStatus1 , setWidgetControlStatus1] = useState(false);


    
  return ( 
  <>
        <div className='sbtwidgetInfo'>
           <p> {props.title} </p>
           <p> {widgetControlStatus} </p>
        </div>
   </>
     
  )
}

export default Index;
