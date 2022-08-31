import React from "react";
import LandingSeven from "pages/LandingSeven";
import ComingSoonTwo from "pages/ComingSoonTwo";
import Career from "pages/Career";
import LandingTwo from "pages/LandingTwo";
import CareerDetails from "pages/CareerDetails";
import LandingSix from "pages/LandingSix";
import LandingThree from "pages/LandingThree";
import LandingFive from "pages/LandingFive";
import LandingFour from "pages/LandingFour";
import LandingOne from "pages/LandingOne";
import Reviews from "pages/Reviews";
import Aboutus from "pages/Aboutus";
import FAQ from "pages/FAQ";
import ContactTwo from "pages/ContactTwo";
import Thankyou from "pages/Thankyou";
import TermsandConditions from "pages/TermsandConditions";
import SignInImage from "pages/SignInImage";
import CaseStudy from "pages/CaseStudy";
import SignIn from "pages/SignIn";
import PricingOne from "pages/PricingOne";
import ContactOne from "pages/ContactOne";
import BlogThree from "pages/BlogThree";
import CaseStudyDetails from "pages/CaseStudyDetails";
import BlogOne from "pages/BlogOne";
import PricingTwo from "pages/PricingTwo";
import BlogTwo from "pages/BlogTwo";
import Page from "pages/Page";
import ContactThree from "pages/ContactThree";
import BlogDetails from "pages/BlogDetails";
import ComingSoonOne from "pages/ComingSoonOne";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/comingsoonone" element={<ComingSoonOne />} />
        <Route path="/blogdetails" element={<BlogDetails />} />
        <Route path="/contactthree" element={<ContactThree />} />
        <Route path="/page" element={<Page />} />
        <Route path="/blogtwo" element={<BlogTwo />} />
        <Route path="/pricingtwo" element={<PricingTwo />} />
        <Route path="/blogone" element={<BlogOne />} />
        <Route path="/casestudydetails" element={<CaseStudyDetails />} />
        <Route path="/blogthree" element={<BlogThree />} />
        <Route path="/contactone" element={<ContactOne />} />
        <Route path="/pricingone" element={<PricingOne />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/casestudy" element={<CaseStudy />} />
        <Route path="/signinimage" element={<SignInImage />} />
        <Route path="/termsandconditions" element={<TermsandConditions />} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="/contacttwo" element={<ContactTwo />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/landingone" element={<LandingOne />} />
        <Route path="/landingfour" element={<LandingFour />} />
        <Route path="/landingfive" element={<LandingFive />} />
        <Route path="/landingthree" element={<LandingThree />} />
        <Route path="/landingsix" element={<LandingSix />} />
        <Route path="/careerdetails" element={<CareerDetails />} />
        <Route path="/landingtwo" element={<LandingTwo />} />
        <Route path="/career" element={<Career />} />
        <Route path="/comingsoontwo" element={<ComingSoonTwo />} />
        <Route path="/landingseven" element={<LandingSeven />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
