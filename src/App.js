import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Header from './components/Header/Header';
import About from './components/Pages/About/About';
import  Service  from './components/Pages/Service/Service';
import Portfolio from './components/Pages/Portfolio/Portfolio';
import Blog from './components/Pages/Blog/Blog';
import Contact from './components/Pages/Contact/Contact';
import Team from './components/Pages/Team/Team';
import Footer from './components/Footer/Footer';

function App() {

  return (
   <>
   <Header />
   <Routes>
    <Route>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/service' element={<Service />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/team' element={<Team />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
    </Route>
   </Routes>
   <Footer />
   
   
   
   </>
  );
}

export default App;
