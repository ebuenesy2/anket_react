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

       const [tableData, setTableData] = useState<any[]>([])
       const [success, setSuccess] = useState(0);
     
     
       const apiGet = () => {  
         const apiUrl_table=process.env.REACT_APP_API_URL+"/api/user/all";
         //console.log("apiUrl_table:",apiUrl_table);
         
         axios.get(apiUrl_table)
           .then(response => {
     
             //! State
             
             setTableData(response.data.DB);

             console.log("Data:",response.data);
            
             
             setSuccess(1); //! Başarılı
               
           })
           .catch(error => {  console.log("Api Error:",error.message); });
         
       };

       useEffect(() => { apiGet(); }, []);
       
       

      

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

                            value={tableData.length}
                            colorValue={"black"}
                            fontSizeValue={"28px"}
                            fontWeightValue={"400"}

                            titleDescription={"Online Sayısı: "}
                            colorDescription={"rgb(160, 160, 160)"}
                            fontSizeDescription={"12px"}
                            fontWeightDescription={"700"}

                            titleDescriptionValue={"xx"}
                            colorDescriptionValue={"rgb(160, 160, 160)"}
                            fontSizeDescriptionValue={"12px"}
                            fontWeightDescriptionValue={"700"}

                           

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
                                                
                              {success === 1 ?
                                <TableUser data={tableData} pageSize="10" />
                                :
                                <p>Veri Bekleniyor</p>
                              }
           
            
          
            
                            </div>
                    </div>
               </div>
        </div>
    
  )
}

export default Index;
