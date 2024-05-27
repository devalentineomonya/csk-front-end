import React from "react";
import PublicAppBar from "../../Components/AppBars/PublicAppBar";
import Introduction from "./Introduction/Introduction";
import MLSA from "./MLSA/MLSA";
import GDSC from "./GDSC/GDSC";
import Footer from "../../Components/Footer/Footer";

function AboutUsPage() {
  return (
    <div className="max-width">
      <PublicAppBar />
      <Introduction />
      <MLSA />
      <GDSC />
      <Footer />
    </div>
  );
}

export default AboutUsPage;
