import "./index.css";
import React from 'react';

//! Metariul
import TextField from "@material-ui/core/TextField";
import { Button, Paper } from "@material-ui/core";

//! Icon
import VisibilityIcon from '@material-ui/icons/Visibility';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import SaveIcon from '@material-ui/icons/Save';


function Index() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
    console.log("checked:",checked);
  };

  const [valueUserName, setValueUserName] = React.useState(''); //! UserName
  const [valuePassword, setValuePassword] = React.useState(''); //! Password
  const [valueShowPassword, setShowValuePassword] = React.useState(true); //! Password Show

  const handleValueUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => { setValueUserName(event.target.value); }; //! UserName
  const handleValuePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => { setValuePassword(event.target.value); }; //! Password
  const handleClickShowPassword = () => { setShowValuePassword(!valueShowPassword); }; //! Password Show
    
  return (
        <div className='login'>
         
           <div className="main">

               <div className={`loginPanel ${checked ? 'active' : ''}`}>
                  <a onClick={handleChange} className="title"> Login </a>

                  <div className={`loginControlPanel ${checked ? 'active' : ''}`}>

                    <Paper style={{ width:"250px", borderRadius:"18px", outline:"auto" }} >
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
                    onClick={() => { alert("tıklandı"); } }
                    startIcon={<LockOpenIcon />}
                  >
                    Login
                  </Button>                  

                  </div>  

               </div>

              <div className={`signupPanel ${checked ? 'active' : ''}`}>
                   <a onClick={handleChange}  className={`title ${checked ? 'active' : ''}`}> Sign Up </a>
                    
                   <div className={`loginControlPanel ${checked == false ? 'active' : ''}`}>

                    <div style={{ display:"flex", width:"430px", justifyContent:"space-between", marginTop:"-34px"}} >
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

                    <div style={{ display:"flex", width:"430px", justifyContent:"space-between"}} >
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

                    <div style={{ display:"flex", width:"430px", justifyContent:"space-between"}} >
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

                     

                      <Button
                        variant="contained"
                        style={{ background:"#573b8a", color:"#fff", borderRadius:"8px"}}
                        onClick={() => { alert("tıklandı"); } }
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
