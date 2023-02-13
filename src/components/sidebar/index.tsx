import "./index.css"
import DashboardIcon from '@material-ui/icons/Dashboard';
import WidgetsIcon from '@material-ui/icons/Widgets';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';
import StoreIcon from '@material-ui/icons/Store';
import PaymentIcon from '@material-ui/icons/Payment';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SettingsSystemDaydreamIcon from '@material-ui/icons/SettingsSystemDaydream';
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import SettingsIcon from '@material-ui/icons/Settings';
import ListIcon from '@material-ui/icons/List';
import NoteIcon from '@material-ui/icons/Note';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import ContactPhoneOutlinedIcon from '@material-ui/icons/ContactPhoneOutlined';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import VideocamIcon from '@material-ui/icons/Videocam';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';

function Index() {
    
  return (
        <div className='sidebar'>
             <div className="top">
                <span className="logo"> SocialEducation </span>
             </div>
             <hr />
             <div className="center">
                <ul>
                   <p className="title">  MAIN</p>
                   <li>
                     <a href="/">
                        <DashboardIcon className="icon"/>
                        <span> Dashboard </span>
                     </a>
                   </li>
                   <li>
                     <a href="/widgets">
                        <WidgetsIcon className="icon"/>
                        <span> Widgets </span>
                     </a>
                  </li>
                  <li>
                     <a href="/widgetstwo">
                        <WidgetsIcon className="icon"/>
                        <span> Widgets V2 </span>
                     </a>
                   </li>
              
                   <li>
                     <a href="/mycolor">
                        <ColorLensIcon className="icon"/>
                        <span> My Color </span>
                     </a>
                  </li>

                   <p className="title">  LISTS</p>
                   <li>
                     <a href="/users">
                        <PersonIcon className="icon" />
                        <span> Users </span>
                     </a>
                   </li>
                   <li>
                     <a href="/clients">
                        <PeopleIcon className="icon" />
                        <span> Clients </span>
                     </a>
                   </li>

                   <p className="title">  Education </p>
                   <li>
                     <a href="/question">
                        <HelpOutlineIcon className="icon" />
                        <span> Question </span>
                     </a>
                   </li>
                   <li>
                     <a href="/#">
                        <MenuBookIcon className="icon" />
                        <span> Trial Exams </span>
                     </a>
                   </li>
                   <p className="title">  Lesson </p>
                   <li>
                     <a href="/#">
                        <VideocamIcon className="icon" />
                        <span> Lesson Video </span>
                     </a>
                   </li>
                   <li>
                     <a href="/#">
                        <InsertDriveFileIcon className="icon" />
                        <span> Lesson Notes </span>
                     </a>
                   </li>

                   <p className="title">  USEFUL</p>
                   <li>
                     <a href="/message">
                        <MailOutlineIcon className="icon" />
                        <span> Messages </span>
                     </a>
                   </li>
                   <li>
                     <a href="/#">
                        <NotificationsIcon className="icon" />
                        <span> Notifications </span>
                     </a>
                   </li>
                   <li>
                     <a href="/#">
                        <NoteIcon className="icon" />
                        <span> Notes </span>
                     </a>
                   </li>
                   <li>
                     <a href="/#">
                        <ListIcon className="icon" />
                        <span> Todo List </span>
                     </a>
                   </li>

                   <p className="title">  SHOPS </p>
                   <li>
                     <a href="/#">
                        <StoreIcon className="icon" />
                        <span> Products </span>
                     </a>
                   </li>
                   <li>
                     <a href="/#">
                        <PaymentIcon className="icon" />
                        <span> Orders </span>
                     </a>
                   </li>

                   <p className="title">  App </p>
                   <li>
                     <a href="/gallery">
                        <PermMediaIcon className="icon" />
                        <span> Gallery </span>
                     </a>
                   </li>
                   <li>
                     <a href="/#">
                        <FileCopyOutlinedIcon className="icon" />
                        <span> FileManager </span>
                     </a>
                   </li>
                   <li>
                     <a href="/#">
                        <ContactPhoneOutlinedIcon className="icon" />
                        <span> Contact </span>
                     </a>
                   </li>
                   <li>
                     <a href="/#">
                        <CalendarTodayOutlinedIcon className="icon" />
                        <span> Calendar </span>
                     </a>
                   </li>

                   <p className="title">  SERVICE</p>
                   <li>
                     <a href="/#">
                        <LiveHelpIcon className="icon" />
                        <span> Faq </span>
                     </a>
                   </li>
                   <li>
                     <a href="/#">
                        <SettingsSystemDaydreamIcon className="icon" />
                        <span> System Health </span>
                     </a>
                   </li>
                   <li>
                     <a href="/logs">
                        <SettingsBrightnessIcon className="icon" />
                        <span> Logs </span>
                     </a>                     
                   </li>
                 
                   <li>
                     <a href="/setting">
                        <SettingsIcon className="icon" />
                        <span> Settings </span>
                     </a>
                   </li>
                  

                </ul>
             </div>
             <div className="bottom">
                  <div className="colorOptions"></div>
                  <div className="colorOptions"></div>
                  <div className="colorOptions"></div>
             </div>
        </div>
    
  )
}

export default Index;
