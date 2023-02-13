import "./index.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

//! icon
import NoteIcon from '@material-ui/icons/Note';


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
}

export const Index =(props: any) => {  //console.log("proops:",props);
  

  return (
        <div className='widgetCardChart' style={{backgroundColor: props.backgroundColor ? props.backgroundColor : "#F1F1F1" }} >
          <div className="widgetCardChartContainer ">
           <div className="widgetCardChartTop">
              <div className="widgetCardChartTopTitle">
                 <div className="widgetCardChartTopIconBox" style={{ backgroundColor:props.WidgetBoxColor ? props.WidgetBoxColor :  '#0052C', width: props.WidgetBoxWidth ? props.WidgetBoxWidth : "48px", height: props.WidgetBoxHeight ? props.WidgetBoxHeight : "48px" }} > {props.icon ? props.icon : <NoteIcon style={{ fontSize: "35px", color: "#fff" }} />} </div>
                 <div className="widgetCardChartTopTitleBox">
                    <p className="widgetCardChartTopLeftTitle" style={{ color: props.colorTitle ? props.colorTitle :"#344563", fontSize: props.fontSizeTitle ? props.fontSizeTitle :"14px", fontWeight: props.fontWeightTitle ? props.fontWeightTitle : "400" }} >{props.title ? props.title : "Title"} </p>
                    <h5 className="widgetCardChartTopLeftContent" style={{ color: props.colorValue ? props.colorValue :"#344563", fontSize: props.fontSizeValue ? props.fontSizeValue :"14px", fontWeight: props.fontWeightValue ? props.fontWeightValue : "400", marginTop:props.marginTopValue ? props.marginTopValue : "-14px" }} >{props.value ? props.value : "Content"} </h5>
                 </div>
              </div>
              <div className="widgetCardChartTopBox">
                  <span className="WidgetProgressBarValue " style={{color: props.colorProgressBarText ? props.colorProgressBarText : "#344563"}} > {props.progressBarValue ? (props.progressBarValue/props.progressBarMaxValue)*100 : "60"} %</span>
                  <div className="ProgressBarValueBackColor"  ><span style={{
                     display: "block",
                     height: "8px",
                     position: "absolute",
                     background: colorChoose((props.progressBarValue/props.progressBarMaxValue)*100),           
                     transition: "width 0.2s",
                     width: (8+ (props.progressBarValue/props.progressBarMaxValue)*100)+"%",
                     borderRadius: "0 50px 50px 0"
                     }}  ></span>
                  </div>
              </div>
              
           </div>
           <div className="widgetCardChartBottom">
              <LineChart width={1030} height={240}   data={props.JsonData} style={{ marginLeft:"-35px", cursor:"pointer", transition:"all 0.5s ease", msTransition:"all 0.5s ease" }} >                    
                  <XAxis dataKey="name"  strokeOpacity="0" opacity={0.4} />
                  <YAxis dataKey="pv"  strokeOpacity="0" opacity={0.4} />
                  <Tooltip />
                  <CartesianGrid horizontal={false}  vertical={true}  strokeDasharray="5 5" strokeWidth={"1px"}  />
                  <Line
                     type="monotone"
                     dataKey="pv"
                     stroke={props.chartLineColor ? props.chartLineColor : '#0052CC'}
                     strokeWidth="5px"
                     activeDot={{r: 4}}
                  />                  
               </LineChart>
           </div>
          </div>
        </div>
     
  )
}

export default Index;
