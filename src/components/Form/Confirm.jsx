/* import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import axios from "axios";
import Dialog from "@material-ui/core/Dialog";

import { connect } from "react-redux";
import { addNewPlaceThunk } from "../../redux/places/places.actions";

class Confirm extends Component {
  async onSubmit(e) {
    e.preventDefault();

    await this.props.addNewPlace(this.props.obj);
    this.props.submitted(this.props.singlePlace);
    this.props.nextStep();
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <Dialog open fullWidth>
          <Box p={5}>
            <Typography variant="h4">Confirm Information Below</Typography>
            <List>
              <ListItemAvatar>
                <Avatar
                  src={this.props.obj.imageUrl}
                  alt="place image"
                  size="large"
                >
                  <ImageOutlinedIcon></ImageOutlinedIcon>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Name" secondary={this.props.obj.name} />
              <ListItemText
                primary="Address"
                secondary={this.props.obj.address}
              />
              <ListItemText
                primary="Description"
                secondary={this.props.obj.description}
              />
              <ListItemText
                primary="Borough"
                secondary={this.props.obj.borough}
              />
              <ListItemText
                primary="Category"
                secondary={this.props.obj.category}
              />
            </List>
            <Button
              variant="contained"
              margin="normal"
              color="primary"
              size="large"
              onClick={this.props.prevStep}
            >
              Go Back
            </Button>
            <Button
              variant="contained"
              margin="normal"
              color="secondary"
              size="large"
              onClick={(e) => this.onSubmit(e)}
            >
              Submit
            </Button>
          </Box>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    allPlaces: state.places.allPlaces,
    singlePlace: state.places.singlePlace,
  };
};

// Map dispatch to props;
const mapDispatchToProps = (dispatch) => {
  return {
    addNewPlace: (obj) => dispatch(addNewPlaceThunk(obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Confirm);
 */