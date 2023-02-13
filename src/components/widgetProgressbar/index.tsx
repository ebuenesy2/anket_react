import "./index.css"

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
  

  return (
       <>
         <div className="ProgressBarValueBackColor"  ><span style={{
            display: "block",
            height: "8px",
            position: "absolute",
            background: props.color ? "#"+ props.color : colorChoose((props.value/props.maxValue)*100),           
            transition: "width 0.2s",
            width: (8+ (props.value/props.maxValue)*100)+"%",
            borderRadius: "0 50px 50px 0"
            }}  ></span>
          </div>

       </>
     
  )
}

export default Index;
