
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';


import HomePages from './components/HomeComponent/HomePages';
import DataEngineering from './RedirectServicespage/DataEngineering';
import BankingIndustry from './pages/IndustryAllPages/BankingIndustry';


import Blogpagedata from './pages/BlogsPage/Blogpage_all';
import Successdatapage from './pages/SuccessRedirectpage/Successdatapage';
import Aboutpage from './pages/AboutusMainpage/Aboutpage';
import HealthcareInd from './pages/Healthcare&lifeScience/HealthcareInd';
import DigitalEngineering from './RedirectServicespage/DigitalEngineering';
import CloudEngineering from './RedirectServicespage/CloudEngineering';
import Consulting from './RedirectServicespage/Consulting';
import TravelTransportation from './pages/Healthcare&lifeScience/TravelTransportation';
import Telecom from './pages/Healthcare&lifeScience/Telecom';
import RetailConsumer from './pages/Financial/RetailConsumer';
import InduatrialGoods from './pages/Healthcare&lifeScience/InduatrialGoods';

function App() {
  return (
    <div className="App">
      <Router>
     <Header/>
      <Routes>
         <Route path='/' element={<HomePages />} />   
         <Route path='/dataeng' element={<DataEngineering />} />  

         <Route path='/digitaleng' element={<DigitalEngineering />} />  

          <Route path='/cloudeng' element={<CloudEngineering />} /> 
          <Route path='/consulty' element={<Consulting />} />  

         <Route path='/banking&insurance' element={<BankingIndustry />} /> 
         <Route path='/blog' element={<Blogpagedata />} /> 

         <Route path='/success_stories' element={<Successdatapage/>} /> 
         
         <Route path='/abouts' element={<Aboutpage/>} /> 
         <Route path='/healthcare&lifescience' element={<HealthcareInd/>} /> 
         <Route path='/travel&transportation' element={<TravelTransportation/>} /> 
         <Route path='/telecom&media' element={<Telecom/>} /> 
         <Route path='/retail&gooods' element={<RetailConsumer/>} />
         <Route path='/Industrialgood' element={<InduatrialGoods/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
