import "./index.css"
import ArrowRightIcon from '@material-ui/icons/ArrowRight';


//! Date
import Moment from 'moment'; //! Date
Moment.locale(Moment.locale()); // Lokasyona göre Zaman alıyor

export const Index =(props: any) => {  //console.log("proops:",props);
  
   console.log("props:",props);
   //console.log("created_at:",props.created_at);
   //console.log("Moment:",Moment(props.created_at).format('L'));
   //console.log("Moment:",Moment(props.created_at).format('LTS'));


    
  return (
        <div className='widgetCategories'>
          <div className="widgetCategoriesTop">{props.title}</div>
          <hr/>
          <div className="widgetCategoriesBottom">
            
          {Array(props.JsonData.length).fill(0).map((el, i) => 
            <div className="widgetCategoriesBottomBox">
                 <div className="widgetCategoriesBottomBoxLeft">
                      <div className="widgetCategoriesBottomBoxLeftIconBox"> {props.JsonData[i].icon} </div>
                      <div className="widgetCategoriesBottomBoxLeftIconBoxText">
                        <div className="widgetCategoriesBottomBoxLeftIconBoxTextTitle">{props.JsonData[i].title}</div>
                        <div className="widgetCategoriesBottomBoxLeftIconBoxTextContent">{props.JsonData[i].content}</div>
                     </div>
                 </div>
                 <div onClick={props.JsonData[i].onClick} className="widgetCategoriesBottomBoxRight"> 
                    <ArrowRightIcon style={{ fontSize:"42px"}} />
                 </div>
            </div>
         )}

          </div>
               
        </div>
     
  )
}

export default Index;
