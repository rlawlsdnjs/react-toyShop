import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Sign } from './pages/Sign';
import { RecoilRoot } from 'recoil';
import { MyPage } from './pages/Mypage';
import { Home } from './pages/Home';
import { Suspense } from 'react';
import { Loading } from './components/common/loading';
import { Admin } from './pages/Admin';
import { Wrap } from './components/common/wrap';
import { Visual } from './layout/visual';
import { Footer } from './layout/footer';

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<Loading />}>
        <Home />
        <Routes>
          <Route path="/" element={<Visual></Visual>}></Route>
        </Routes>
        <Wrap>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/sign" element={<Sign />} />
            <Route path="/my" element={<MyPage />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Wrap>
        <Footer></Footer>
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
