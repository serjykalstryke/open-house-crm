//* Dependencies and hooks
import React, { Fragment } from "react";

//* Material UI components, hooks, and icons
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import background from "../../img/Subtle-Prism2.svg";

//* Exported component
const FeaturesE = () => {
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
            Mobile Friendly
          </Typography>
        }
      />
      <CardMedia
        image="/img/devices.svg"
        component="img"
        style={{
          padding: "1rem",
          borderRadius: "1rem"
        }}
      />

      <Typography variant="body1">
        OHCRM was built to look great and be easy to use on devices of all
        shapes and sizes. Take control of your business from the office, at home
        or from the field.
      </Typography>
    </Card>
  );
};

export default FeaturesE;
