import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  createStyles,
  CssBaseline,
  Grid,
  Typography,
  WithStyles,
  withStyles
} from "@material-ui/core/";
import * as React from "react";

const styles = () =>
  createStyles({
    card: {
      width: 1000,
      height: 300
    },
    cardAction: {
      width: "100%",
      height: "100"
    },
    media: {
      maxHeight: 300,
      maxWidth: 200,
      float: "right"
    }
  });

interface IProps extends WithStyles<typeof styles> {
  author: string;
  source: string;
  publishedAt: string;
  description: string;
  title: string;
  url: string;
  urlToImage: string;
}

class News extends React.Component<IProps, {}> {
  public render() {
    const { classes, title, description, urlToImage, author } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Card className={classes.card}>
          <CardActionArea
            onClick={this.onClickHandler}
            className={classes.cardAction}
          >
            <CardContent>
              <Typography gutterBottom={true} variant="headline" component="h2">
                {title}
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              className={classes.media}
              image={urlToImage}
              title="news title"
            />
            <CardContent>
              <Grid container={true}>From: {author}</Grid>
              <Typography component="p">{description}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </React.Fragment>
    );
  }
  private onClickHandler = () => {
    window.open(this.props.url, "_blank");
  };
}

export default withStyles(styles)(News);
