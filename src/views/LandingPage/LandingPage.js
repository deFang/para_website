import React from "react";
import ReactGA from 'react-ga';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import {Helmet} from 'react-helmet'
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import TokenintroSection from "./Sections/TokenintroSection.js";
import TokendistSection from "./Sections/TokendistSection.js";
import RoadmapSection from "./Sections/RoadmapSection.js";
import IntroductionSection from "./Sections/IntroductionSection.js";
import HowtoworkSection from "./Sections/HowtoworkSection.js";


const dashboardRoutes = [];

const useStyles = makeStyles(styles);
const initGA = () => {
    ReactGA.initialize('UA-184765568-1'); // put your tracking id here
};

export default function LandingPage(props) {
  const classes = useStyles();
  ReactGA.initialize('UA-184765568-1');
  ReactGA.pageview('/landingpage');
  const { ...rest } = props;
  console.log('I was triggered during render');
  return (
    <div>
        <Helmet>
          <title>Parapara | Derivative DEX for Any Asset</title>
        </Helmet>
        {/*<Helmet>*/}
        {/*    <style>{'body { background-color: black; }'}</style>*/}
        {/*</Helmet>*/}
        {/*<div style={{ background: `url(${background})` }}>*/}
        {/*<div style={{ backgroundColor: "#d1fdfe"}}>*/}
        <div style={{ backgroundColor: "white", paddingBottom: "5%"}}>
          <div style={{position:"absolute", backgroundColor:"#d1fdfe", height:"100%",  top:"5%", left:"25%", right:"50%", zIndex:"0"}}>
          </div>
          <div style={{position:"absolute", backgroundColor:"#fedcd1", height:"100%",  top:"5%", right:"25%", left:"50%", zIndex:"0"}}>
          </div>
          <Header
            color="white"
            routes={dashboardRoutes}
            brand=""
            rightLinks={<HeaderLinks />}
            // fixed
            // changeColorOnScroll={{
            //   height: 400,
            //   color: "white"
            // }}
            style={{paddingBottom:"5em", zIndex:"1"}}
            {...rest}
          />
        <div className={classes.container} style={{marginTop:"5em", }}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <h1 className={classes.title} style={{color:"#000", fontSize: "400%", fontFamily: "Roboto"}}>
                    <span style={{fontSize: "120%", color:"#548ff7", fontFamily:"Aharoni"}}>parapara</span>
                    <br />a decentralized way to gain exposure to any asset.</h1>
              <h2 style={{color:"#3C4858", fontSize: "200%", fontFamily: "Roboto"}}>
              </h2>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Get PARA tokens
              </Button>
              <br />
            </GridItem>
          </GridContainer>
        </div>

      </div>
      <div className={classNames(classes.main)} style={{ backgroundColor: "white"}}>
        <div className={classes.contentContainer} style={{width: "100%"}}>
          <IntroductionSection />
        </div>
      </div>
      <div className={classNames(classes.main)} style={{ backgroundColor: "#d1fdfe" }}>
        <div className={classes.container} style={{width: "100%"}}>
          <HowtoworkSection />
        </div>
      </div>
      <div className={classNames(classes.main)} style={{ backgroundColor: "white" }}>
        <div className={classes.container} style={{width: "100%"}}>
          <TokenintroSection />
        </div>
      </div>
      <div className={classNames(classes.main)} style={{ backgroundColor: "#d1fdfe" }}>
        <div className={classes.container} style={{width: "100%"}}>
          <TokendistSection />
        </div>
      </div>
      <div className={classNames(classes.main)} style={{ backgroundColor: "white" }}>
        <div className={classes.container} style={{width: "100%"}}>
          <RoadmapSection />
        </div>
      </div>
      <div className={classNames(classes.main)} style={{ backgroundColor: "#d1fdfe" }}>
        <div className={classes.container} style={{width: "100%"}}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
