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
import ClientComponent from './components/humeClient';

export default function App() {

  // const [accessToken, setAccessToken] = useState(null);

  // useEffect(() => {
  //   try {
  //     getAccessToken().then((token) => {
  //       if (token) {
  //         setAccessToken(token);
  //         console.log('Access token:', token);
  //       }
  //     });
  //   } catch (error) {
  //     console.error('Error getting access token:', error);
  //   }
  // }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Registration />} />
        <Route exact path="/phone" element={<Phone />} />
        <Route path="/" element={<ClientComponent />} />
        <Route exact path="/facetoface" element={<FaceToFace />} />
        <Route exact path="/mainscreen" element={<Mainscreen/>} />
        <Route exact path="/callphone" element={<Call/>}/>
      </Routes>
    </Router>
  );
}

