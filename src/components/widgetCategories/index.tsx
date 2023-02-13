import "./index.css"
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

export const Index =(props: any) => {  //console.log("proops:",props);

  return (
        <div className='widgetCategories' style={{ backgroundColor: props.backgroundColor ? props.backgroundColor : "#F1F1F1" }}>
          <div className="widgetCategoriesTop" style={{ color: props.colorTitle ? props.colorTitle : "black", fontSize: props.fontSizeTitle ? props.fontSizeTitle : "16px", fontWeight:props.fontWeightTitle ? props.fontWeightTitle : "700"  }} >{props.title}</div>
          <hr/>
          <div className="widgetCategoriesBottom">
            
          {Array(props.JsonData.length).fill(0).map((el, i) => 
            <div className="widgetCategoriesBottomBox">
                <div className="widgetCategoriesBottomBoxLeft">
                    <div className="widgetCategoriesBottomBoxLeftIconBox" style={{ background: props.JsonData[i].backgroundColor ? props.JsonData[i].backgroundColor : "black" }}  > {props.JsonData[i].icon} </div>
                    <div className="widgetCategoriesBottomBoxLeftIconBoxText">
                      <div className="widgetCategoriesBottomBoxLeftIconBoxTextTitle" style={{ color: props.colorBoxTitle ? props.colorBoxTitle : "black", fontSize: props.fontSizeBoxTitle ? props.fontSizeBoxTitle : "16px", fontWeight:props.fontWeightBoxTitle ? props.fontWeightBoxTitle : "700"  }} > {props.JsonData[i].title}</div>
                      <div className="widgetCategoriesBottomBoxLeftIconBoxTextContent" style={{ color: props.colorBoxDescription ? props.colorBoxDescription : "black", fontSize: props.fontSizeBoxDescription ? props.fontSizeBoxDescription : "14px", fontWeight:props.fontWeightBoxDescription ? props.fontWeightBoxDescription : "400"  }}  >{props.JsonData[i].content}</div>
                    </div>
                </div>
                {props.arrowShow === true && <div onClick={props.JsonData[i].onClick} className="widgetCategoriesBottomBoxRight"> <ArrowRightIcon style={{ fontSize: "42px" }} /> </div> }
            </div>
         )}

          </div>
               
        </div>
     
  )
}

export default Index;
