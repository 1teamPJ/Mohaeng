import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Header from './pages/Header';
import Layout from './layouts/Layout';
import CheckBoard from './pages/CheckBoard';


import FeedBoard from './pages/FeedBoard';
import './css/feedstyle.css';


function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={ <Header /> } />
          <Route path="checkboard" element={<CheckBoard/>}/>
          <Route path="feedboard" element={<FeedBoard/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
