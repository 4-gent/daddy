import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './main'
import Login from './routes/login'
import Registration from './routes/register'
import Phone from './routes/phone';
import FaceToFace from './routes/faceToFace';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Registration />} />
        <Route exact path="/phone" element={<Phone />} />
        <Route exact path="/facetoface" element={<FaceToFace />} />
      </Routes>
    </Router>
  );
}

