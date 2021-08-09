//import './App.css';
import { BrowserRouter, Route,Switch, Link } from "react-router-dom";
import Homepage from './containers/Homepage/Homepage';
import Curated from "./containers/CuratedInternship/CuratedInternship";
import GetReferred from "./containers/reference/getReferred";
import About from "./containers/about/about"
import Podcast from "./containers/Podcast/Podcasts"
//ToDo:Dynamic mapping of the pages

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/*<Route exact path="/" component={Homepage}/>
        <Route exact path="/podcast" component={Podcast}/>*/}
        <Route exact path="/" component={GetReferred}/>
        <Route exact path="/internship/curated" component ={Curated}/>
        <Route exact path="/referrals" component={GetReferred}/>
        <Route exact path="/about" component={About}/>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
