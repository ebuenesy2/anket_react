import "./index.css"
import DashboardIcon from '@material-ui/icons/Dashboard';
import WidgetsIcon from '@material-ui/icons/Widgets';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';


function Index() {
    
  return (
        <div className='sidebar'>
             <div className="top">
                <span className="logo"> Anket </span>
             </div>
             <hr />
             <div className="center">
                <ul>
                   <p className="title">  Anasayfa</p>
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
                        <span> Renklerim </span>
                     </a>
                  </li>

                   <p className="title">  Listeler</p>
                   <li>
                     <a href="/users">
                        <PersonIcon className="icon" />
                        <span> Kullanıcılar Listesi </span>
                     </a>
                   </li>
                   <li>
                     <a href="/survey">
                        <PeopleIcon className="icon" />
                        <span> Anket Listesi </span>
                     </a>
                   </li>

                   <p className="title">  Anket Çöz </p>
                   <li>
                     <a href="/question">
                        <HelpOutlineIcon className="icon" />
                        <span> Soru </span>
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
