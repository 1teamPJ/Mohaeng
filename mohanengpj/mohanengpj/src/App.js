import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Header from './pages/Header';
import Layout from './layouts/Layout';
import CheckBoard from './pages/CheckBoard';
function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={ <Header /> } />
          <Route path="checkboard" element={<CheckBoard/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
