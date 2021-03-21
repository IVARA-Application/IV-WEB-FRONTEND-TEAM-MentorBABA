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
import BabaNews from "./BabaNews";
import Footer from "./Footer";

function HomeComp() {
  return (
    <>
      <MentorBaba />
      <Entrepreneurs />
      <KnowYourBaba />
      <BabaNews />
      <BabaStart />
      <BabaCube />
      <BabaValuator />
      <BabaInc />
      <ContactUs />
      <Footer />
    </>
  );
}

export default withRouter(HomeComp);
