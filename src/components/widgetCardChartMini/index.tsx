import "./index.css"
import EjectIcon from '@material-ui/icons/Eject';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

export const Index =(props: any) => {  //console.log("proops:",props);
  


    
  return (
        <div className='widgetCardChartMini'  style={{background:props.backgroundColor ? props.backgroundColor : "#F1F1F1"  }} >
          <div className="widgetCardChartMiniContainer" >
           <div className="widgetCardChartMiniContainerTop" >
              <div className="widgetCardChartMiniContainerTopTitle" style={{ color: props.colorTitle ? props.colorTitle :"#344563", fontSize:props.fontSizeTitle ? props.fontSizeTitle : "0", fontWeight: props.fontWeightTitle ? props.fontWeightTitle : "400"  }}  > {props.title ? props.title : "Title"} </div>
              <div className="widgetCardChartMiniContainerTopValue">
                 <span className="widgetCardChartMiniContainerTopCount" style={{ color: props.colorValue ? props.colorValue :"#344563", fontSize:props.fontSizeValue ? props.fontSizeValue : "0", fontWeight: props.fontWeightValue ? props.fontWeightValue : "400"  }} > {props.value ? props.value :"00"} </span>
                 <EjectIcon className={props.status==="negative" ? "widgetCardDataTimeLineDetailBoxStatus negative" : "widgetCardDataTimeLineDetailBoxStatus"} /> 
                 <span className="widgetCardChartMiniContainerTopDescription" style={{ color: props.status === "negative" ? "darkred" :"darkgreen", fontSize:props.fontSizeDetailDescription ? props.fontSizeDetailDescription : "0", fontWeight: props.fontWeightDetailDescription ? props.fontWeightDetailDescription : "400"  }}  > {props.titleDetailDescription ? props.titleDetailDescription: "0%"} </span>
                 <span className="widgetCardChartMiniContainerTopTimeDescription" style={{ color: props.colorDetailTimeDescription ? props.colorDetailTimeDescription :"#344563", fontSize:props.fontSizeDetailTimeDescription ? props.fontSizeDetailTimeDescription : "0", fontWeight: props.fontWeightDetailTimeDescription ? props.fontWeightDetailTimeDescription : "400"  }} > {props.titleDetailTimeDescription ? props.titleDetailTimeDescription : "Zaman"}  </span>
              </div>
             
           </div>

           <div className="widgetCardChartMiniContainerBottom" >
              
                <LineChart width={440} height={125}   data={props.JsonData} style={{ marginTop:"40px" ,marginLeft:"-81px", cursor:"pointer"}} >
                
                  <XAxis dataKey="name"  strokeOpacity="0" tick={false} opacity="0" />
                  <YAxis dataKey="pv"  strokeOpacity="0" tick={false}  />
                  <Tooltip cursor={false} />
                  
                  <Line
                      type="monotone"
                      dataKey="pv"
                      stroke={props.chartLineColor ? props.chartLineColor :"#344563"}
                      strokeWidth="3px"
                      dot={false}
                  />
                  
                
               </LineChart>
           </div>
           
           
           </div>               
        </div>
     
  )
}

export default Index;
