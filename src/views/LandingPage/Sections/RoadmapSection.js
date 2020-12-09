import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/introductionStyle.js";
import roadmap from "assets/img/roadmap.png";
import roadmap_svg from "assets/img/roadmap.svg";
import classNames from "classnames";


const useStyles = makeStyles(styles);

export default function TokenintroSection() {
  const classes = useStyles();
  const imageClasses = classNames(
      classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.mainTitle}>Roadmap</h2>
          <img src={roadmap_svg} alt="..." className={imageClasses} />
        </GridItem>
      </GridContainer>
    </div>
  );
}
