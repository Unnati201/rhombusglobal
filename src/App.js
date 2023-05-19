
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';


import HomePages from './components/HomeComponent/HomePages';

function App() {
  return (
    <div className="App">
      <Router>
     <Header/>
      <Routes>
         <Route path='/' element={<HomePages />} />   
         
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
