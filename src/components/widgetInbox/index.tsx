import "./index.css"



//! Date
import Moment from 'moment'; //! Date
Moment.locale(Moment.locale()); // Lokasyona göre Zaman alıyor

export const Index =(props: any) => {  //console.log("proops:",props);
  
   //console.log("props:",props);
   //console.log("created_at:",props.created_at);
   //console.log("Moment:",Moment(props.created_at).format('L'));
   //console.log("Moment:",Moment(props.created_at).format('LTS'));


    
  return (
        <div className='widgetInbox' style={{ backgroundColor: props.backgroundColor ? props.backgroundColor : "#344563"  }} >
            <div className='widgetInboxContainer'>
               <div className="widgetInboxAvatarBox">
                  <img className="widgetInboxAvatar" src="./assets/img/2.jpg"  alt="" />
                  <div style={{ backgroundColor:props.onlineStatus===true ? "darkgreen" : "red" }} className="widgetInboxAvatarStatus" />
               </div>
               <div className="widgetInboxInfoTitle">
                     <a className="widgetInboxNameSurname" href={props.userUrl ? props.userUrl : "Profile?id=1"} style={{ color: props.colorUserNameSurname ? props.colorUserNameSurname : "black", fontSize: props.fontSizeUserNameSurname ? props.fontSizeUserNameSurname : "16px", fontWeight:props.fontWeightUserNameSurname ? props.fontWeightUserNameSurname : "700"  }} > {props.userNameSurname ? props.userNameSurname : "User Name"}  </a>
                     <p className="widgetInboxMessage" style={{ color: props.colorMessage ? props.colorMessage : "black", fontSize: props.fontSizeMessage ? props.fontSizeMessage : "16px", fontWeight:props.fontWeightMessage ? props.fontWeightMessage : "700"  }} > {props.message ? props.message : "Message"} </p>
                     <p className="widgetInboxStatus" style={{ color: props.colorTime ? props.colorTime : "black", fontSize: props.fontSizeTime ? props.fontSizeTime : "16px", fontWeight:props.fontWeightTime ? props.fontWeightTime : "700"  }} > {props.time ? props.time : "00:00"} </p>
                  </div>
            </div>
           
        </div>
     
  )
}

export default Index;
