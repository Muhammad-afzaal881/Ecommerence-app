import {  Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About'
import Contact from './components/Contact'
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Profile  from './components/Profile';
import Footer from './components/Footer'
import Services from './components/Service'
const App = () => {
  return(
     <div>
      <Navbar/>
      <Sidebar/>
        <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
            <Route path="/Service" element={<Services />} />
         <Route path="/Profile" element={<Profile />} />
      </Routes>
      <Footer/>
     </div>
  )
}

export default App;