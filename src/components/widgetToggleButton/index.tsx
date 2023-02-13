import { useEffect, useState } from "react";
import "./index.css"

//! icon
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

export const Index =(props: any) => {  //console.log("proops:",props);

   //! State
   const [ count, setCount] = useState(0);
   const [value, setValue] = useState(1);
   
   //console.log("widgetToggleButtonProps:",props);
   //console.log("JsonData:",props.JsonData);
 
  
   useEffect(() => {
      setCount(props.JsonData.length);

      let width = document.getElementById("1")?.offsetWidth;
      let height = document.getElementById("1")?.offsetHeight;
      let left = document.getElementById("1")?.offsetLeft;
     
      //! CSS Variable Değeri Güncelliyor
      document.documentElement.style.setProperty('--width',  Number(width).toString()+'px');
      document.documentElement.style.setProperty('--height', Number(height).toString()+'px');
      document.documentElement.style.setProperty('--left', Number(left).toString() + 'px');
   }, [])

   const calculateValue = (id: any) => {
      let width = document.getElementById(id)?.offsetWidth;
      let height = document.getElementById(id)?.offsetHeight;
      let left = document.getElementById(id)?.offsetLeft;
     
      //! CSS Variable Değeri Güncelliyor
      document.documentElement.style.setProperty('--width',  Number(width).toString()+'px');
      document.documentElement.style.setProperty('--height', Number(height).toString()+'px');
      document.documentElement.style.setProperty('--left', Number(left).toString()+'px' );
    }
    
   return (
   <>
      <div className='widgetToggleButton'  style={{ backgroundColor: props.backgroundColor ? props.backgroundColor : "#F1F1F1" }} >
         <div className="widgetToggleButtonSelect"  >
               <div className={value === 1 ? "widgetToggleButtonArrow passive" : "widgetToggleButtonArrow"} onClick={() => { if (value !== 1) { let valueCalculator = value - 1; setValue(valueCalculator); calculateValue(valueCalculator); props.onClick(valueCalculator); } }}    > <ArrowLeftIcon  style={{ fontSize:"30px" }} /> </div>
              
                 {Array(props.JsonData.length).fill(0).map((el, i) => 
                    <div id={props.JsonData[i].id} className={value === props.JsonData[i].id ? "widgetToggleButtonDescription active" : "widgetToggleButtonDescription passive"} onClick={() => { setValue(props.JsonData[i].id); calculateValue(props.JsonData[i].id); props.onClick(props.JsonData[i].id); }}  > {props.JsonData[i].id} </div>
                  )}
               
               <div className={value === count ? "widgetToggleButtonArrow passive" : "widgetToggleButtonArrow"} onClick={() => { if (value !== count) { let valueCalculator = value + 1; setValue(valueCalculator); calculateValue(valueCalculator); props.onClick(valueCalculator);  }  }}  > <ArrowRightIcon  style={{ fontSize:"30px"}} /> </div>
         </div>
      </div>


       

   </>
  )
}

export default Index;
