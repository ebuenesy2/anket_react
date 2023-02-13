import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export const Index =(props: any) => {
 //console.log("proops:",props);

  function colorChoose(perc :any) { //! Renk Ayarlama
         
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
     
    
    
    // 
  }

    
  return (
       <>
         <div style={{ position:"relative", display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
          <div style={{ position:"relative", display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
            <CircularProgressbar 
                    value={ ((props.value/ props.maxValue)*100)}   /* ProgressBar Değeri */
                  
                    strokeWidth={props.thickness ? props.thickness : 5} /* Kalınlık */
                    
                    styles={buildStyles({
                        pathColor: props.backColor ? props.backColor: colorChoose(((props.value/ props.maxValue)*100)),  /* ProgressBar Rengi */
                        textSize: props.textSize ? props.textSize : "16px",
                    })}
            />

          
              <div style={{ position:"absolute", display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
                  <div  style={{ display:"flex", gap:"5px"}} > 
                      <p style={{ marginTop:"auto", marginBottom:"auto",  color: props.textColor ? props.textColor : '#344563', fontSize: props.textSize ? props.textSize :  "12px", fontWeight: props.textWeight ? props.textWeight : "normal"}}> {props.value} </p> 
                      <p style={{ marginTop:"auto", marginBottom:"auto",  fontSize: props.textSize ? props.textSize :  "12px", fontWeight: props.textWeight ? props.textWeight : "normal" }}>  {props.percentileIcon && "%" }  </p>  
                  </div>
                  <div style={{fontWeight:props.subtextWeight ? props.subtextWeight : "normal"  ,fontSize: props.subTextSize ? props.subTextSize : "16px", textTransform:"uppercase" , marginTop: props.subMarginTop ? props.subMarginTop : "0px"}} > {props.text} </div>
              </div>
            

          </div>
           <p style={{ color: props.titleColor ? props.titleColor: "#344563", fontWeight:props.titleWeight ? props.titleWeight : "normal", fontSize: props.titleSize ? props.titleSize : "12px" , marginTop:"10px"}}> {props.title} </p>
        </div>

            
        
       </>
  )
}

export default Index;


//   text={props.value} /* içine yazıyor */