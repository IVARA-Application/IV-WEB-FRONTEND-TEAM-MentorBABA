import HomeComp from "./Components/HomeRoute";
import LoginComp from "./Components/LoginRoute";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateAccount from "./Components/CreateAccount";
import StartupNews from "./Components/StartupNews";
import BabaBlogs from "./Components/BabaBlogs";
import EntrepreneurNews from "./Components/EntrepreneurNews";
import BabaStartPage from "./Components/BabaStartPage";
import BabaCubePage from "./Components/BabaCubePage";
import BabaValuatorPage from "./Components/BabaValuatorPage";
import BabaIncPage from "./Components/BabaIncPage";
import ThirdPartyLogin from "./Components/ThirdPartyLogin";

import Business from "./Components/Blogs/Business";
import Objectives from "./Components/Blogs/Objectives";
import Commerce from "./Components/Blogs/Commerce";
import Industry from "./Components/Blogs/Industry";
import Swiggy from "./Components/StartUpNews/Swiggy";
import Oyo from "./Components/StartUpNews/Oyo";
import Ola from "./Components/StartUpNews/Ola";
import PhonePay from "./Components/StartUpNews/PhonePay";
import OyoInfo from "./Components/EntrepreneurNews/OyoInfo";
import Cred from "./Components/EntrepreneurNews/Cred";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <>
          <Route exact path="/">
            <HomeComp />
          </Route>
          <Route exact path="/thirdparty/linkedin">
            <ThirdPartyLogin type="linkedin" />
          </Route>
          <Route exact path="/thirdparty/google">
            <ThirdPartyLogin type="google" />
          </Route>
          <Route exact path="/login">
            <LoginComp />
          </Route>
          <Route exact path="/CreateAccount">
            <CreateAccount />
          </Route>
          <Route exact path="/StartupNews">
            <StartupNews />
          </Route>
          <Route exact path="/BabaBlogs">
            <BabaBlogs />
          </Route>
          <Route exact path="/EntrepreneurNews">
            <EntrepreneurNews />
          </Route>
          <Route exact path="/BabaStart">
            <BabaStartPage />
          </Route>
          <Route exact path="/BabaCube">
            <BabaCubePage />
          </Route>
          <Route exact path="/BabaValuator">
            <BabaValuatorPage />
          </Route>
          <Route exact path="/BabaInc">
            <BabaIncPage />
          </Route>
          <Route exact path="/Objectives">
            <Objectives />
          </Route>
          <Route exact path="/Commerce">
            <Commerce />
          </Route>
          <Route exact path="/Industry">
            <Industry />
          </Route>
          <Route exact path="/Business">
            <Business />
          </Route>
          <Route exact path="/Oyo">
            <Oyo />
          </Route>
          <Route exact path="/Swiggy">
            <Swiggy />
          </Route>
          <Route exact path="/Ola">
            <Ola />
          </Route>
          <Route exact path="/PhonePay">
            <PhonePay />
          </Route>
          <Route exact path="/OyoInfo">
            <OyoInfo />
          </Route>
          <Route exact path="/Cred">
            <Cred />
          </Route>
        </>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
