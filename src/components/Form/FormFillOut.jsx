import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";

import { Link } from "react-router-dom";

class FormFillOut extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <Dialog open fullWidth>
          <Box p={5}>
            <Typography variant="h4">Place Details</Typography>
            <TextField
              variant="outlined"
              label="Name"
              name="name"
              value={this.props.obj.name}
              onChange={this.props.onChange}
              margin="normal"
            ></TextField>
            <br />
            <TextField
              variant="outlined"
              label="Address"
              name="address"
              value={this.props.obj.address}
              onChange={this.props.onChange}
              margin="normal"
            ></TextField>
            <br />
            <TextField
              variant="outlined"
              multiline
              rows={4}
              label="Description"
              name="description"
              value={this.props.obj.description}
              onChange={this.props.onChange}
              margin="normal"
            ></TextField>
            <br />
            <TextField
              variant="outlined"
              id="standard-select"
              name="borough"
              label="Borough"
              select
              onChange={this.props.onChange}
              value={this.props.obj.borough}
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
              onChange={this.props.onChange}
              value={this.props.obj.category}
              margin="normal"
              style={{ width: 120 }}
            >
              <MenuItem value="art">Art</MenuItem>
              <MenuItem value="food">Food</MenuItem>
              <MenuItem value="parks">Parks</MenuItem>
            </TextField>
            <br />
            <TextField
              variant="outlined"
              label="Image Url"
              name="imageUrl"
              value={this.props.obj.imageUrl}
              onChange={this.props.onChange}
              margin="normal"
            ></TextField>
            <br />

            <Button
              variant="contained"
              margin="normal"
              color="primary"
              size="large"
              onClick={this.props.nextStep}
            >
              Next
            </Button>
            <br />
            <br />
            <Link to="/" style={{ "text-decoration": "none" }}>
              <Button
                variant="contained"
                margin="normal"
                color="primary"
                size="large"
              >
                Cancel
              </Button>
            </Link>
          </Box>
        </Dialog>
      </div>
    );
  }
}

export default FormFillOut;
