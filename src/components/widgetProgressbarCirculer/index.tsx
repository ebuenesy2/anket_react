import { useEffect,useState } from "react";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./index.css"



function perc2color(perc:any) { //! Otamatik Renk Seçme
   var r, g, b = 0;
   if(perc < 50) {
     r = 255;
     g = Math.round(5.1 * perc);
   }
   else {
     g = 255;
     r = Math.round(510 - 5.10 * perc);
   }
 //C64E13
 //43B37A
 
   var h = r * 0x10000 + g * 0x100 + b * 0x1;
   return '#' + ('000000' + h.toString(16)).slice(-6);
}
 
function colorChoose(perc:any) { //! Renk Ayarlama
        
    if(perc > -1 && perc < 10) {  return '#C64E13'; }
    else if(perc >= 10 && perc<20) {  return '#DD6100'; }
    else if(perc >= 20 && perc<30) {  return '#E18223'; }
    else if(perc >= 30 && perc<40) {  return '#EF8F07'; }
    else if(perc >= 40 && perc<50) {  return '#EAA800'; }
    else if(perc >= 50 && perc<60) {  return '#F3C73C'; }
    else if(perc >= 60 && perc<70) {  return '#F8D801'; }
    else if(perc >= 70 && perc<80) {  return '#DAEF1B'; }
    else if(perc >= 80 && perc<90) {  return '#91F33C'; }
    else if(perc >= 90 && perc<100) {  return '#51DE96'; }
    else if(perc==100) {  return '#43B37A'; }
    
   
   
   // 
}

export const Index =(props: any) => {  //console.log("proops:",props);
  
   //console.log("props:",props);
   
   //! State
   const [ valueState , setValueState] = useState(0);

   useEffect(() => {

       let valueCount = 0;

      var interval = setInterval(() => { //! Start
         //console.log("1sn çalışıyor");
         valueCount= valueCount + 1;
         setValueState(valueCount);

         if(valueCount == props.value) {
            clearInterval(interval); //! Stop
            //console.log("timer durdu");
         }
      },props.timer ? props.timer : 100)

   }, [])

   
  return (
         <div style={{ position:"relative", display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
         <div style={{ position:"relative", display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
            <CircularProgressbar
                     value={ props.disableAnim==true ?  (( valueState/ props.maxValue)*100) :  (( props.value/ props.maxValue)*100) }   /* ProgressBar Değeri */
               
                     strokeWidth={ props.thickness ? props.thickness : 5} /* Kalınlık */
                     
                     styles={buildStyles({
                        pathColor: props.backColor ? props.backColor: colorChoose((( (props.disableAnim==true ? valueState : props.value)/ props.maxValue)*100)),  /* ProgressBar Rengi */
                        textSize: props.textSize ? props.textSize : "16px",
                     })}
            />

         
            <div style={{ position:"absolute", display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
               <div  style={{ display:"flex", justifyContent:"center"}} > 
                     <p style={{ marginTop:"auto", marginBottom:"auto",  color: props.textColor ? props.textColor : '#344563', fontSize: props.textSize ? props.textSize :  "12px", fontWeight: props.textWeight ? props.textWeight : "normal"}}> {props.disableAnim==true ? valueState : props.value} </p> 
                     <p style={{ marginTop:"auto", marginBottom:"auto",  fontSize: props.textSize ? props.textSize :  "12px", fontWeight: props.textWeight ? props.textWeight : "normal" }}>  {props.percentileIcon && "%" }  </p>  
               </div>
               <div style={{fontWeight: props.subtextWeight ? props.subtextWeight : "normal"  ,fontSize: props.subTextSize ? props.subTextSize : "16px", textTransform:"uppercase" , marginTop: props.marginTop ? props.marginTop : "0px"}} > {props.text} </div>
            </div>
            

         </div>
            <p style={{ color:  props.titleColor ? props.titleColor: "#344563", fontWeight: props.titleWeight ? props.titleWeight : "normal", fontSize: props.titleSize ? props.titleSize : "12px" , marginTop:"10px"}}> {props.title} </p>
         </div>
         
  )
}

export default Index;
