
function colorChoose(perc :any) { //! Renk Ayarlama
         
     if(perc > -1 && perc < 10) {  return '#C64E13'; }
     else if(perc >= 10 && perc<20) {  return '#ff1f78'; }
     else if(perc >= 20 && perc<30) {  return '#E18223'; }
     else if(perc >= 30 && perc<40) {  return '#EF8F07'; }
     else if(perc >= 40 && perc<50) {  return '#EAA800'; }
     else if(perc >= 50 && perc<60) {  return '#F3C73C'; }
     else if(perc >= 60 && perc<70) {  return '#F8D801'; }
     else if(perc >= 70 && perc<80) {  return '#6a1b9a'; }
     else if(perc >= 80 && perc<90) {  return '#91F33C'; }
     else if(perc >= 90 && perc<100) {  return '#51DE96'; }
     else if(perc===100) {  return '#00695c'; }
  }



const ProgressBar = (props:any) => {
    const percValue = (props.value/props.maxValue)*100;
    
  
    return (
      <div style={{
            height: 20,
            width: '100%',
            backgroundColor: "#e0e0de",
            borderRadius: 50,
        }}>
        <div style={{ 
              height: '100%',
              width:  `${percValue}%`,
              backgroundColor: props.bgcolor ? props.bgcolor : colorChoose(percValue),
              borderRadius: 'inherit',
              textAlign: 'right'
        }}>
          <span style={{
               padding: 5,
               color: 'white',
               fontWeight: 'bold'
          }}>{props.percView && `${percValue}%`} </span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;