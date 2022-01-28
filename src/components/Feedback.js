import React from "react";
import TextField from "@mui/material/TextField";
import { TextArea } from "semantic-ui-react";
import Card from "@mui/material/Card";

function FeedBackForm() {
  return (
    <>
      <div className="About">
        <ul className="ulAlign">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Gallery">Gallery</a>
          </li>
          <li>
            <a href="/FeedBackForm">About</a>
          </li>
        </ul>
        <div className="AlignForm">
          <h1>FeedBack Form</h1>
          <Card className="boxStyle">
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <TextField id="filled-basic" label="Email" variant="outlined" />
            <TextArea placeholder="Tell us more" />
            <button>Submit</button>
          </Card>
        </div>
      </div>
    </>
  );
}

export default FeedBackForm;
