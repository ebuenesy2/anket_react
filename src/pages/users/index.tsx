import "./index.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import WidgetDataIstatistics from "../../components/widgetDataIstatistics";
import TableUser from '../../components/tableUser';

//! İcon
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

function Index() {

       const [productsCount, setProductsCount] = useState<[]>([])
       const [productsData, setProductsData] = useState<any[]>([])
     
     
       const apiGet = () => {  console.log("api");
         const apiUrl_table=process.env.REACT_APP_API_URL+"/api/user/all";
         //console.log("apiUrl_table:",apiUrl_table);
         
         axios.get(apiUrl_table)
           .then(response => {
     
             //! State
             setProductsCount(response.data.onlineCount);
             setProductsData(response.data.DB);

             console.log(response.data);
             console.log("onlineCount:",response.data.onlineCount);
               
           })
           .catch(error => {  console.log("Api Error:",error.message); });
         
       };

       useEffect(() => { apiGet(); }, []);
       
       useEffect(() => {
              const userId= 0;
              const socket = new WebSocket('ws://localhost:3002/socket/'+userId);  // Url

              socket.onopen = function () {
                //alert("Connect");
                console.log("Opening a connection...");

                const jsonVeri = JSON.stringify({
                     toAll:true,
                     toUserId:null,
                     dataType: "Time",
                     dataTypeTitle: "time_add_successful",
                     dataTypeDescription: "Zaman Görüntüleme Başladı",
                     dataId: 0,
                     data:null,
                     pageTable:"home",
                     pageToken: "homeToken"
                 })
          
                 socket.send(jsonVeri);   


              //! Gelen Bildirim
              socket.addEventListener('message', function (event) {
                     //console.log('Message from server ', event.data);

                     //! Veri Alma
                     let geleData = event.data;
                     const obj = JSON.parse(geleData);
                     

                     //Return Log
                     console.log("obj:",obj);

                   // Bağlantı Bilgileri
                     if(obj.dataType === "Connect" &&  obj.fromUserID === userId ) { 
                            //console.log("Bağlantı Durumu:",obj.dataTypeDescription);
                      }
                     if( obj.dataType === "Time" && obj.dataTypeTitle === "time_add_successful" ) { console.log("objConnectCount:",obj.count); apiGet();  }
                     if( obj.dataType === "Connect" && obj.dataTypeTitle === "disConnect" ) { console.log("objConnectCount:",obj.count); apiGet();  }
                     // Bağlantı Bilgileri Son

              });
              //! Gelen Bildirim Son

              };
              socket.onclose = function (evt) {
                alert("Socket has been closed");
                console.log("Socket has been closed");
              };
              socket.onmessage = function (evt:any) {
                // handle messages here
              };
              socket.onerror = function (evt:any) {
                 console.log("ERR: " + evt.data);
              };
              
       }, []);

      

  return (
        <div className='users'>
               <Sidebar/>
               <div className="usersHome">
                    <Navbar />
                    <div className="usersContainer">
                            <div className="Widgets"> 
                                                     
                    <div style={{ width:"450px", display:"flex", gap:"10px" }}>
                          <WidgetDataIstatistics
                            backgroundColor={"#F1F1F1"}                            
                           
                            title={"Kullanıcılar"}
                            colorTitle={"#344563"}
                            fontSizeTitle={"16px"}
                            fontWeightTitle={"700"}

                            value={"19"}
                            colorValue={"black"}
                            fontSizeValue={"28px"}
                            fontWeightValue={"400"}

                            titleDescription={"Online Sayısı: "}
                            colorDescription={"rgb(160, 160, 160)"}
                            fontSizeDescription={"12px"}
                            fontWeightDescription={"700"}

                            titleDescriptionValue={"121"}
                            colorDescriptionValue={"rgb(160, 160, 160)"}
                            fontSizeDescriptionValue={"12px"}
                            fontWeightDescriptionValue={"700"}

                            LinkName={"Link Name"}
                            LinkUrl={"/linkUrl"}
                            colorLink={"blue"}
                            fontSizeLink={"12px"}
                            fontWeightLink={"700"}

                            status={"positive"}
                            titleDetailDescription={"20%"}
                            fontSizeDetailDescription={"14px"}
                            fontWeightDetailDescription={"400"}

                            titleDetailContent={"Bu ay"}
                            colorDetailContent={"#344563"}
                            fontSizeDetailContent={"15px"}
                            fontWeightDetailContent={"700"}

                            WidgetBoxColor={"#FEDDC7"}
                            icon={<PersonOutlineOutlinedIcon style={{ fontSize:"35px",color:"black"}} />}
                          />
                    </div>
                            </div>

                            <div className="listContainer"> 
                               <div className="listTitle">  Tüm Kullanıcılar  </div>
                               <TableUser data={productsData} pageSize="10" />
                            </div>
                    </div>
               </div>
        </div>
    
  )
}

export default Index;
