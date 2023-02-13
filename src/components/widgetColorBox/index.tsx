import "./index.css"

export const Index =(props: any) => {  //console.log("proops:",props);
  
   //console.log("props:",props);

  return ( 
  <>
        <div className='widgetColorBox'>
          <div className="widgetColorBoxContainer">
               <div className="widgetColorBoxLeft" style={{  backgroundColor: props.color ? props.color : "#344563"  }}></div>
               <div className="widgetColorBoxRight">
                     <div className="widgetColorBoxRightTitle"> {props.title ? props.title : "Title"} </div>
                     <div className="widgetColorBoxRightCode"> {props.color ? props.color : "#344563"} </div>
              </div> 
          </div>
        </div>
   </>
     
  )
}

export default Index;
