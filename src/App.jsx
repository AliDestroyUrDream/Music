import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Art from './components/Art/Art';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <Header />
      <Footer />
      <Body />
      <div className='app-cont'>  
         <Routes>
                 <Route path="/art" element= {<Art/>}/>
                 <Route path="/Body" element= {<Body/>}/>
             </Routes>
      </div>
      </div>
      </BrowserRouter>
   
      
  );
}

export default App;
