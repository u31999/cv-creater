import './App.css';
import Header from "./component/Header";
import { BrowserRouter } from "react-router-dom";
import Body from './component/Body';
import Footer from './component/Footer';
function App() {
  return (
    <div className='app'>
    <BrowserRouter>
    <Header />
        <Body />
    </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;
