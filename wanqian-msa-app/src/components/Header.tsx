import { AppBar, Grid, Toolbar, Typography } from "@material-ui/core/";
import * as React from "react";
import { Link } from "react-router-dom";

const Header: React.StatelessComponent<{}> = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Grid
          container={true}
          direction="row"
          justify="flex-start"
          alignItems="center"
          spacing={40}
        >
          <Grid item={true}>
            <Link to="/" style={{ textDecoration: "none", color: "#FFF" }}>
              <Typography variant="display1" color="inherit">
                HeadLines
              </Typography>
            </Link>
          </Grid>
          <Grid item={true}>
            <Link
              to="/SearchNews"
              style={{ textDecoration: "none", color: "#FFF" }}
            >
              <Typography variant="display1" color="inherit">
                Find News
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
