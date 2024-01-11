import { useState } from 'react';
import './App.css';
import axios from 'axios';
import React from 'react';
import { Header } from './layout/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Sign } from './pages/Sign';
import { RecoilRoot } from 'recoil';
import { useRecoilValue } from 'recoil';
import {
  User,
  LoginState,
  LoginSession,
  UserSession,
} from './recoil/sign/atoms/loginState';
import { MyPage } from './pages/Mypage';
function App() {
  return (
    <RecoilRoot>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/my" element={<MyPage />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
