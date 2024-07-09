import Page1 from "./pages/Page1"
import Page2 from "./pages/Page2"
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Header from "./components/Header";
import './App.css';








function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Route>

     
    </Routes>

    </BrowserRouter>
  );
}

export default App;
