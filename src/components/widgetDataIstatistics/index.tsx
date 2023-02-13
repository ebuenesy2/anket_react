import "./index.css"
import EjectIcon from '@material-ui/icons/Eject';





export const Index =(props: any) => {  //console.log("proops:",props);
  
 


    
  return (
        <div className='widgetDataIstatistics'  style={{ backgroundColor: props.backgroundColor ? props.backgroundColor : "azure"  }}>
            <div className="left" > 
                <span className="title" style={{ color: props.colorTitle ? props.colorTitle : "black", fontSize: props.fontSizeTitle ? props.fontSizeTitle : "16px", fontWeight:props.fontWeightTitle ? props.fontWeightTitle : "700"  }}  > {props.title ? props.title : "Title"} </span>
                <span className="counter"  style={{ color: props.colorValue ? props.colorValue : "black", fontSize: props.fontSizeValue ? props.fontSizeValue : "16px", fontWeight:props.fontWeightValue ? props.fontWeightValue : "700"  }}   >  {props.value ? props.value : "00"} </span>
                <div className="onlinePanel">
                  <span className="onlineCountTitle" style={{ color: props.colorDescription ? props.colorDescription : "black", fontSize: props.fontSizeDescription ? props.fontSizeDescription : "16px", fontWeight:props.fontWeightDescription ? props.fontWeightDescription : "700"  }}   >  {props.titleDescription ? props.titleDescription : "TitleDescription"} </span>
                    <span className="onlineCount"  style={{ color: props.colorDescriptionValue ? props.colorDescriptionValue : "black", fontSize: props.fontSizeDescriptionValue ? props.fontSizeDescriptionValue : "16px", fontWeight:props.fontWeightDescriptionValue ? props.fontWeightDescriptionValue : "700"  }}   >  {props.titleDescriptionValue ? props.titleDescriptionValue : "00"}  </span>
                </div>
                <a className="link" href={props.LinkUrl ? props.LinkUrl : "LinkUrl"} style={{ color: props.colorLink ? props.colorLink : "black", fontSize: props.fontSizeLink ? props.fontSizeLink : "16px", fontWeight:props.fontWeightLink ? props.fontWeightLink : "700"  }} > {props.LinkName ? props.LinkName : "LinkName"}  </a>
            </div>
            <div className="right"> 
                <div className="widgetDataIstatisticsStatus">
                  <div className="widgetDataIstatisticsStatusArrow">                      
                   <EjectIcon className={props.status==="negative" ? "widgetDataIstatisticsStatusStatus negative" : "widgetDataIstatisticsStatusStatus"} /> 
                   <span  className={props.status==="negative" ? "widgetDataIstatisticsStatusDescription negative" : "widgetDataIstatisticsStatusDescription"}  style={{ fontSize: props.fontSizeDetailDescription ? props.fontSizeDetailDescription : "16px", fontWeight:props.fontWeightDetailDescription ? props.fontWeightDetailDescription : "700"  }} > {props.titleDetailDescription ? props.titleDetailDescription : "0%"} </span>
                </div>
                <span className="widgetDataIstatisticsStatusContent" style={{ color: props.colorDetailContent ? props.colorDetailContent : "black", fontSize: props.fontSizeDetailContent ? props.fontSizeDetailContent : "16px", fontWeight:props.fontWeightDetailContent ? props.fontWeightDetailContent : "700"  }} > {props.titleDetailContent ? props.titleDetailContent : "This Month"} </span>
               </div>

                 <div className="iconBox"  style={{ backgroundColor: props.WidgetBoxColor ? props.WidgetBoxColor : "azure"  }} >  {props.icon} </div>
            </div>
        </div>
    
  )
}

export default Index;
