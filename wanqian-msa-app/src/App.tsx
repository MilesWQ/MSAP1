import {
  createStyles,
  CssBaseline,
  Grid,
  WithStyles,
  withStyles
} from "@material-ui/core";

import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Header, NewsList, SearchNews } from "./components/";

const styles = () =>
  createStyles({
    root: {
      maxWidth: "70%",
      margin: "auto"
    }
  });

const App: React.StatelessComponent<WithStyles<typeof styles>> = (
  props: WithStyles<typeof styles>
) => {
  const { classes } = props;
  return (
    <BrowserRouter>
      <Grid container={true} spacing={24}>
        <CssBaseline />
        <Header />
        <Grid item={true} className={classes.root}>
          <Route path="/" exact={true} component={NewsList} />
          <Route path="/SearchNews" component={SearchNews} />
        </Grid>
      </Grid>
    </BrowserRouter>
  );
};

export default withStyles(styles)(App);
