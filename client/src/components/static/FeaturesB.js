//* Dependencies and hooks
import React, { Fragment } from "react";

//* Material UI components, hooks, and icons
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import background from "../../img/Subtle-Prism2.svg";

//* Exported component
const FeaturesB = () => {
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
            Transaction Management
          </Typography>
        }
      />
      <CardMedia
        image="/img/transactions.svg"
        component="img"
        style={{
          padding: "1rem",
          borderRadius: "1rem"
        }}
      />

      <Typography variant="body1">
        Manage active, pending, and closed transactions.
      </Typography>
    </Card>
  );
};

export default FeaturesB;
