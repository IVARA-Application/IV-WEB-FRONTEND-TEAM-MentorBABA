import React from "react";
import { withRouter } from "react-router-dom";

import BabaStart from "./BabaStart";
import BabaCube from "./BabaCube";
import BabaValuator from "./BabaValuator";
import ContactUs from "./ContactUS";
import KnowYourBaba from "./KnowYourBaba";
import BabaInc from "./BabaInc";
import MentorBaba from "./MentorBaba";
import Entrepreneurs from "./Entrepreneurs";
import BabaPsy from "./BabaPsy";
import BabaNews from "./BabaNews";
import Footer from "./Footer";
import NavBar from "./NavBar";
import ChatBox from "../ChatBox/Connections";

function HomeComp() {
  return (
    <div>
      {/* <NavBar />
      <MentorBaba />
      <Entrepreneurs />
      <KnowYourBaba />
      <BabaNews />
      <BabaStart />
      <BabaCube />
      <BabaPsy />
      <BabaValuator />
      <BabaInc />
      <ContactUs />
      <Footer /> */}
      <ChatBox />
    </div>
  );
}

export default withRouter(HomeComp);
