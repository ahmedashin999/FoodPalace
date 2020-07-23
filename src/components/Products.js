import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
 
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
  center: {
    textAlign: "center",
  },
  media: {
    height: "200px",
  },
  btn: {
    justifyContent: "center",
  },
  btnColor:{
        
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 35,
        padding: '0 30px',
      
  },
  roots: {
    flexGrow: 1,
  },

});

const Products = () => {
  const classes = useStyles();

  return (
    <>
      <span>Home</span>-
      <span>
        {" "}
        <strong>Products_01</strong>
      </span>
      <div className="classes.root">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.roots}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  className={classes.media}
                  title="Contemplative Reptile"
                  image={require("../img/burger.jpg")}
                  style={useStyles.media}
                />
                <CardContent className={classes.center}>
                  <Typography gutterBottom variant="h6" component="h2">
                    Supreme Pizza
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Vimply dummy text the printing and typesetting indust
                  </Typography>
                  <br />
                  <strong>$15</strong>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.btn}>
                <Button size="small" variant="contained" className={classes.btnColor}>
                  ADD TO CART
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.roots}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  className={classes.media}
                  title="Contemplative Reptile"
                  image={require("../img/burger.jpg")}
                  style={useStyles.media}
                />
                <CardContent className={classes.center}>
                  <Typography gutterBottom variant="h6" component="h2">
                    Supreme Pizza
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Vimply dummy text the printing and typesetting indust
                  </Typography>
                  <br />
                  <strong>$15</strong>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.btn}>
                <Button size="small" variant="contained"className={classes.btnColor}>
                  ADD TO CART
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.roots}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  className={classes.media}
                  title="Contemplative Reptile"
                  image={require("../img/burger.jpg")}
                  style={useStyles.media}
                />
                <CardContent className={classes.center}>
                  <Typography gutterBottom variant="h6" component="h2">
                    Supreme Pizza
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Vimply dummy text the printing and typesetting indust
                  </Typography>
                  <br />
                  <strong>$15</strong>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.btn}>
                <Button size="small" variant="contained" className={classes.btnColor}>
                  ADD TO CART
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.roots}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  className={classes.media}
                  title="Contemplative Reptile"
                  image={require("../img/burger.jpg")}
                  style={useStyles.media}
                />
                <CardContent className={classes.center}>
                  <Typography gutterBottom variant="h6" component="h2">
                    Supreme Pizza
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Vimply dummy text the printing and typesetting indust
                  </Typography>
                  <br />
                  <strong>$15</strong>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.btn}>
                <Button size="small" variant="contained" className={classes.btnColor}>
                  ADD TO CART
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.roots}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  className={classes.media}
                  title="Contemplative Reptile"
                  image={require("../img/burger.jpg")}
                  style={useStyles.media}
                />
                <CardContent className={classes.center}>
                  <Typography gutterBottom variant="h6" component="h2">
                    Supreme Pizza
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Vimply dummy text the printing and typesetting indust
                  </Typography>
                  <br />
                  <strong>$15</strong>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.btn}>
                <Button size="small" variant="contained" className={classes.btnColor}>
                  ADD TO CART
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.roots}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  className={classes.media}
                  title="Contemplative Reptile"
                  image={require("../img/burger.jpg")}
                  style={useStyles.media}
                />
                <CardContent className={classes.center}>
                  <Typography gutterBottom variant="h6" component="h2">
                    Supreme Pizza
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Vimply dummy text the printing and typesetting indust
                  </Typography>
                  <br />
                  <strong>$15</strong>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.btn}>
                <Button size="small" variant="contained" className={classes.btnColor}>
                  ADD TO CART
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.roots}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  className={classes.media}
                  title="Contemplative Reptile"
                  image={require("../img/burger.jpg")}
                  style={useStyles.media}
                />
                <CardContent className={classes.center}>
                  <Typography gutterBottom variant="h6" component="h2">
                    Supreme Pizza
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Vimply dummy text the printing and typesetting indust
                  </Typography>
                  <br />
                  <strong>$15</strong>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.btn}>
                <Button size="small" variant="contained" className={classes.btnColor}>
                  ADD TO CART
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.roots}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  className={classes.media}
                  title="Contemplative Reptile"
                  image={require("../img/burger.jpg")}
                />
                <CardContent className={classes.center}>
                  <Typography gutterBottom variant="h6" component="h2">
                    Supreme Pizza
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Vimply dummy text the printing and typesetting indust
                  </Typography>
                  <br />
                  <strong>$15</strong>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.btn}>
                <Button size="small" variant="contained" className={classes.btnColor}>
                  ADD TO CART
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default Products;
