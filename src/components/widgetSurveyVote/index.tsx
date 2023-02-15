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
      <div className='widgetCard'>
        <div className="widgetCardContainer">
        
          <div style={{display:"flex", flexDirection:"column", gap:"10px" }}>
              <div className="widgetFileCardBottom">
                <div className="widgetFileCardBottomLeft">
                    <div className="widgetFileCardBottomLeftTitle"  style={{ color: props.colorQuestion1 ? props.colorQuestion1 : "black", fontSize: props.fontSizeQuestion1 ? props.fontSizeQuestion1 : "16px", fontWeight: props.fontWeightQuestion1 ? props.fontWeightQuestion1 : "700"  }} >{props.question1 ? props.question1 : "Soru1"} </div>   
                </div>
                <div className="widgetFileCardBottomRight" style={{ color: props.colorValue ? props.colorValue : "black", fontSize: props.fontSizeValue ? props.fontSizeValue : "16px", fontWeight:props.fontWeightValue ? props.fontWeightValue : "700"  }} > {((props.valueQuestion1/props.maxValueQuestion1)*100).toFixed(2)} %  </div>
                  
              </div>
              <div className="ProgressBarValueBackColor"  ><span style={{
                display: "block",
                height: "8px",
                position: "absolute",
                background: props.color ? "#"+ props.color : colorChoose((props.valueQuestion1/props.maxValueQuestion1)*100),           
                transition: "width 0.2s",
                width: (4+ (props.valueQuestion1/props.maxValueQuestion1)*100)+"%",
                borderRadius: "0 50px 50px 0"
                }}  ></span>
              </div>  

              <div className="widgetFileCardBottom" style={{display : props.question2 ? "flex" : "none" }}>
                <div className="widgetFileCardBottomLeft">
                    <div className="widgetFileCardBottomLeftTitle"  style={{ color: props.colorQuestion2 ? props.colorQuestion2 : "black", fontSize: props.fontSizeQuestion2 ? props.fontSizeQuestion2 : "16px", fontWeight: props.fontWeightQuestion2 ? props.fontWeightQuestion2 : "700"  }} >{props.question2 ? props.question2 : "Soru1"} </div>   
                </div>
                <div className="widgetFileCardBottomRight" style={{ color: props.colorValue ? props.colorValue : "black", fontSize: props.fontSizeValue ? props.fontSizeValue : "16px", fontWeight:props.fontWeightValue ? props.fontWeightValue : "700"  }} > {((props.valueQuestion2/props.maxValueQuestion2)*100).toFixed(2)} %  </div>
                  
              </div>
              <div className="ProgressBarValueBackColor" style={{display : props.question2 ? "flex" : "none" }} ><span style={{
                display: "block",
                height: "8px",
                position: "absolute",
                background: props.color ? "#"+ props.color : colorChoose((props.valueQuestion2/props.maxValueQuestion2)*100),           
                transition: "width 0.2s",
                width: (4+ (props.valueQuestion2/props.maxValueQuestion2)*100)+"%",
                borderRadius: "0 50px 50px 0"
                }}  ></span>
              </div>         

          </div>

          <div style={{display:"flex", flexDirection:"column", gap:"10px" }}>
              <div className="widgetFileCardBottom" style={{display : props.question3 ? "flex" : "none" }} >
                <div className="widgetFileCardBottomLeft">
                    <div className="widgetFileCardBottomLeftTitle"  style={{ color: props.colorQuestion3 ? props.colorQuestion3 : "black", fontSize: props.fontSizeQuestion3 ? props.fontSizeQuestion3 : "16px", fontWeight: props.fontWeightQuestion3 ? props.fontWeightQuestion3 : "700"  }} >{props.question3 ? props.question3 : "Soru1"} </div>   
                </div>
                <div className="widgetFileCardBottomRight" style={{ color: props.colorValue ? props.colorValue : "black", fontSize: props.fontSizeValue ? props.fontSizeValue : "16px", fontWeight:props.fontWeightValue ? props.fontWeightValue : "700"  }} > {((props.valueQuestion3/props.maxValueQuestion3)*100).toFixed(2)} %  </div>
                  
              </div>
              <div className="ProgressBarValueBackColor" style={{display : props.question3 ? "flex" : "none" }}  ><span style={{
                display: "block",
                height: "8px",
                position: "absolute",
                background: props.color ? "#"+ props.color : colorChoose((props.valueQuestion3/props.maxValueQuestion3)*100),           
                transition: "width 0.2s",
                width: (4+ (props.valueQuestion3/props.maxValueQuestion3)*100)+"%",
                borderRadius: "0 50px 50px 0"
                }}  ></span>
              </div>  

              <div className="widgetFileCardBottom" style={{display : props.question4 ? "flex" : "none" }} >
                <div className="widgetFileCardBottomLeft">
                    <div className="widgetFileCardBottomLeftTitle"  style={{ color: props.colorQuestion4 ? props.colorQuestion4 : "black", fontSize: props.fontSizeQuestion4 ? props.fontSizeQuestion4 : "16px", fontWeight: props.fontWeightQuestion4 ? props.fontWeightQuestion4 : "700"  }} >{props.question4 ? props.question4 : "Soru1"} </div>   
                </div>
                <div className="widgetFileCardBottomRight" style={{ color: props.colorValue ? props.colorValue : "black", fontSize: props.fontSizeValue ? props.fontSizeValue : "16px", fontWeight:props.fontWeightValue ? props.fontWeightValue : "700"  }} > {((props.valueQuestion4/props.maxValueQuestion4)*100).toFixed(2)} %  </div>
                  
              </div>
              <div className="ProgressBarValueBackColor" style={{display : props.question4 ? "flex" : "none" }}  ><span style={{
                display: "block",
                height: "8px",
                position: "absolute",
                background: props.color ? "#"+ props.color : colorChoose((props.valueQuestion4/props.maxValueQuestion4)*100),           
                transition: "width 0.2s",
                width: (4+ (props.valueQuestion4/props.maxValueQuestion4)*100)+"%",
                borderRadius: "0 50px 50px 0"
                }}  ></span>
              </div>  
          </div>

        
          
        </div>
      </div>
   </>
     
  )
}

export default Index;
