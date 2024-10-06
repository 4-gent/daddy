import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './main'
import Login from './routes/login'
import Registration from './routes/register'
import Phone from './routes/phone'
import FaceToFace from './routes/faceToFace'
import Mainscreen from './routes/mainscreen'
import Call from './routes/callphone';
import { getAccessToken } from './routes/hume';
import ClientComponent from './routes/clientComponent';

export default function App() {

  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    getAccessToken().then((token) => setAccessToken(token));
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Registration />} />
        <Route exact path="/phone" element={<Phone />} />
        <Route path="/" element={<ClientComponent accessToken={accessToken} />} />
        <Route exact path="/facetoface" element={<FaceToFace />} />
        <Route exact path="/mainscreen" element={<Mainscreen/>} />
        <Route exact path="/callphone" element={<Call/>}/>
      </Routes>
    </Router>
  );
}

