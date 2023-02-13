import { useEffect } from "react";
import "./index.css";

//! İcons
import MovieIcon from '@material-ui/icons/Movie';


//! Renk Seçimi
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
   else if(perc === 100) {  return '#43B37A'; }
}


export const Index =(props: any) => {  //console.log("proops:",props);
  
  //console.log("props:",props);

  useEffect(() => {
    //console.log("Profile");
  }, [])

    
  return ( 
  <>
      <div className='widgetFileCard'>
        <div className="widgetFileCardContainer">
          <div className="widgetFileCardTop" style={{ backgroundColor: props.widgetBoxColor ? props.widgetBoxColor : "#43B37A", width: props.widgetBoxWidth ? props.widgetBoxWidth : "40px" , height: props.widgetBoxHeight ? props.widgetBoxHeight : "40px" }} > {props.icon ? props.icon : <MovieIcon style={{ fontSize:"30px",color:"#fff"}} /> }  </div>
          <div className="widgetFileCardBottom">
            <div className="widgetFileCardBottomLeft">
                <div className="widgetFileCardBottomLeftTitle"  style={{ color: props.colorTitle ? props.colorTitle : "black", fontSize: props.fontSizeTitle ? props.fontSizeTitle : "16px", fontWeight:props.fontWeightTitle ? props.fontWeightTitle : "700"  }} >{props.title ? props.title : "Title"} </div>   
                <div className="widgetFileCardBottomLeftDescription"  style={{ color: props.colorDescription ? props.colorDescription : "black", fontSize: props.fontSizeDescription ? props.fontSizeDescription : "16px", fontWeight:props.fontWeightDescription ? props.fontWeightDescription : "700"  }} > {props.description ? props.description : "Description"} </div> 
            </div>
            <div className="widgetFileCardBottomRight" style={{ color: props.colorValue ? props.colorValue : "black", fontSize: props.fontSizeValue ? props.fontSizeValue : "16px", fontWeight:props.fontWeightValue ? props.fontWeightValue : "700"  }} > {((props.value/props.maxValue)*100).toFixed(2)} %  </div>
              
          </div>
          <div className="ProgressBarValueBackColor"  ><span style={{
            display: "block",
            height: "8px",
            position: "absolute",
            background: props.color ? "#"+ props.color : colorChoose((props.value/props.maxValue)*100),           
            transition: "width 0.2s",
            width: (4+ (props.value/props.maxValue)*100)+"%",
            borderRadius: "0 50px 50px 0"
            }}  ></span>
          </div>         
        </div>
      </div>
   </>
     
  )
}

export default Index;
