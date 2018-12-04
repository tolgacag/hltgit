import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
// import ContentCopy from "@material-ui/icons/ContentCopy";
import Store from "@material-ui/icons/Store";
// import InfoOutline from "@material-ui/icons/InfoOutline";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Refresh from "@material-ui/icons/Refresh";
import Edit from "@material-ui/icons/Edit";
import Place from "@material-ui/icons/Place";
import ArtTrack from "@material-ui/icons/ArtTrack";
import Language from "@material-ui/icons/Language";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";

import final_01 from "images/final_01.jpg";
import final_02 from "images/final_02.jpg";
import final_03 from "images/final_03.jpg";
import final_04 from "images/final_04.jpg";
import final_05 from "images/final_05.jpg";
import final_06 from "images/final_06.jpg";
import final_07 from "images/final_07.jpg";
import final_08 from "images/final_08.jpg";
import final_09 from "images/final_09.jpg";
import final_10 from "images/final_10.jpg";
import final_11 from "images/final_11.jpg";
import final_12 from "images/final_12.jpg";
import final_13 from "images/final_13.jpg";
import final_14 from "images/final_14.jpg";
import final_15 from "images/final_15.jpg";
import final_16 from "images/final_16.jpg";
import final_17 from "images/final_17.jpg";
import final_18 from "images/final_18.jpg";
import final_19 from "images/final_19.jpg";
import final_20 from "images/final_20.jpg";
import final_21 from "images/final_21.jpg";
import final_22 from "images/final_22.jpg";
import final_23 from "images/final_23.jpg";
import final_24 from "images/final_24.jpg";




class MainMenu extends React.Component {
 
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} lg={12}>
          <div style={{"max-width":"1200px"}}>

         <table width="%100" border="0" cellspacing="0" cellpadding="0">
  
    <tr>
      <td><a href="/pazarlama"><img src={final_01} alt="..." width="100%"/></a></td>
      <td><img src={final_02} alt="..." width="100%"/></td>
      <td><img src={final_03} alt="..." width="100%"/></td>
      <td><img src={final_04} alt="..." width="100%"/></td>
      <td><img src={final_05} alt="..." width="100%"/></td>
      <td><a href="/projeler"><img src={final_06} alt="..." width="100%"/></a></td>
    </tr>
    <tr>
      <td><img src={final_07} alt="..." width="100%"/></td>
      <td><a href="/brief"><img src={final_08} alt="..." width="100%"/></a></td>
      <td><img src={final_09} alt="..." width="100%"/></td>
      <td><img src={final_10} alt="..." width="100%"/></td>
      <td><a href="/performans"><img src={final_11} alt="..." width="100%"/></a></td>
      <td><img src={final_12} alt="..." width="100%"/></td>
    </tr>
    <tr>
     <td><a href="/musteri"><img src={final_13} alt="..." width="100%"/></a></td>
      <td><img src={final_14} alt="..." width="100%"/></td>
      <td><img src={final_15} alt="..." width="100%"/></td>
      <td><img src={final_16} alt="..." width="100%"/></td>
      <td><img src={final_17} alt="..." width="100%"/></td>
      <td><a href="/tasarim"><img src={final_18} alt="..." width="100%"/></a></td>
    </tr>
    <tr>
     <td><img src={final_19} alt="..." width="100%"/></td>
      <td><a href="/tedarikciler"><img src={final_20} alt="..." width="100%"/></a></td>
      <td><a href="/teklifler"><img src={final_21} alt="..." width="100%"/></a></td>
      <td><a href="/takvim"><img src={final_22} alt="..." width="100%"/></a></td>
      <td><a href="/tahsilat"><img src={final_23} alt="..." width="100%"/></a></td>
      <td><img src={final_24} alt="..." width="100%"/></td>
    </tr>
 
</table>

           

         

         </div>
         

          </GridItem>

        </GridContainer>

       
      </div>
    );
  }
}

MainMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(MainMenu);
