import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import "./index.css"

//! icon
import ForumIcon from '@material-ui/icons/Forum';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import GroupIcon from '@material-ui/icons/Group';
import InfoIcon from '@material-ui/icons/Info';
import DeleteIcon from '@material-ui/icons/Delete';
import GradeIcon from '@material-ui/icons/Grade';
import DoneIcon from '@material-ui/icons/Done';
import SendIcon from '@material-ui/icons/Send';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';

function Index() {
  return (
        <div className='message'>
               <Sidebar/>
               <div className="messageHome">
                    <Navbar />
                    <div className="messageContainer">
                        <div className="messageContainerLeft">
                            <div className="messageContainerLeftIconBox">
                                  <div className="messageContainerLeftIcon"> <ForumIcon className="icon" /> </div>
                                  <div className="messageContainerLeftIcon"> <AssignmentIndIcon className="icon" /> </div>
                                  <div className="messageContainerLeftIcon"> <ContactMailIcon className="icon" /> </div>
                                  <div className="messageContainerLeftIcon"> <GroupIcon className="icon" /> </div>
                            </div>
                            <div className="messageContainerLeftTitle"> Chats</div>
                             <hr />
                            <div className="messageContainerLeftBottom">
                                <ul className="messageInbox">
                                     <li onClick={ ()=> { alert("gelenMessage")} } className="messageInboxInfo active">
                                         <div className="messageContainerRightTopProfileInfo">
                                            <img className="avatar" src="./assets/img/1.jpg"  alt="" />
                                            <div className="avatarStatus" />
                                            <div className="messageContainerRightTopProfileInfoTitle">
                                                <p className="nameSurname"> Olga Sukhorukova  </p>
                                                <p className="message">  Project has been already </p>
                                                <p className="status">  08:45 </p>
                                            </div>
                                         </div>
                                     </li>
                                     <li className="messageInboxInfo">
                                         <div className="messageContainerRightTopProfileInfo">
                                            <img className="avatar" src="./assets/img/2.jpg"  alt="" />
                                            <div style={{ backgroundColor:"red" }} className="avatarStatus" />
                                            <div className="messageContainerRightTopProfileInfoTitle">
                                                <p className="nameSurname"> Teresa McCall  </p>
                                                <p className="message">  Project has been already </p>
                                                <p className="status">  08:45 </p>
                                            </div>
                                         </div>
                                     </li>

                                     <li className="messageInboxInfo">
                                         <div className="messageContainerRightTopProfileInfo">
                                            <img className="avatar" src="./assets/img/3.jpg"  alt="" />
                                            <div className="messageContainerRightTopProfileInfoTitle">
                                                <p className="nameSurname"> Teresa McCall  </p>
                                                <p className="message">  Project has been already </p>
                                                <p className="status">  08:45 </p>
                                            </div>
                                         </div>
                                     </li>

                                     <li className="messageInboxInfo">
                                         <div className="messageContainerRightTopProfileInfo">
                                            <img className="avatar" src="./assets/img/4.jpg"  alt="" />
                                            <div className="messageContainerRightTopProfileInfoTitle">
                                                <p className="nameSurname"> Teresa McCall  </p>
                                                <p className="message">  Project has been already </p>
                                                <p className="status">  08:45 </p>
                                            </div>
                                         </div>
                                     </li>

                                     <li className="messageInboxInfo">
                                         <div className="messageContainerRightTopProfileInfo">
                                            <img className="avatar" src="./assets/img/2.jpg"  alt="" />
                                            <div className="messageContainerRightTopProfileInfoTitle">
                                                <p className="nameSurname"> Teresa McCall  </p>
                                                <p className="message">  Project has been already </p>
                                                <p className="status">  08:45 </p>
                                            </div>
                                         </div>
                                     </li>

                                     <li className="messageInboxInfo">
                                         <div className="messageContainerRightTopProfileInfo">
                                            <img className="avatar" src="./assets/img/2.jpg"  alt="" />
                                            <div className="messageContainerRightTopProfileInfoTitle">
                                                <p className="nameSurname"> Teresa McCall  </p>
                                                <p className="message">  Project has been already </p>
                                                <p className="status">  08:45 </p>
                                            </div>
                                         </div>
                                     </li>

                                     <li className="messageInboxInfo">
                                         <div className="messageContainerRightTopProfileInfo">
                                            <img className="avatar" src="./assets/img/2.jpg"  alt="" />
                                            <div className="messageContainerRightTopProfileInfoTitle">
                                                <p className="nameSurname"> Teresa McCall  </p>
                                                <p className="message">  Project has been already </p>
                                                <p className="status">  08:45 </p>
                                            </div>
                                         </div>
                                     </li>

                                     <li className="messageInboxInfo">
                                         <div className="messageContainerRightTopProfileInfo">
                                            <img className="avatar" src="./assets/img/2.jpg"  alt="" />
                                            <div className="messageContainerRightTopProfileInfoTitle">
                                                <p className="nameSurname"> Teresa McCall  </p>
                                                <p className="message">  Project has been already </p>
                                                <p className="status">  08:45 </p>
                                            </div>
                                         </div>
                                     </li>

                                     <li className="messageInboxInfo">
                                         <div className="messageContainerRightTopProfileInfo">
                                            <img className="avatar" src="./assets/img/2.jpg"  alt="" />
                                            <div className="messageContainerRightTopProfileInfoTitle">
                                                <p className="nameSurname"> Teresa McCall  </p>
                                                <p className="message">  Project has been already </p>
                                                <p className="status">  08:45 </p>
                                            </div>
                                         </div>
                                     </li>

                                     <li className="messageInboxInfo">
                                         <div className="messageContainerRightTopProfileInfo">
                                            <img className="avatar" src="./assets/img/2.jpg"  alt="" />
                                            <div className="messageContainerRightTopProfileInfoTitle">
                                                <p className="nameSurname"> Teresa McCall  </p>
                                                <p className="message">  Project has been already </p>
                                                <p className="status">  08:45 </p>
                                            </div>
                                         </div>
                                     </li>

                                     <li className="messageInboxInfo">
                                         <div className="messageContainerRightTopProfileInfo">
                                            <img className="avatar" src="./assets/img/2.jpg"  alt="" />
                                            <div className="messageContainerRightTopProfileInfoTitle">
                                                <p className="nameSurname"> Teresa McCall  </p>
                                                <p className="message">  Project has been already </p>
                                                <p className="status">  08:45 </p>
                                            </div>
                                         </div>
                                     </li>

                                     <li className="messageInboxInfo">
                                         <div className="messageContainerRightTopProfileInfo">
                                            <img className="avatar" src="./assets/img/2.jpg"  alt="" />
                                            <div className="messageContainerRightTopProfileInfoTitle">
                                                <p className="nameSurname"> Teresa McCall  </p>
                                                <p className="message">  Project has been already </p>
                                                <p className="status">  08:45 </p>
                                            </div>
                                         </div>
                                     </li>
                                </ul>
                            </div>

                        </div>
                        <div className="messageContainerRight">
                            <div className="messageContainerRightTop">
                                <div className="messageContainerRightTopProfileInfo">
                                      <img className="avatar" src="./assets/img/1.jpg"  alt="" />
                                      <div className="messageContainerRightTopProfileInfoTitle">
                                           <p className="nameSurname"> Olga Sukhorukova  </p>
                                           <p className="status"> Typing...</p>
                                      </div>
                                </div>
                                <div className="messageContainerRightTopIconBox">
                                       <div className="messageContainerRightTopIcon"> <InfoIcon  style={{ color:"blue"}} className="icon" /> </div>
                                       <div className="messageContainerRightTopIcon"> <DeleteIcon style={{ color:"red"}} className="icon" /> </div>
                                       <div className="messageContainerRightTopIcon"> <GradeIcon  style={{ color:"#6a1b9a"}} className="icon" /> </div>
                                       <div className="messageContainerRightTopIcon"> <DoneIcon  style={{ color:"#00695c"}} className="icon" /> </div>
                                </div>
                             </div>
                             <hr />
                             <div className="messageContainerRightBottom">
                                  <ul className="chatBox">
                                      <li className="chatLeft">
                                          <div className="profilInfo"> 
                                              <img className="avatar" src="./assets/img/1.jpg"  alt="" />
                                              <div className="nameSurname" > Olga</div>
                                          </div>
                                          <div className="chat"> 
                                               <div className="chatMessage" > There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words </div>
                                               <div className="chatStatus" >  <p className="chatTime"> 08:45</p> <DoneIcon className="chatIcon" />  </div>
                                          </div>
                                      </li>
                                      <li className="chatRight">
                                          <div className="profilInfo"> 
                                              <img className="avatar" src="./assets/img/2.jpg"  alt="" />
                                              <div className="nameSurname" > Teresa </div>
                                          </div>
                                          <div className="chat"> 
                                               <div className="chatMessage" > There are many variations of passages of Lorem Ipsum available </div>
                                               <div className="chatStatus" >  <p className="chatTime"> 08:45</p> <DoneIcon className="chatIcon" />  </div>
                                          </div>
                                      </li>
                                      <li className="divider"> Feb 18,2022 </li>
                                      <li className="chatLeft">
                                          <div className="profilInfo"> 
                                              <img className="avatar" src="./assets/img/1.jpg"  alt="" />
                                              <div className="nameSurname" > Olga</div>
                                          </div>
                                          <div className="chat"> 
                                               <div className="chatMessage" > There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words </div>
                                               <div className="chatStatus" >  <p className="chatTime"> 08:45</p> <DoneIcon className="chatIcon" />  </div>
                                          </div>
                                      </li>
                                      <li className="chatRight">
                                          <div className="profilInfo"> 
                                              <img className="avatar" src="./assets/img/2.jpg"  alt="" />
                                              <div className="nameSurname" > Teresa </div>
                                          </div>
                                          <div className="chat"> 
                                               <div className="chatMessage" > There are many variations of passages of Lorem Ipsum available </div>
                                               <div className="chatStatus" >  <p className="chatTime"> 08:45</p> <DoneIcon className="chatIcon" />  </div>
                                          </div>
                                      </li>
                                      <li className="chatRight">
                                          <div className="profilInfo"> 
                                              <img className="avatar" src="./assets/img/2.jpg"  alt="" />
                                              <div className="nameSurname" > Teresa </div>
                                          </div>
                                          <div className="chat"> 
                                               <div className="chatMessage" > There are many variations of passages of Lorem Ipsum available </div>
                                               <div className="chatStatus" >  <p className="chatTime"> 08:45</p> <DoneIcon className="chatIcon" />  </div>
                                          </div>
                                      </li>
                                      <li className="chatRight">
                                          <div className="profilInfo"> 
                                              <img className="avatar" src="./assets/img/2.jpg"  alt="" />
                                              <div className="nameSurname" > Teresa </div>
                                          </div>
                                          <div className="chat"> 
                                               <div className="chatMessage" > There are many variations of passages of Lorem Ipsum available </div>
                                               <div className="chatStatus" >  <p className="chatTime"> 08:45</p> <DoneIcon className="chatIcon" />  </div>
                                          </div>
                                      </li>                                      
                                  </ul>
                             </div>
                             <div className="messageContainerRightBottomText">
                                 <div className="messageContainerRightBottomTextTop">
                                         <AttachFileIcon style={{ color:"blue"}} className="icon" />
                                         <SentimentSatisfiedAltIcon style={{ color:"blue"}} className="icon" />
                                         <textarea placeholder="Send Message"></textarea>
                                        <SendIcon style={{ color:"green"}} className="icon" />
                                  </div>
                             </div>
                        </div>
                    </div>
               </div>
        </div>
    
  )
}

export default Index;
