import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Header from './pages/Header';
import Layout from './layouts/Layout';
import CbLayout from './layouts/CbLayout';

function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={ <Header /> } />
          <Route path="checkboard" element={<CbLayout/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
