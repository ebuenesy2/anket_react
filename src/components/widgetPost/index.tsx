import "./index.css"

//! icons
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ShareIcon from '@material-ui/icons/Share';
import DeleteIcon from '@material-ui/icons/Delete';

//! Date
import Moment from 'moment'; //! Date
Moment.locale(Moment.locale()); // Lokasyona göre Zaman alıyor

export const Index =(props: any) => {  //console.log("proops:",props);
  
   console.log("props:",props);



    
  return (
        <div className='widgetPost'  style={{ backgroundColor: props.backgroundColor ? props.backgroundColor : "#344563"  }} >
            
            <div className="widgetPostIconbox">
                <div className="shareIcon" > <ShareIcon onClick={() => { props.shareOnClick(); } } /> </div>
                <div className="deleteIcon"> <DeleteIcon  onClick={() => { props.deleteOnClick(); } } /> </div>
            </div>
            
            <div className="widgetPostView">
                <img className="widgetPostImg" src={props.postUrl ? props.postUrl : "./assets/img/1.jpg"}   alt="" /> 
            </div>
     
            <div className="widgetPostDetail">
                <div className="widgetPostDetailUser">
                    <img className="widgetPostDetailAvatar" src={props.userImage ? props.userImage : "./assets/img/1.jpg"}  alt="" />
                    <div className="widgetPostDetailUserInfo">
                       <a className="widgetPostDetailUserInfoName" href={props.userUrl ? props.userUrl : "Profile?id=1"} style={{ color: props.colorUserNameSurname ? props.colorUserNameSurname : "black", fontSize: props.fontSizeUserNameSurname ? props.fontSizeUserNameSurname : "16px", fontWeight:props.fontWeightUserNameSurname ? props.fontWeightUserNameSurname : "700"  }} >  {props.userNameSurname ? props.userNameSurname : "UserNameSurname"} </a>
                       <div className="widgetPostDetailUserInfoTıme" style={{ color: props.colorTime ? props.colorTime : "black", fontSize: props.fontSizeTime ? props.fontSizeTime : "16px", fontWeight:props.fontWeightTime ? props.fontWeightTime : "700"  }} >  {props.Time ? props.Time : "Geçen süre"} </div>
                    </div>
                </div>
                <div className="widgetPostStatus">
                    <div className="widgetPostStatuslike"  onClick={() => { props.likeOnClick(); } } >
                        <FavoriteIcon style={{ color:props.liked == "true" ? "red" : "white" }} />
                        <div className="widgetPostStatuslikeCount" style={{ color: props.colorLike ? props.colorLike : "black", fontSize: props.fontSizeLike ? props.fontSizeLike : "16px", fontWeight:props.fontWeightLike ? props.fontWeightLike : "700"  }}  > {props.countLiked ? props.countLiked : "00"} </div>
                    </div>
                    <div className="widgetPostStatuscomment"  onClick={() => { props.commentOnClick(); } } >
                          <CommentIcon /> 
                          <div className="widgetPostStatuscommentCount" style={{ color: props.colorComment ? props.colorComment : "black", fontSize: props.fontSizeComment ? props.fontSizeComment : "16px", fontWeight:props.fontWeightComment ? props.fontWeightComment : "700"  }} > {props.countComment ? props.countComment : "00"} </div>
                    </div>
                    <div className="widgetPostStatusview" onClick={() => { props.visibilityOnClick(); } } >
                          <VisibilityIcon /> 
                          <div className="widgetPostStatusviewCount" style={{ color: props.colorVisibility ? props.colorVisibility : "black", fontSize: props.fontSizeVisibility ? props.fontSizeVisibility : "16px", fontWeight:props.fontWeightVisibility ? props.fontWeightVisibility : "700"  }}  >{props.countVisibility ? props.countVisibility : "00"}</div>
                    </div>
               </div>
             </div>
        </div>
     
  )
}

export default Index;
