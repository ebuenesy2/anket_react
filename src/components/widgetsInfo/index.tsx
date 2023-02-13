import "./index.css"
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';


//! Date
import Moment from 'moment'; //! Date
Moment.locale(Moment.locale()); // Lokasyona göre Zaman alıyor

export const Index =(props: any) => {  //console.log("proops:",props);
  
   //console.log("props:",props);
   //console.log("created_at:",props.created_at);
   //console.log("Moment:",Moment(props.created_at).format('L'));
   //console.log("Moment:",Moment(props.created_at).format('LTS'));


    
  return (
        <div className='widgetInfo'>
         <div className="top"> Kullanıcı Bilgileri <div> <VisibilityIcon onClick={()=> {props.viewClick();}} className="icon" /> <EditIcon onClick={()=> {props.editClick();}} className="icon" /> <DeleteIcon  onClick={()=> {props.deleteClick();}} style={{ color:"red" }} className="icon" /> </div>  </div>
          <div className="topUser"> UserId: <p className="userId">{props.userId}</p> </div>
          <hr/>
          
         <div className="bottom">
              <div className="bottomLeft"> 
                <img className="userAvatar" src={props.userAvatar}  alt="" />
                <div className="userStatus" style={{ color:props.userStatus===true ? "green": "red"}}> {props.userStatus === true ? "Online": "Offline"} </div>
              </div>
              <div className="bottomRigth">
                <a className="username" href={"/Profile?id="+props.userId}> @{props.username} </a>
                <div className="nameSurname"> {props.nameSurname} </div>
                <div className="registerName"> {props.city} / {props.country} </div>
                <div className="registerName"> Doğum Tarihi:<div className="registerValue"> {props.dateofBirth}</div> </div>
                
                <div className="registerName"> Kayıt Tarihi:<div className="registerValue">{Moment(props.created_at).format('L')} {Moment(props.created_at).format('LTS')} </div> </div>
                <div className="registerName"> Durum:<div className="registerValue" style={{ color:props.userActive===true ? "green": "red"}}>{props.userActive === true ? "Active": "Passive"}</div> </div>
                <div className="onlineTime"> {props.onlineTime}</div>
              </div>
         </div>
               
        </div>
     
  )
}

export default Index;
