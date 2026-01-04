import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/index.js';
import Home from './components/Home';
import About from './components/About/index.js'; 
import Contact from './components/Contact/index.js';
import Work from './components/Work/index.js';
import Projects from './components/Projects/index.js';
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Layout />}>
          <Route index element = {<Home />}/>
          <Route path =  "about" element = {<About />}/>
          <Route path="work" element={<Work />} />
          <Route path =  "contact" element = {<Contact />}/>
          <Route path = "projects" element = {<Projects />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
