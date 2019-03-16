import React, {Component} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Field,
  Control,
  Input
} from "react-bulma-components/lib/components/form";
import Icon from "react-bulma-components/lib/components/icon";
import "./SearchBar.scss";

class SearchBar extends Component {

  render() {
    return (
      <div className="searchForm">
        <Field renderAs="form">
          <Control iconLeft>
            <Input
              type="text"
              placeholder="Search"
              name="newSearch"
              onChange={this.props.submitSearch}
              value={this.props.newSearch}
            />
            <Icon align="left">
              <FontAwesomeIcon icon={["fas", "search"]} size="lg" />
            </Icon>
          </Control>
        </Field>
      </div>
    );
  }
}

export default SearchBar;
