import { Routes,Route } from "react-router";
import Home from "./views/pages/Home";
import Story from "./views/pages/Story";
import Contact from "./views/pages/Contact";
import Service from "./views/pages/Service";  
import Navbar from "./views/components/Navbar";
import { Container } from "react-bootstrap";

const App = (props) => {
  return (
    <div>
      <Navbar/>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/service" element={<Service />} />
                  <Route path="/story" element={<Story />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
    
      

    </div>
  );
}
export default App;