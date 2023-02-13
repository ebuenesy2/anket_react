import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import "./index.css";

//! Enum
import { ApiUrl } from "../../shared/Enum/Url";

//! Widget
import WidgetCardDataTimeLine from "../../components/widgetCardDataTimeLine";

//! icon
import NoteIcon from '@material-ui/icons/Note';
import PersonIcon from '@material-ui/icons/Person';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import TimerIcon from '@material-ui/icons/Timer';



//! Data
const JsonDataApi = [
    {
      "id":1,
      "table": "user",
      "title": "user_update_successful",
      "description": "Kullanıcı Güncelleme Başarılı",
      "logStatus": "success",
      "created_at": "2022-06-19T18:18:08+03:00"
    },
    {
      "id":2,
      "table": "file",
      "title": "file_add_successful",
      "description": "Dosya Ekleme Başarılıı",
      "logStatus": "success",
      "created_at": "2022-06-30T06:42:19+03:00"
    },
    {
      "id":3,
      "table": "note",
      "title": "note_add_successful",
      "description": "Not Ekleme Başarılı",
      "logStatus": "success",
      "created_at": "2022-06-30T06:43:50+03:00"
    }
];

const IconCssJson =[
      {
         "table": "user",
         "icon": <PersonIcon style={{ fontSize:"20px"}}/>,
         "backgroundColor":"rgb(76, 175, 80)",
         "onClick":()=> { alert("Toplam User"); }
      },
      {
         "table": "note",
         "icon": <NoteIcon style={{ fontSize:"20px"}}/>,
         "backgroundColor":"rgb(244, 67, 53)",
         "onClick":()=> { alert("Toplam Note"); }
      },
      {
          "table": "file",
          "icon": <AttachFileIcon style={{ fontSize:"20px"}}/>,
          "backgroundColor":"#FF2F50",
          "onClick":()=> { alert("Toplam File"); }
      },
      {
         "table": "time",
         "icon": <TimerIcon style={{ fontSize:"20px"}}/>,
         "backgroundColor":"#4682B4",
         "onClick":()=> { alert("Toplam Time"); }
      }
]



function Index() {

      //! --- Api ------------
      const [productsCount, setProductsCount] = useState<[]>([])
      const [products, setProducts] = useState<any[]>([])
      const [productsData, setProductsData] = useState<any[]>([])

      const apiGet = () => {  console.log("api");
            const apiUrl_table=ApiUrl.localApi+"/api/logs/all";
            //console.log("apiUrl_table:",apiUrl_table);
            
            axios.get(apiUrl_table)
            .then(response => {
      
                  //! State
                  setProductsCount(response.data.size);
                  setProducts(response.data);
                  setProductsData(response.data.DB);

                  console.log("response:",response);
                 // console.log("data:",response.data);
                 // console.log("onlineCount:",response.data?.table);
                  
            })
            .catch(error => {  console.log("Api Error:",error.message); });
            
      };

      useEffect(() => { apiGet(); }, []);
      //! ------ Api Son -----------


      
      useEffect(() => {
         console.log("Başlangiç");
         //console.log("productsData:",productsData);
         //console.log("productsCount:",productsCount)
       
       }, []);



  return (
        <div className='logs'>
               <Sidebar/>
               <div className="logsHome">
                    <Navbar />
                    <div className="logsContainer">
                          
                          <div className="timeLineBox">

                            <div style={{ display:"flex", gap:"10px" }} >
                               <div style={{ width:"450px" }}>
                                    <WidgetCardDataTimeLine 
                                        backgroundColor={"#F1F1F1"}
                                        colorTitle={"#344563"}
                                        title={"Tüm Veriler TimeLine"}
                                        fontSizeTitle={"16px"}
                                        fontWeightTitle={"700"}
                                        status={"positive"}
                                        titleDetailDescription={productsCount}
                                        fontSizeDetailDescription={"14px"}
                                        fontWeightDetailDescription={"400"}

                                        titleDetailContent={"Bu ay"}
                                        colorDetailContent={"#344563"}
                                        fontSizeDetailContent={"15px"}
                                        fontWeightDetailContent={"700"}
                                    
                                        
                                        JsonData={products}
                                        productsData={productsData}
                                        IconCssJson={IconCssJson}
                                        colorBoxTitle={"#344563"}
                                        fontSizeBoxTitle={"14px"}
                                        fontWeightBoxTitle={"700"}
                                        colorBoxDescription={"#344563"}
                                        fontSizeBoxDescription={"12px"}
                                        fontWeightBoxDescription={"400"}
                                    />
                               </div>

                               <div>
                                    <p> Api: {ApiUrl.localApi}  </p>
                                    {IconCssJson.find((el:any) =>el.table === 'user')?.icon}

                                  

                               </div>
                            </div> 
                           
                          </div>

                    </div>
               </div>
        </div>
    
  )
}

export default Index;