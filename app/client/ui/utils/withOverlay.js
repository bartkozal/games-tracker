import React from "react";

const withOverlay = WrappedComponent => {
  return class extends React.Component {
    static displayName = `Closable(${WrappedComponent.name})`;

    clickableElementRef = React.createRef();

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
        this.closeableRef.current &&
        !this.closeableRef.current.contains(event.target)
      ) {
        this.close();
      }
    };

    render() {
      return (
        <WrappedComponent
          open={this.open}
          close={this.close}
          clickableElement={this.clickableElementRef}
          isOpen={this.state.isOpen}
          {...this.props}
        />
      );
    }
  };
};

export default withOverlay;
