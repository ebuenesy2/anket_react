import "./index.css"
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import CircularProgressbar from '../../components/Items/CircularProgressbar';
import Progressbar from '../../components/Items/Progressbar';

//! item
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

//! icon
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

function onChangeValue(event:any) { 
     console.log("onChangeValue:",event.target.value);
}

function Index() {
    
  return (
        <div className='question'>
               <Sidebar/>
               <div className="questionHome">
                    <Navbar />
                    <div className="questionContainer">
                         <div className="questionPanel">
                              <div className="questionTitle">
                                   <div className="question"> 
                                        <div className="questionCount">
                                             <Progressbar 
                                                  value={25}
                                                  maxValue= {30}
                                                  percView = {false}
                                             />
                                             <p className="count" > 25/30 </p>
                                        </div>
                                        <div className="questionName">
                                             <p> Soru 25 </p>
                                        </div>
                                   </div>
                                   <div className="questionTime">
                                             <CircularProgressbar 
                                                  title="Countdown"
                                                  titleSize={"16px"}
                                                  titleColor={"#0052CC"}
                                                  titleWeight={"900"}
                                                  thickness={5}
                                                  percentileIcon={false}
                                                  /* backColor={"#0052CC"} */
                                                  text={"saniye"}
                                                  value={59}
                                                  maxValue={60}
                                                  textColor={"#0052CC"}
                                                  textSize={"60px"}
                                                  textWeight={"bold"}
                                                  subTextSize={"10px"}
                                                  subtextWeight={"bold"}                                
                                             />
                                   </div>
                              </div>
                              <div className="questionDescription">
                                   <div className="questionDescriptionLeft">  
                                        <div className="questionView">
                                             <div className="questionsHead" > 
                                                  <p style={{ opacity: 1 }} > What is the correct command to create a new React project? </p>
                                             </div>
                                            
                                             <div className="answerBox">
                                                  <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group" >
                                                  <div className="answerDescription" >  
                                                       <div className="choiceBox"> 
                                                            <div className="choice"> <p className="letter"> A </p> </div>
                                                            <div className="choiceAnswer"> <FormControlLabel onChange={onChangeValue} value="a" control={<Radio />} label="npx create-react-app" /> </div>
                                                       </div>

                                                       <div className="choiceBox"> 
                                                            <div className="choice"> <p className="letter"> B </p> </div>
                                                            <div className="choiceAnswer"> <FormControlLabel value="b" onChange={onChangeValue} control={<Radio />} label="npx create-react-app myReactApp" /> </div>
                                                       </div>

                                                       <div className="choiceBox"> 
                                                            <div className="choice"> <p className="letter"> C </p> </div>
                                                            <div className="choiceAnswer"> <FormControlLabel value="c" onChange={onChangeValue} control={<Radio />} label="npm create-react-app" /> </div>
                                                       </div>

                                                       <div className="choiceBox"> 
                                                            <div className="choice"> <p className="letter"> D </p> </div>
                                                            <div className="choiceAnswer"> <FormControlLabel value="d" onChange={onChangeValue} control={<Radio />} label="npm create-react-app myReactApp" /> </div>
                                                       </div>

                                                       <div className="choiceBox"> 
                                                            <div className="choice"> <p className="letter"> E </p> </div>
                                                            <div className="choiceAnswer"> <FormControlLabel value="e" onChange={onChangeValue} control={<Radio />} label="npm i" /> </div>
                                                       </div>
                                                  </div>
                                                  </RadioGroup>

                                                  <div className="buttonBox">
                                                       <div className="buttonPre"> <ArrowLeftIcon className="icon" /> </div>
                                                       <div className="buttonPre"> <TouchAppIcon className="icon" /> </div>
                                                       <div className="buttonPre"> <ArrowRightIcon className="icon" /> </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="questionDescriptionRight"> Right </div>
                              </div>
                         </div>
                    </div>
               </div>
        </div>
    
  )
}

export default Index;
