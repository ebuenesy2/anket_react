import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import WidgetPost from "../../components/widgetPost";
import "./index.css";


function Index() {

            
     const JsonData = [
       {
          "id":"1",
          "userUrl":"Profile?id=1",
          "userImage":"./assets/img/1.jpg",
          "userNameSurname":"Olga Sukhorukova",
          "postUrl":"./assets/img/9.jpg",
          "liked":"true"
       },
       {
          "id":"2",
          "userUrl":"Profile?id=2",
          "userImage":"./assets/img/2.jpg",
          "userNameSurname":"Olga Sukhorukova",
          "postUrl":"./assets/img/10.jpg",
          "liked":"false"
       },
       {
          "id":"3",
          "userUrl":"Profile?id=3",
          "userImage":"./assets/img/3.jpg",
          "userNameSurname":"Olga Sukhorukova",
          "postUrl":"./assets/img/12.jpg",
          "liked":"true"
       },
       {
           "id":"4",
           "userUrl":"Profile?id=4",
           "userImage":"./assets/img/10.jpg",
           "userNameSurname":"Olga Sukhorukova",
           "postUrl":"./assets/img/15.jpg",
           "liked":"false"
       },
       {
            "id":"5",
            "userUrl":"Profile?id=5",
            "userImage":"./assets/img/5.jpg",
            "userNameSurname":"Olga Sukhorukova",
            "postUrl":"./assets/img/14.jpg",
            "liked":"true"
       },
       {
            "id":"6",
            "userUrl":"Profile?id=6",
            "userImage":"./assets/img/6.jpg",
            "userNameSurname":"Olga Sukhorukova",
            "postUrl":"./assets/img/16.jpg",
            "liked":"false"
       },
       {
            "id":"7",
            "userUrl":"Profile?id=7",
            "userImage":"./assets/img/7.jpg",
            "userNameSurname":"Olga Sukhorukova",
            "postUrl":"./assets/img/3.jpg",
            "liked":"true"
       },
       {
            "id":"8",
            "userUrl":"Profile?id=8",
            "userImage":"./assets/img/8.jpg",
            "userNameSurname":"Olga Sukhorukova",
            "postUrl":"./assets/img/11.jpg",
            "liked":"false"
       },
       {
            "id":"9",
            "userUrl":"Profile?id=9",
            "userImage":"./assets/img/9.jpg",
            "userNameSurname":"Olga Sukhorukova",
            "postUrl":"./assets/img/8.jpg",
            "liked":"false"
       }
       
      ];

    
  return (
        <div className='gallery'>
               <Sidebar/>
               <div className="galleryHome">
                    <Navbar />
                    <div className="galleryContainer">
                           
                       <div className="galleryPost">

                       {Array(JsonData.length).fill(0).map((el, i) =>                        
                            <div style={{ width:"450px" }}>
                                   <WidgetPost
                                          backgroundColor={"#344563"}
                                          postUrl={JsonData[i].postUrl}
                                          
                                          userId={JsonData[i].id}
                                          userUrl={JsonData[i].userUrl}
                                          userImage={JsonData[i].userImage}
                                          userNameSurname={JsonData[i].userNameSurname}
                                          colorUserNameSurname="aliceblue"
                                          fontSizeUserNameSurname="14px"
                                          fontWeightUserNameSurname="900"

                                          Time="12 saat önce"
                                          colorTime="aliceblue"
                                          fontSizeTime="12px"
                                          fontWeightTime="400"

                                          liked={JsonData[i].liked}
                                          likeOnClick={()=> { alert("beğenildi") } }
                                          countLiked="300"
                                          colorLike="aliceblue"
                                          fontSizeLike="12px"
                                          fontWeightLike="400"

                                          commentOnClick={()=> { alert("yorum yap") } }
                                          countComment="200"
                                          colorComment="aliceblue"
                                          fontSizeComment="12px"
                                          fontWeightComment="400"

                                          visibilityOnClick={()=> { alert("Görüntüleyenler") } }
                                          countVisibility="100"
                                          colorVisibility="aliceblue"
                                          fontSizeVisibility="12px"
                                          fontWeightVisibility="400"

                                          shareOnClick={()=> { alert("paylaş") } }
                                          deleteOnClick={()=> { alert("Sil") } }                           
                                   />
                            </div>
                        )}

                       </div>

                    </div>
               </div>
        </div>
    
  )
}

export default Index;
