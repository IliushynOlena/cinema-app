import './App.css';
import About from './components/About';
import Home from './components/Home';
import Menu from './components/Menu';
import NotFound from './components/NotFound';
import Privacy from './components/Privacy';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header >
       <h2>Hello React</h2>
       <Menu/>
      </header>
      <main>  

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
       </Routes>

       

      </main>
    </div>
  );
}

export default App;
