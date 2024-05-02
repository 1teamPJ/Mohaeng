import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Header from './Header';
import Recommend from './Recommend';
import Testpage from './testpage';
import Layout from './layouts/Layout';


function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route index element={<Layout />}/>
        
        <Route path="/testpage" element={ <Testpage />}/>
        
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
