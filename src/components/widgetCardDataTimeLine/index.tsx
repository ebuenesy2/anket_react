import "./index.css";
import EjectIcon from '@material-ui/icons/Eject';



export const Index =(props: any) => { //console.log("widgetCardDataTimeLineProps:",props); 
     
  return (
        <div className='widgetCardDataTimeLine' style={{ backgroundColor: props.backgroundColor ? props.backgroundColor : "azure"  }} >
           <div className="widgetCardDataTimeLineContainer">
              <div className="widgetCardDataTimeLineBox">
                 <div className="widgetCardDataTimeLineDetailTitle" style={{ color: props.colorTitle ? props.colorTitle : "black", fontSize: props.fontSizeTitle ? props.fontSizeTitle : "16px", fontWeight:props.fontWeightTitle ? props.fontWeightTitle : "700"  }} > {props.title ? props.title : "Title"} </div>
               <div className="widgetCardDataTimeLineDetailBox">                 
                   <EjectIcon className={props.status==="negative" ? "widgetCardDataTimeLineDetailBoxStatus negative" : "widgetCardDataTimeLineDetailBoxStatus"} /> 
                  <span  className={props.status==="negative" ? "widgetCardDataTimeLineDetailBoxDescription negative" : "widgetCardDataTimeLineDetailBoxDescription"}  style={{ fontSize: props.fontSizeDetailDescription ? props.fontSizeDetailDescription : "16px", fontWeight:props.fontWeightDetailDescription ? props.fontWeightDetailDescription : "700"  }} > {props.titleDetailDescription ? props.titleDetailDescription : "0%"} </span>
                  <span className="widgetCardDataTimeLineDetailBoxContent" style={{ color: props.colorDetailContent ? props.colorDetailContent : "black", fontSize: props.fontSizeDetailContent ? props.fontSizeDetailContent : "16px", fontWeight:props.fontWeightDetailContent ? props.fontWeightDetailContent : "700"  }} > {props.titleDetailContent ? props.titleDetailContent : "This Month"} </span>
               </div>

               <div className="widgetCardDataTimeLineBottom" >

                  {
                     props.productsData.map((jsondat : any)=> {
                          return (
                              <>
                                 <div className="widgetCardDataTimeLineBottomBox">
                                    <div className="widgetCardDataTimeLineBottomIconBox" style={{ background: props.IconCssJson.find((el:any) => el.table === jsondat?.table)?.backgroundColor }} > {props.IconCssJson.find((el:any) => el.table === jsondat?.table)?.icon} </div>
                                 <div className="widgetCardDataTimeLineBottomInfoBox">
                                    <div className="widgetCardDataTimeLineBottomInfoBoxTitle" style={{ color: props.colorBoxTitle ? props.colorBoxTitle : "black", fontSize: props.fontSizeBoxTitle ? props.fontSizeBoxTitle : "16px", fontWeight:props.fontWeightBoxTitle ? props.fontWeightBoxTitle : "700"  }} > {jsondat?.description} </div>
                                    <div className="widgetCardDataTimeLineBottomInfoBoxDescription" style={{ color: props.colorBoxDescription ? props.colorBoxDescription : "black", fontSize: props.fontSizeBoxDescription ? props.fontSizeBoxDescription : "14px", fontWeight:props.fontWeightBoxDescription ? props.fontWeightBoxDescription : "400"  }} > {jsondat?.created_at} </div>
                                 </div>                   

                                 </div>
                              </>
                          )
                     })
                  }

               </div>

              </div>
           </div>
        </div>
     
  )
}

export default Index;
