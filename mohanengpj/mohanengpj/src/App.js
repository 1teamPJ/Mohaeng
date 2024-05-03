import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Header from './pages/Header';
import Layout from './layouts/Layout';
import CheckBoard from './pages/CheckBoard';
// import TravelRecommendations from './pages/TravelRecommendations';
import TravelRecommendations from './pages/TravelRecommandations';
import './css/travelstyle.css';

function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={ <Header /> } />
          <Route path="checkboard" element={<CheckBoard/>}/>
          <Route path="travelboard" element={<TravelRecommendations/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
