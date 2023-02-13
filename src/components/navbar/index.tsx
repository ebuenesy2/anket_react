import "./index.css"
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';
import FullscreenExitOutlinedIcon from '@material-ui/icons/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';

function Index() {
    
  return (
        <div className='navbar'>
           <div className="wrapper" >
              <div className="search">
                 <input type="text" placeholder="search" />
                 <SearchIcon className="icon"  />
              </div>
              <div className="items">
                <div className="item"> <LanguageIcon className="icon" /> English </div>
                <div className="item"> <Brightness2OutlinedIcon  className="icon" />  </div>
                <div className="item"> <FullscreenExitOutlinedIcon  className="icon" />  </div>
                <div className="item"> 
                    <NotificationsNoneOutlinedIcon  className="icon" />
                    <div className="counter">1</div>
                </div>
                <div className="item"> 
                    <ChatBubbleOutlineOutlinedIcon  className="icon" /> 
                    <div className="counter">2</div>
                </div>
                <div className="item"> <ListOutlinedIcon  className="icon" />  </div>
                <div className="item"> <img className="avatar" src="./assets/img/1.jpg"  alt="" />  </div>
              </div>
           </div>
        </div>
    
  )
}

export default Index;
