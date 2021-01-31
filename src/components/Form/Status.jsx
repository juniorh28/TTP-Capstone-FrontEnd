import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

import { Link } from "react-router-dom";

class Status extends Component {
  render() {
    if (!this.props.placeAdded)
      return (
        <div>
          <Dialog open fullWidth>
            <Box p={5}>
              <Typography variant="h4">
                An Error Occured While Submitting
              </Typography>
              <Button
                variant="contained"
                margin="normal"
                color="primary"
                size="large"
                onClick={this.props.prevStep}
              >
                Go Back
              </Button>
            </Box>
          </Dialog>
        </div>
      );
    else
      return (
        <div>
          <Typography variant="h4">Succesfully Added</Typography>

          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
      );
  }
}

export default Status;
