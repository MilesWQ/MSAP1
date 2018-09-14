import { CssBaseline, Grid } from "@material-ui/core";
import * as React from "react";
import News from "./News";

export interface INews {
  author: string;
  description: string;
  source: {
    id: string;
    name: string;
  };
  publishedAt: string;
  title: string;
  url: string;
  urlToImage: string;
}

interface IState {
  newsList: INews[];
}

class NewsList extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      newsList: []
    };
  }

  public render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Grid container={true}>
          {this.state.newsList.map((news: INews) => (
            <div key={news.title}>
              <News
                author={news.author}
                source={news.source.name}
                publishedAt={news.publishedAt}
                description={news.description}
                title={news.title}
                url={news.url}
                urlToImage={news.urlToImage}
              />
            </div>
          ))}
        </Grid>
      </React.Fragment>
    );
  }

  public async componentDidMount() {
    const api: string =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=b10a844e415a47afb9ca3342d59ff97c";
    const response = await fetch(api);
    const { articles: newsList } = await response.json();
    this.setState({ newsList });
  }
}

export default NewsList;
