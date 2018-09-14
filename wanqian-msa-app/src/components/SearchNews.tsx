import { CssBaseline, Grid, Paper } from "@material-ui/core";
import * as React from "react";
import News from "./News";
import SearchBar from "./SearchBar";

interface IState {
  searchRequest: string;
  result: [];
}

class SearchNews extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      searchRequest: "",
      result: []
    };
    this.handleSearch = this.handleSearch.bind(this);
  }
  public render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Grid container={true} direction="column" spacing={32}>
          <Grid item={true}>
            <Paper>
              <SearchBar
                searchValue={this.state.searchRequest}
                onTextChange={this.handleTextChange}
                onSearch={this.handleSearch}
              />
            </Paper>
          </Grid>
          <Grid item={true}>
            <Paper>
              {this.state.result.map((news: any) => (
                <Grid key={news.title} item={true}>
                  <Paper>
                    <News
                      author={news.author}
                      source={news.source.name}
                      publishedAt={news.publishedAt}
                      description={news.description}
                      title={news.title}
                      url={news.url}
                      urlToImage={news.urlToImage}
                    />
                  </Paper>
                </Grid>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  private handleTextChange = (e: any) => {
    const searchRequest = e.currentTarget.value;
    this.setState({ searchRequest });
  };

  private async handleSearch(e: any) {
    e.preventDefault();
    const api: string = `https://newsapi.org/v2/everything?q=${
      this.state.searchRequest
    }&apiKey=b10a844e415a47afb9ca3342d59ff97c`;
    const response = await fetch(api);
    const { articles: result } = await response.json();
    this.setState({ result });
    console.log(this.state.result);
  }
}

export default SearchNews;
