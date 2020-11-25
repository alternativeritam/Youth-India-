import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './components/Home';
import BoardOfAdvisors from './components/BoardOfAdvisors';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import { Switch, Route, Redirect } from 'react-router-dom';
import Campaigns from './components/campaigns';
import MentalHealthServices from './components/MentalHealthServices';
import Internships from './components/Internships';
import AboutCells from './components/AboutCells';
import Webinars from './components/Webinars';
import SocialFollow from './components/SocialFollow';
import './components/ReachOut.css';
import ScrollToTop from 'react-router-scroll-top';
import chatbot from './components/chatbot';

const App = () => {
  return (
      <>
      <NavBar/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/boardofadvisors" component={BoardOfAdvisors}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/campaigns" component={Campaigns}/>
      <Route exact path="/mentalhealthservices" component={MentalHealthServices}/>
      <Route exact path="/internships" component={Internships}/>
      <Route exact path="/webinars" component={Webinars}/>
      <Route exact path="/aboutcells" component={AboutCells}/>
      <Route exact path="/chatbot" component={chatbot}/>
      <Redirect to="/"/>
      <Home/>
      </Switch>
<SocialFollow />
<p className="copywrite"> &copy; 2020 by Youth India Foundation</p>
<ScrollToTop/>
      </>
  );
};

export default App;
