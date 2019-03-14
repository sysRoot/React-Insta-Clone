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
    };
  }

  componentDidMount(){
    this.setState({
      dummyData: dummyData,
      newComment: "",
    });
  }

  addNewCommont = event => {
    event.preventDefault();
    if (this.state.newComment !== "") {
      this.setState(
        prevState => {
          return {
            TodoData: prevState.TodoData.concat({
              todo: this.state.newComment,
              id: Date.now(),
              completed: false
            }),
            newComment: ""
          };
        },
      );
    }
  };

  formEventHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <Header changer={this.formEventHandler} />
        <PostContainer changer={this.formEventHandler} addNew={this.addNewComment} commentState={this.state.newComment} data={this.state.dummyData} />
      </div>
    );
  }
}

export default App;