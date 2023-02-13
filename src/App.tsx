import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/notfound';
import Home from './pages/home';
import Widgets from './pages/widgets';
import Widgets2 from './pages/widgets2';
import MyColor from './pages/mycolor';
import Login from './pages/login';
import Users from './pages/users';
import Clients from './pages/clients';
import Question from './pages/question';
import Message from './pages/message';
import Gallery from './pages/gallery';
import Logs from './pages/logs';

import Setting from './pages/setting';


 export default function App() {
  return (
    
    <React.Fragment>
      <Routes>
          <Route path="*" element={<NotFound/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/widgets" element={<Widgets/>} />
          <Route path="/widgetstwo" element={<Widgets2/>} />
          <Route path="/mycolor" element={<MyColor/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/clients" element={<Clients/>} />
          <Route path="/question" element={<Question/>} />
          <Route path="/message" element={<Message/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/logs" element={<Logs/>} />
         
          <Route path="/setting" element={<Setting/>} />
         
       </Routes>
    </React.Fragment>
  );
}

