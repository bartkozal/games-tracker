import React from "react";

const withOverlay = Component => {
  return class extends React.Component {
    static displayName = `withOverlay(${Component.name})`;

    clickableElement = React.createRef();
    innerComponent = React.createRef();

    state = {
      isOpen: false
    };

    open = () => {
      this.setState({ isOpen: true }, () => {
        document.addEventListener("click", this.onOverlayClick);
      });
    };

    close = () => {
      this.setState({ isOpen: false }, () => {
        document.removeEventListener("click", this.onOverlayClick);
      });
    };

    onOverlayClick = event => {
      if (
        this.clickableElement.current &&
        !this.clickableElement.current.contains(event.target)
      ) {
        this.innerComponent.current.onOverlayClick &&
          this.innerComponent.current.onOverlayClick();
        this.close();
      }
    };

    render() {
      return (
        <Component
          ref={this.innerComponent}
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
