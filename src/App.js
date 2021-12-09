import React from "react";

import Header from './Header';
import Banner from './Banner';
import About from './About';
import Service from './Service';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';
import PageNotFount from './PageNotFount';
import ApiFunctionComp from "./ApiFunctionComp";
import ApiCrud from './ApiCrud';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import FormValidation from './FormValidation'
function App() {
  return (
    <>



      <Router>
        <Header />
        <Switch>
          <Route exact path="/" >
            <Banner />
          </Route>

          <Route exact path="/about" >
            <About />
          </Route>

          <Route exact path="/service" >
            <Service />
          </Route>

          <Route exact path="/portfolio" >
            <Portfolio />
          </Route>

          <Route exact path="/blog" >
            <Blog />
          </Route>

          <Route exact path="/apiops" >
            <ApiCrud />
          </Route>

          <Route exact path="/contact" >
            <Contact />
          </Route>

          <Route exact path="/product" >
            <ApiFunctionComp />
          </Route>
          
          <Route exact path="*" >
            <PageNotFount />
          </Route>

          

        </Switch>
        <Footer />
      </Router>

      {/* <FormValidation /> */}
    </>
  );
}

export default App;
