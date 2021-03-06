//* Dependencies and hooks
import React, { Fragment } from "react";

//* Material UI components, hooks, and icons
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import background from "../../img/Subtle-Prism2.svg";

//* Exported component
const FeaturesF = () => {
  //* Returns JSX to DOM
  return (
    <Card
      style={{
        border: "1px solid #008B8B",
        background: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "1rem",
        height: "100%",
        padding: "1rem",
        height: "100%"
      }}
    >
      <CardHeader
        title={
          <Typography
            style={{
              fontFamily: "Big Shoulders Display",
              fontWeight: "700",
              fontSize: "30px",
              textAlign: "center"
            }}
          >
            Custom Notes
          </Typography>
        }
      />
      <CardMedia
        image="/img/notes.svg"
        component="img"
        style={{
          padding: "1rem",
          borderRadius: "1rem"
        }}
      />

      <Typography variant="body1">
        Want to remember your client's birthday or favorite restaurant? Add a
        note to their contact file and add value to your relationship.
      </Typography>
    </Card>
  );
};

export default FeaturesF;
