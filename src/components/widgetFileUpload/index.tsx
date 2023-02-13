import { useCallback,useState } from "react";
import "./index.css";
import { useDropzone } from 'react-dropzone';
import axios from "axios";


//! İcons
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CheckIcon from '@material-ui/icons/Check';
import CancelIcon from '@material-ui/icons/Cancel';


export const Index =(props: any) => {  //console.log("widgetFileUpload props:", props);
  
  const [fileUploadFiles, setFileUploadFiles] = useState([] as any);   //! Tüm Veriler

  const onDrop = useCallback(async (acceptedFiles: string | any[]) => {
       
    // console.log("acceptedFiles:", acceptedFiles);
    // console.log("acceptedFiles Sayısı:", acceptedFiles.length);
    // console.log("acceptedFiles Name:", acceptedFiles[0].name);
    // console.log("acceptedFiles Url:", (URL.createObjectURL(acceptedFiles[0])));  
  

    //! Array 
    var ArrayPreview = [] as any;

    for (var i = 0; i < acceptedFiles.length; i++) {
      ArrayPreview.push({
        "file": acceptedFiles[i],
        "name": acceptedFiles[i].name,
        "previewUrl": URL.createObjectURL(acceptedFiles[i]),
        "progressValue": "0%",
        "status": "upload",
        "size": "0 KB"
      }); //! status : upload | done | error
    }
    
    //console.log("ArrayPreview:", ArrayPreview);
    setFileUploadFiles(ArrayPreview); //! Verileri güncelliyor    
    
    //! File Upload 
    const url = props.apiUrl;
    
    for (var indexFiles = 0; indexFiles < acceptedFiles.length; indexFiles++) {
      //! File
      let data = new FormData();
      data.append('file', acceptedFiles[indexFiles]);
      data.append('role', props.postRole ? props.postRole : "role admin");
      data.append('usedPage', props.postUsedPage ? props.postUsedPage : "user");
      data.append('created_byToken', props.postCreated_byToken ? props.postCreated_byToken : "created_byToken");

      const options = {
        headers: { 'content-type': 'multipart/form-data' },
        onUploadProgress: (progressEvent: any) => {
          const { loaded, total } = progressEvent;
          let percent = Math.floor(loaded * 100 / total); //! Yüzdelik
          //console.log("indexFiles: "+indexFiles +" -  "+loaded + 'kb of ' + total + 'kb | ' + percent + '%'); //! Yükleme Bilgileri
          
                     
          //! FileUploadState
          let temp_state = [...ArrayPreview];
          let temp_element = { ...temp_state[indexFiles] };
          
          temp_element.status = "upload"; //! State Verileri - Status
          temp_element.progressValue = percent + '%';

          temp_state[indexFiles] = temp_element;
          ArrayPreview[indexFiles] = temp_element;
          setFileUploadFiles(temp_state);
          //! FileUploadState Son
                     
        }
      }
      
      //Post
      await axios.post(url, data, options).then((response) => {
        // alert("yüklendi");  console.log("yüklendi");
        // console.log("responseData:", response.data);
           
        //! FileUploadState
        let temp_state = [...ArrayPreview];
        let temp_element = { ...temp_state[indexFiles] };
        
        temp_element.status = response.data.status === 1 ? "done" : "error";
        temp_element.name = response.data.status === 1 ? response.data.DB.fileId : temp_element.name;
        temp_element.size = response.data.DB.fileSizeConvert;

        temp_state[indexFiles] = temp_element;
        ArrayPreview[indexFiles] = temp_element;
        setFileUploadFiles(temp_state);
        //! FileUploadState Son
            
      });
      //! File Upload End

    }
    
   
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop, multiple:true });

    
  return ( 
  <>
     <div className="fileUploadWrapper"  style={{ backgroundColor: props.backgroundColor ? props.backgroundColor : "#43B37A" }} >
        <header className="fileUploadWrapperHeader" style={{ color: props.colorTitle ? props.colorTitle : "black", fontSize: props.fontSizeTitle ? props.fontSizeTitle : "16px", fontWeight:props.fontWeightTitle ? props.fontWeightTitle : "700"  }}  >{props.title ? props.title : "File Upload"} </header>
        <form action="#">
          <div className="fileUploadWrapperFormFlex" >
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <div className="fileUploadWrapperFormFlexInput">
                <CloudUploadIcon className="fileUploadWrapperFormFlexIcon" />
                <p className="fileUploadWrapperFormFlexText"  style={{ color: props.colorUploadTitle ? props.colorUploadTitle : "black", fontSize: props.fontSizeUploadTitle ? props.fontSizeUploadTitle : "16px", fontWeight:props.fontWeightUploadTitle ? props.fontWeightUploadTitle : "700"  }} > {props.uploadTitle ? props.uploadTitle : "Browse File to Upload or Drag and drop your files here"} </p>
              </div>              
            </div>
          </div>
        </form>
    
        {fileUploadFiles.map((item: any) => (
          <>
            {item.status === "upload" ? 
              <section className="fileUploadWrapperSection" >
                <div className="fileUploadWrapperFileBox" >
                <img className="fileUploadWrapperFileBoxImg" src={item.previewUrl} />
                  <div className="fileUploadWrapperFileBoxContent" >
                    <div className="fileUploadWrapperFileBoxContentDetails" >
                      <span className="fileUploadWrapperFileBoxContentName" > {item.name} * {item.status === "upload" ? "Uploading" : item.status === "done" ? "Done" : item.status }</span>
                      <span className="fileUploadWrapperFileBoxContentPercent" > {item.progressValue} </span>
                    </div>
                            
                      <div className="fileUploadWrapperFileBoxContentProgresBar" >
                        <div className="fileUploadWrapperFileBoxContentProgres" style={{ width: item.progressValue }} ></div>
                      </div>
                  </div>
                </div>
              </section> :
              
              <section className="fileUploadWrapperSection" >
                <div className="fileUploadWrapperFileBox" >
                    <img className="fileUploadWrapperFileBoxImg" src={item.previewUrl} />
                    <div className="fileUploadWrapperFileBoxContent" >
                      <div className="fileUploadWrapperFileBoxContentDetails" >
                        <span className="fileUploadWrapperFileBoxContentName" > {item.name}</span>
                        <span className="fileUploadWrapperFileBoxContentSize" > {item.size} </span>
                      </div>

                      {item.status === "error" ? <CancelIcon className="fileUploadWrapperFileBoxContentDone error" /> 
                                               :   <CheckIcon className="fileUploadWrapperFileBoxContentDone" /> } 
                     
                     
                    </div>
                </div>
              </section>
            }
             
          </>
        ))}
      
     
     </div>
   </>
     
  )
}

export default Index;
