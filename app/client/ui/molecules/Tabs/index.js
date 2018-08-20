import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import $Tabs from "./$Tabs";
import $TabItem from "./$TabItem";

class Tabs extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        tab: PropTypes.string.isRequired,
        content: PropTypes.node.isRequired,
        hidden: PropTypes.bool,
        default: PropTypes.bool
      })
    )
  };

  state = {
    activeTab: (
      this.props.items.find(item => item.default) || this.props.items[0]
    ).tab
  };

  activate = tab => {
    this.setState({
      activeTab: tab
    });
  };

  render() {
    const { items } = this.props;
    const { activeTab } = this.state;

    return (
      <Fragment>
        <$Tabs>
          {items.map(
            ({ tab, hidden }) =>
              !hidden && (
                <$TabItem
                  key={tab}
                  onClick={() => this.activate(tab)}
                  isActive={activeTab === tab}
                >
                  {tab}
                </$TabItem>
              )
          )}
        </$Tabs>

        {items.find(({ tab }) => tab === activeTab).content}
      </Fragment>
    );
  }
}

export default Tabs;
