import React, { Component } from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import axios from "axios";

class NewPlaceForm extends Component {
  state = {
    name: null,
    address: null,
    description: null,
    borough: null,
    category: null,
    imageUrl: null,
    numOfLikes: 0,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    let response = await axios.post(
      "http://localhost:8080/api/places/newPlace",
      this.state
    );
  }

  //   nextStep = () => {
  //     const { step } = this.state;
  //     this.setState({ step: step + 1 });
  //   };

  //   prevStep = () => {
  //     const { step } = this.state;
  //     this.setState({ step: step - 1 });
  //   };

  render() {
    console.log(this.state);
    return (
      <Dialog open fullWidth>
        <AppBar title="Share New Place" />
        <Box p={5}>
          <TextField
            variant="outlined"
            label="Name"
            name="name"
            value={this.state.name}
            onChange={(e) => this.onChange(e)}
            margin="normal"
            fullWidth
          ></TextField>
          <br />
          <TextField
            variant="outlined"
            label="Address"
            name="address"
            value={this.state.address}
            onChange={(e) => this.onChange(e)}
            margin="normal"
            fullWidth
          ></TextField>
          <br />
          <TextField
            variant="outlined"
            multiline
            id="standard-multiline-static"
            rows={4}
            label="Description"
            name="description"
            value={this.state.description}
            onChange={(e) => this.onChange(e)}
            margin="normal"
            fullWidth
          ></TextField>
          <br />
          <TextField
            variant="outlined"
            id="standard-select"
            name="borough"
            label="Borough"
            select
            onChange={(e) => this.onChange(e)}
            value={this.state.borough}
            margin="normal"
            style={{ width: 120 }}
          >
            <MenuItem value="brooklyn">Brooklyn</MenuItem>
            <MenuItem value="bronx">The Bronx</MenuItem>
            <MenuItem value="manhattan">Manhattan</MenuItem>
            <MenuItem value="queens">Queens</MenuItem>
            <MenuItem value="statenisland">Staten Island</MenuItem>
          </TextField>

          <TextField
            variant="outlined"
            id="standard-select"
            name="category"
            label="Category"
            select
            onChange={(e) => this.onChange(e)}
            value={this.state.category}
            margin="normal"
            style={{ width: 120 }}
          >
            <MenuItem value="art">Art</MenuItem>
            <MenuItem value="food">Food</MenuItem>
            <MenuItem value="parks">Parks</MenuItem>
          </TextField>

          <TextField
            variant="outlined"
            label="Image Url"
            name="imageUrl"
            value={this.state.imageUrl}
            onChange={(e) => this.onChange(e)}
            margin="normal"
            fullWidth
          ></TextField>
          <br />
          <Button
            variant="contained"
            margin="normal"
            color="primary"
            size="large"
            onClick={(e) => this.onSubmit(e)}
          >
            Submit
          </Button>
        </Box>
      </Dialog>
    );
  }
}

export default NewPlaceForm;
