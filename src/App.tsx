import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Sign } from './pages/Sign';
import { RecoilRoot } from 'recoil';
import { MyPage } from './pages/Mypage';
import { Home } from './Home';
import { Suspense } from 'react';
import { Loading } from './components/common/loading';
import { Admin } from './pages/Admin';

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<Loading />}>
        <Home />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/my" element={<MyPage />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
