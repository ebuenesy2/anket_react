import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import "./index.css"

function Index() {
    
  return (
        <div className='sabit'>
               <Sidebar/>
               <div className="sabitHome">
                    <Navbar />
                    <div className="sabitContainer">
                           <p>  Sbit </p>
                    </div>
               </div>
        </div>
    
  )
}

export default Index;
