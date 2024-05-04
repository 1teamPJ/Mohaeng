import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Header from './pages/Header';
import Layout from './layouts/Layout';



//체크보드
import CbLayout from './layouts/CbLayout';


// 트레블 보드
import TravelRecommendations from './pages/TravelRecommandations';
import './css/travelstyle.css';


//피드 보드 
import FeedBoard from './pages/FeedBoard';
import './css/feedstyle.css';

//푸터 
import Footer from './pages/Footer';



function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={ <Header /> } />
          <Route path="checkboard" element={<CbLayout/>}/>
          <Route path="travelboard" element={<TravelRecommendations/>}/>
          <Route path="feedboard" element={<FeedBoard/>}/>
          <Route index element={<Footer />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
