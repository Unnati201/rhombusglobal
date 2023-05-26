
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';


import HomePages from './components/HomeComponent/HomePages';
import DataEngineering from './RedirectServicespage/DataEngineering';
import BankingIndustry from './pages/IndustryAllPages/BankingIndustry';


import Blogpagedata from './pages/BlogsPage/Blogpage_all';
import Successdatapage from './pages/SuccessRedirectpage/Successdatapage';
import Aboutpage from './pages/AboutusMainpage/Aboutpage';

function App() {
  return (
    <div className="App">
      <Router>
     <Header/>
      <Routes>
         <Route path='/' element={<HomePages />} />   
         <Route path='/dataeng' element={<DataEngineering />} />   
         <Route path='/banking' element={<BankingIndustry />} /> 
         <Route path='/blog' element={<Blogpagedata />} /> 

         <Route path='/success_stories' element={<Successdatapage/>} /> 
         
         <Route path='/abouts' element={<Aboutpage/>} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
