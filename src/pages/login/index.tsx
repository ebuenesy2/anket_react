import "./index.css";
import React, { useState } from 'react';

//! Metariul
import TextField from "@material-ui/core/TextField";
import { Button, Paper, Typography } from "@material-ui/core";

//! Icon
import VisibilityIcon from '@material-ui/icons/Visibility';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import SaveIcon from '@material-ui/icons/Save';
import axios from "axios";



function Index() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
    console.log("checked:",checked);
  };

  //! Login
  const [valueUserName, setValueUserName] = React.useState(''); //! UserName
  const [valuePassword, setValuePassword] = React.useState(''); //! Password
  const [valueShowPassword, setShowValuePassword] = React.useState(false); //! Password Show

  const handleValueUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => { setValueUserName(event.target.value); }; //! UserName
  const handleValuePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => { setValuePassword(event.target.value); }; //! Password
  const handleClickShowPassword = () => { setShowValuePassword(!valueShowPassword); }; //! Password Show

  //! SingUp
  const [valueNameSingUp, setValueNameSingUp] = React.useState(''); //! UserName




  //! Api State
  const [LoginSuccess, setLoginSuccess] = useState(0);
  const [tableLoginData, setTableLoginData] = useState<any[]>([])

  const login = () => {
      
    const apiUrl_table=process.env.REACT_APP_API_URL+"/api/user/loginOnline";
    console.log("apiUrl_table:",apiUrl_table);

     //Eklenen Veriler
     const NewData={
      serverToken:"yildirimdev",
      email: valueUserName,
      password: valuePassword
    }

    console.log("NewData:",NewData);

    axios.post(apiUrl_table,NewData)
    .then(response => {

      //! State
      
      setTableLoginData(response.data.DB);
      console.log("Data:",response.data);
     
      
      setLoginSuccess(response.data.status); //! Başarılı

      if(response.data.status ==1) {
         alert("Kullanıcı Girişi oldu");

         //! window.location.href ="/survey"; //! Sayfa Yönledirme
      }
      
        
    })
    .catch(error => {  console.log("Api Error:",error.message); });

      
  } //! Login


  const signup = () => {

    alert("kayıt ol");

  } //! signup
    
  return (
        <div className='login'>
         
           <div className="main">

               <div className={`loginPanel ${checked ? 'active' : ''}`}>
                  <a onClick={handleChange} className="title"> Login </a>

                  <div className={`loginControlPanel ${checked ? 'active' : ''}`}>

                  
                  <Paper style={{ width:"250px",  outline:"auto" }} >

                      <Typography
                        style={{ display:LoginSuccess == 1 ? "none" : "flex", justifyContent:"center", background:"red", color:"white" }}
                        color="textSecondary"
                        variant="caption"
                      >
                      {LoginSuccess ? "Başarılı Giriş Oldu" : "Hatalı Giriş Oldu"}
                    </Typography>
                    
                    </Paper>
                                          
                    <Paper style={{ width:"250px", borderRadius:"18px", outline:"auto" }} >

                      <TextField
                          fullWidth
                          id="filled-multiline-flexible"
                          label="Email"
                          type={'text'}
                          maxRows={3}
                          value={valueUserName}
                          onChange={handleValueUserNameChange}
                          variant="filled"
                          required
                        />
                    </Paper>

                    <Paper style={{ width:"250px", borderRadius:"18px", outline:"auto", display:"flex" }} >
                        <TextField
                          fullWidth
                          id="filled-multiline-flexible"
                          label="Password"
                          type={valueShowPassword ? 'text' : 'password'}
                          maxRows={3}
                          value={valuePassword}
                          onChange={handleValuePasswordChange}
                          variant="filled"
                          required
                        />
                      <VisibilityIcon onClick={handleClickShowPassword} style={{ marginTop:"15px", cursor:"pointer" }} />
                      
                   </Paper>

                   <Button
                    variant="contained"
                    style={{ background:"#573b8a", color:"#fff", borderRadius:"8px"}}
                    onClick={() => {  login();  } }
                    startIcon={<LockOpenIcon />}
                  >
                    Login
                  </Button>                  

                  </div>  

               </div>

              <div className={`signupPanel ${checked ? 'active' : ''}`}>
                   <a onClick={handleChange}  className={`title ${checked ? 'active' : ''}`}> Sign Up </a>
                    
                   <div className={`loginControlPanel ${checked == false ? 'active' : ''}`}>

                   <div style={{ display:"flex", width:"430px", justifyContent:"space-between" , marginTop:"-10px" }} >
                      <Paper style={{ width:"200px", borderRadius:"18px", outline:"auto" }} >
                        <TextField
                            fullWidth
                            id="filled-multiline-flexible"
                            label="Username"
                            type={'text'}
                            maxRows={3}
                            value={valueUserName}
                            onChange={handleValueUserNameChange}
                            variant="filled"
                            required
                          />
                      </Paper>

                      <Paper style={{ width:"200px", borderRadius:"18px", outline:"auto" }} >
                        <TextField
                            fullWidth
                            id="filled-multiline-flexible"
                            label="Username"
                            type={'text'}
                            maxRows={3}
                            value={valueUserName}
                            onChange={handleValueUserNameChange}
                            variant="filled"
                            required
                          />
                      </Paper>
                    </div>

                    <div style={{ display:"flex", width:"430px", justifyContent:"space-between", marginTop:"-10px" }} >
                      <Paper style={{ width:"200px", borderRadius:"18px", outline:"auto" }} >
                        <TextField
                            fullWidth
                            id="filled-multiline-flexible"
                            label="Username"
                            type={'text'}
                            maxRows={3}
                            value={valueUserName}
                            onChange={handleValueUserNameChange}
                            variant="filled"
                            required
                          />
                      </Paper>

                      <Paper style={{ width:"200px", borderRadius:"18px", outline:"auto" }} >
                        <TextField
                            fullWidth
                            id="filled-multiline-flexible"
                            label="Username"
                            type={'text'}
                            maxRows={3}
                            value={valueUserName}
                            onChange={handleValueUserNameChange}
                            variant="filled"
                            required
                          />
                      </Paper>
                    </div>

                    <div style={{ display:"flex", width:"430px", justifyContent:"space-between", marginTop:"-10px" }} >
                      <Paper style={{ width:"200px", borderRadius:"18px", outline:"auto" }} >
                        <TextField
                            fullWidth
                            id="filled-multiline-flexible"
                            label="Username"
                            type={'text'}
                            maxRows={3}
                            value={valueUserName}
                            onChange={handleValueUserNameChange}
                            variant="filled"
                            required
                          />
                      </Paper>

                      <Paper style={{ width:"200px", borderRadius:"18px", outline:"auto", display:"flex" }} >
                        <TextField
                          fullWidth
                          id="filled-multiline-flexible"
                          label="Password"
                          type={valueShowPassword ? 'text' : 'password'}
                          maxRows={3}
                          value={valuePassword}
                          onChange={handleValuePasswordChange}
                          variant="filled"
                          required
                        />
                        <VisibilityIcon onClick={handleClickShowPassword} style={{ marginTop:"15px", cursor:"pointer" }} />
                        
                      </Paper>
                    </div>

                     

                      <Button
                        variant="contained"
                        style={{ background:"#573b8a", color:"#fff", borderRadius:"8px"}}
                        onClick={() => { signup(); } }
                        startIcon={<SaveIcon />}
                      >
                        Sign Up
                      </Button>                  

                    </div>  
                                        
              </div>

              
           </div>

        </div>
    
  )
}

export default Index;
