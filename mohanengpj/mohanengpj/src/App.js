import { BrowserRouter, Routes, Route } from 'react-router-dom' 

import Layout from './layouts/Layout';


function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route index element={<Layout />}/>
        
        
        
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
