import React, { useState } from "react";
// import styles from "./styles.module.css";
import CardModal from "../Modal";

import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
// import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 320,
    height: 460,
    marginBottom: 20,
    border: "1px solid rgb(33,33,33)",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  btn: {
    width: 100,
    margin: "10px auto 0px auto",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

export default function RecipeReviewCard({
  img_url,
  id,
  name,
  description,
  isVeg,
  rating,
  price,
  size,
  toppings,
}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={img_url} title={name} />
      <CardContent className={classes.content}>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
        <Typography variant="h6" color="textPrimary" component="textPath">
          Name : {name}
        </Typography>
        <Typography variant="h6" color="textPrimary" component="textPath">
          Type : {isVeg ? "Veg" : "Non veg"}
        </Typography>
        <Typography variant="h6" color="textPrimary" component="textPath">
          Price : INR {price} /-
        </Typography>
        <Typography variant="h6" color="textPrimary" component="textPath">
          Rating : {rating}/5
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className={classes.btn}
          onClick={handleOpen}
        >
          Add
        </Button>
        {open && (
          <CardModal
            img_url={img_url}
            description={description}
            name={name}
            isVeg={isVeg}
            price={price}
            rating={rating}
            id={id}
            size={size}
            toppings={toppings}
            open={open}
            handleClose={handleClose}
            handleOpen={handleOpen}
          />
        )}
      </CardContent>
    </Card>
  );
}
