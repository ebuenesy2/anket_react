import "./index.css"

//! icon
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

export const Index =(props: any) => {  //console.log("widgetFileTimeLine Props:",props);

return ( 
   <>
      <div className='widgetFileTimeLine' style={{ backgroundColor: props.backgroundColor ? props.backgroundColor : "#43B37A" }} >
         <div className="widgetFileTimeLineContainer">
            <div className="widgetFileTimeLineTitle" style={{ color: props.colorTitle ? props.colorTitle : "black", fontSize: props.fontSizeTitle ? props.fontSizeTitle : "16px", fontWeight:props.fontWeightTitle ? props.fontWeightTitle : "700"  }} > {props.title ? props.title : "Title"} </div>
               <div className="widgetFileTimeLineDetails">

                  {Array(props.JsonData.length).fill(0).map((el, i) => 
                     <div className="widgetFileTimeLineBox" >
                        <div className="widgetFileTimeLineHeader">
                           <div className="widgetFileTimeLineHeaderBox"></div>
                           <div className="widgetFileTimeLineHeaderTitle"  style={{ color: props.JsonDataColorTitle ? props.JsonDataColorTitle : "black", fontSize: props.JsonDataFontSizeTitle ? props.JsonDataFontSizeTitle : "16px", fontWeight:props.JsonDataFontWeightTitle ? props.JsonDataFontWeightTitle : "700"  }} > {props.JsonData[i].time} </div>
                        </div>
                        <div className="widgetFileTimeLineFileBoxesFlex" >
                           <div className="widgetFileTimeLineFileBoxes">

                              {Array(props.JsonData[i].data.length).fill(0).map((elj, j) => (  
                                 j <= 4 ?
                                    <div className="widgetFileTimeLineFileBox" >
                                       <img className="widgetFileTimeLineFile" src={props.JsonData[i].data[j].imgUrl} alt="" />
                                       {props.JsonData[i].data[j].type === "video" ?  <div className="widgetFileTimeLineFileOpacity" > <PlayArrowIcon /> </div>  :
                                       props.JsonData[i].data[j].type === "voice" ?  <div className="widgetFileTimeLineFileOpacity" > <MusicNoteIcon /> </div>  :
                                       j >= 4 ?  <div className="widgetFileTimeLineFileOpacity" > +{props.JsonData[i].data.length - 4} </div>  :
                                       <div></div> }
                                    </div>
                                 :<div></div> 

                           ))}

                           </div>
                           <div className="widgetFileTimeLineFileTitle"  style={{ color: props.JsonDataColorDescrtion ? props.JsonDataColorDescrtion : "black", fontSize: props.JsonDataFontSizeDescrtion ? props.JsonDataFontSizeDescrtion : "16px", fontWeight:props.JsonDataFontWeightDescrtion ? props.JsonDataFontWeightDescrtion : "700"  }} > {props.JsonData[i].description} </div>
                        </div>
                     </div>
                  )}
                  
               </div>
         </div>
      </div>
   </>
     
  )
}

export default Index;
