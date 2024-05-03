import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Header from './pages/Header';
import Layout from './layouts/Layout';

import CbLayout from './layouts/CbLayout';



// import TravelRecommendations from './pages/TravelRecommendations';
import TravelRecommendations from './pages/TravelRecommandations';
import './css/travelstyle.css';



import FeedBoard from './pages/FeedBoard';
import './css/feedstyle.css';




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


        </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
