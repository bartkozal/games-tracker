import React from "react";

const withOverlay = Component => {
  return class extends React.Component {
    static displayName = `withOverlay(${Component.name})`;

    clickableElement = React.createRef();

    state = {
      isOpen: false
    };

    open = () => {
      this.setState({ isOpen: true }, () => {
        document.addEventListener("click", this.onDocumentClick);
      });
    };

    close = () => {
      this.setState({ isOpen: false }, () => {
        document.removeEventListener("click", this.onDocumentClick);
      });
    };

    onDocumentClick = event => {
      if (
        this.clickableElement.current &&
        !this.clickableElement.current.contains(event.target)
      ) {
        this.close();
      }
    };

    render() {
      return (
        <Component
          open={this.open}
          close={this.close}
          clickableElement={this.clickableElement}
          isOpen={this.state.isOpen}
          {...this.props}
        />
      );
    }
  };
};

export default withOverlay;