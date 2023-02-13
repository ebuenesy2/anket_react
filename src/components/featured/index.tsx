import "./index.css"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CircularProgressbar from '../../components/Items/CircularProgressbar';

export const Index =(props: any) => {
  //console.log("proops:",props);

    
  return (
        <div className='featured'>
            <div className="top">
               <h1 className="title"> Total Revenue</h1>
               <MoreVertIcon className="icon" />
            </div>
            <div className="bottom">
              <div className="featuredChart">
                    <CircularProgressbar 
                          title="Total Sales Money Total"
                          titleSize={"16px"}
                          titleColor={"#0052CC"}
                          titleWeight={"900"}
                          thickness={5}
                          percentileIcon={true}
                          /* backColor={"#0052CC"} */
                          subMarginTop={"-18px"}
                          text={"Balance"} 
                          value={120}
                          maxValue={200}
                          textColor={"#0052CC"}
                          textSize={"40px"}
                          textWeight={"bold"}
                          subTextSize={"20px"}
                          subtextWeight={"900"}
                    />
              </div>
             
              <p className="amount"> ₺420 </p>
              <p className="desc"> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
            </div>
        </div>
    
  )
}

export default Index;
