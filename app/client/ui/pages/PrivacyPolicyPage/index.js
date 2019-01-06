// @flow
import * as React from "react";
import { API_STATIC_PAGES } from "routes/api";
import { get } from "axios";
import StaticPage from "ui/components/StaticPage";

type State = {
  content: string
};

class PrivacyPolicyPage extends React.Component<{}, State> {
  state = {
    content: ""
  };

  componentDidMount() {
    get(API_STATIC_PAGES.replace(":id", "privacy_policy")).then(response =>
      this.setState({ content: response.data })
    );
  }

  render() {
    return <StaticPage>{this.state.content}</StaticPage>;
  }
}

export default PrivacyPolicyPage;
