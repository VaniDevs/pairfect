import React from 'react';
import {Link} from 'react-router';
import searchPageImage from "../../assets/searchPageImage.jpg";
import SearchForm from './SearchForm';
import BrowseCategories from './BrowseCategories';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      searchString: ""
    };

    // need a better way to manage styling in the future.
    this.homePageStyles = {
      homePageContainer: {
        textAlign: "center",
        searchImageContainerStyles: {
          overflow: "hidden",
          width: "100%",
          maxHeight: "410px",
          searchImageStyles: {
            marginLeft: "-10%",
            marginTop: "-10%"
          }
        },
        searchBarContainerStyles: {
          position: "relative",
          bottom: "100px"
        }
      },
      browseCategoryContainer: {
        position: "relative",
        bottom: "55px"
      }
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onPerformSearch = this.onPerformSearch.bind(this);
  }

  onSearchTextChange(event) {
    event.preventDefault();
    this.setState({
      searchString: event.target.value
    });
  }

  onPerformSearch() {
    //perform search and retreive updated state here...
  }

  render() {
    return(
      <div style={this.homePageStyles.homePageContainer}>
        <div style={this.homePageStyles.homePageContainer.searchImageContainerStyles} >
          <img style={this.homePageStyles.homePageContainer.searchImageContainerStyles.searchImageStyles} src={searchPageImage}/>
        </div>
        <div style={this.homePageStyles.homePageContainer.searchBarContainerStyles}>
          <SearchForm
            searchString={this.state.searchString}
            onChange={this.onSearchTextChange}
            onSearch={this.onPerformSearch}
          />
        </div>
        <div
          style={this.homePageStyles.browseCategoryContainer}
          className="jumbotron">
          <h4 className="text-center">Browse by Category</h4>
          <BrowseCategories/>
        </div>
      </div>
    );
  }
}

export default HomePage;
