import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import "./index.css"


function Index() {
    
  return (
        <div className='settings'>
               <Sidebar/>
               <div className="settingsHome">
                    <Navbar />
                    <div className="settingsContainer">
                          <h1> Settings</h1>
                    </div>
               </div>
        </div>
    
  )
}

export default Index;
