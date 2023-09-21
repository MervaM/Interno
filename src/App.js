import {Routes, Route} from 'react-router-dom';

import {Header} from './layout/Header';
import {Main} from './pages/Main';
import {Footer} from './layout/Footer';
import { AboutUs } from './pages/AboutUs';
import {Services} from './pages/Servises';
import {Project} from "./pages/Project";
import {Contact} from "./pages/Contacts";

function App() {
  return (
    <>
      <Header />
      {/* <Main/> */}
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
