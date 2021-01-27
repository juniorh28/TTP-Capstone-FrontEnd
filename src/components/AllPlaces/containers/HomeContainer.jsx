import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import RoutesContainer from "../routes/RoutesContainer";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Typography } from "@material-ui/core";
import MuseumRoundedIcon from "@material-ui/icons/MuseumRounded";
import RestaurantRoundedIcon from "@material-ui/icons/RestaurantRounded";
import LocalFloristRoundedIcon from "@material-ui/icons/LocalFloristRounded";

const styles = {
  homepage: {
    height: 1356,
  },
  mainSection: {
    align: "center",
  },
  section: {
    alignItems: "center",
  },
  button: {
    margin: "10px",
    size: "large",
  },
  container: {
    display: "flex",
    alignItems: "space-between",
  },
};

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <AppBar>
          <ToolBar>
            <Typography variant="h4">Yorkify</Typography>
            <Button variant="contained">Login</Button>
            <Button variant="contained">Sign Up</Button>
          </ToolBar>
        </AppBar>
        <div className="homepage" style={styles.homepage}>
          <Typography variant="h2">Best Places in NYC</Typography>
          <Grid
            container
            spacing={6}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item>
              <Typography variant="h4" align="center">
                View
              </Typography>
              <Link to="/all">
                <Button
                  variant="contained"
                  color="primary"
                  style={styles.button}
                  size="large"
                >
                  All Places in NYC
                </Button>
              </Link>
            </Grid>

            <Grid item style={styles.section}>
              <Typography variant="h4" align="center">
                Categories
              </Typography>

              <Link to="/categories/art">
                <Button
                  variant="contained"
                  color="primary"
                  style={styles.button}
                  size="large"
                  startIcon={<MuseumRoundedIcon />}
                >
                  Art
                </Button>
              </Link>
              <Link to="/categories/food">
                <Button
                  variant="contained"
                  color="primary"
                  style={styles.button}
                  size="large"
                  startIcon={<RestaurantRoundedIcon />}
                >
                  Food
                </Button>
              </Link>
              <Link to="/categories/parks">
                <Button
                  variant="contained"
                  color="primary"
                  style={styles.button}
                  size="large"
                  startIcon={<LocalFloristRoundedIcon />}
                >
                  Parks
                </Button>
              </Link>
            </Grid>

            <Grid item>
              <Typography variant="h4" align="center">
                Boroughs
              </Typography>
              <Link to="/boroughs/brooklyn">
                <Button
                  variant="contained"
                  color="primary"
                  style={styles.button}
                  size="large"
                >
                  Brooklyn
                </Button>
              </Link>
              <Link to="/boroughs/manhattan">
                <Button
                  variant="contained"
                  color="primary"
                  style={styles.button}
                  size="large"
                >
                  Manhattan
                </Button>
              </Link>
              <Link to="/boroughs/queens">
                <Button
                  variant="contained"
                  color="primary"
                  style={styles.button}
                  size="large"
                >
                  Queens
                </Button>
              </Link>
              <Link to="/boroughs/bronx">
                <Button
                  variant="contained"
                  color="primary"
                  style={styles.button}
                  size="large"
                >
                  The Bronx
                </Button>
              </Link>
              <Link to="/boroughs/statenisland">
                <Button
                  variant="contained"
                  color="primary"
                  style={styles.button}
                  size="large"
                >
                  Staten Island
                </Button>
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default HomeContainer;
