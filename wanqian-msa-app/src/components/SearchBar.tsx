import { CssBaseline, IconButton, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import * as React from "react";

interface IProps {
  searchValue: string;
  onTextChange: any;
  onSearch: any;
}

class SearchBar extends React.Component<IProps> {
  public render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <form>
          <TextField
            id="search"
            label="Find News"
            type="search"
            margin="normal"
            value={this.props.searchValue}
            onChange={this.props.onTextChange}
          />
          <IconButton onClick={this.props.onSearch}>
            <SearchIcon />
          </IconButton>
        </form>
      </React.Fragment>
    );
  }
}

export default SearchBar;
