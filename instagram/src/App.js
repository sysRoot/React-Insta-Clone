import React, { Component } from "react";
// import PropTypes from 'prop-types';
import dummyData from './dummy-data.js'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import Header from "./components/Header";
import PostContainer from "./components/PostContainer/PostContainer";
import "./App.scss";

library.add(fab, far, fas);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: [],
      newSearch: ""
    };
  }

  componentDidMount(){
    this.setState({
      dummyData: dummyData,
    });
  }

  sortSearch = searchTerm => { 
    let newArray = this.state.dummyData.filter(cur => {
      return cur.username.includes(searchTerm);
    });
    this.setState({
      search: newArray,
    })
  }

  submitSearch = event => {
    event.preventDefault();
    this.setState({
      newSearch: event.target.value
    });
    this.sortSearch(this.state.newSearch);
  };

  // onTextInputChange = event => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };


  render() {
    return (
      <div className="App">
        <Header newSearch={this.state.newSearch} submitSearch={this.submitSearch} />
        <PostContainer data={this.state.dummyData} newSearch={this.state.newSearch} />
      </div>
    );
  }
}

export default App;