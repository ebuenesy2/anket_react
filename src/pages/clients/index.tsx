import { useEffect } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import "./index.css";

import Moment from 'moment'; //! Date
Moment.locale(Moment.locale()); // Lokasyona göre Zaman alıyor

function Index() {


     

     useEffect(() => { 
         
          //! DATE
          var dt = '2022-05-20T11:47:26.329Z';
          console.log("dt:",dt);

          var date=Moment(dt).format('DD-MM-YYYY'); // 02-05-2016
          var time=Moment(dt).format('HH:mm:ss'); // 00:00:00

          console.log("date:",date); //!  20-05-2022
          console.log("time:",time); //! 14:47:26
          //! DATE SON

    }, []);
    
  return (
        <div className='sabit'>
               <Sidebar/>
               <div className="sabitHome">
                    <Navbar />
                    <div className="sabitContainer">
                         <p> Deneme </p>
                         <p> % Port% </p>
                    </div>
               </div>
        </div>
    
  )
}

export default Index;
