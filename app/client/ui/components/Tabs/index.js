// @flow
import * as React from "react";
import cx from "classnames";
import formatTestId from "ui/utils/formatTestId";
import "./tabs.scss";

type Props = {
  children: Function,
  defaultTab: string
};

type State = {
  activeTab: ?string
};

type TabItemProps = {
  label: string,
  hidden: boolean
};

type TabContentProps = {
  children: React.Node
};

class Tabs extends React.Component<Props, State> {
  state = {
    activeTab: this.props.defaultTab
  };

  TabItem = ({ label, hidden }: TabItemProps) => {
    if (hidden) return null;

    return (
      <div
        data-cy={formatTestId("tab", label)}
        className={cx("tab-item", {
          "tab-item-active": label === this.state.activeTab
        })}
        onClick={() => this.setActiveTab(label)}
      >
        {label}
      </div>
    );
  };

  TabContent = ({ children }: TabContentProps) => <div>{children}</div>;

  setActiveTab = (label: string) => {
    this.setState({ activeTab: label });
  };

  render() {
    return (
      <React.Fragment>
        <div className="tabs">{this.props.children(this.TabItem)}</div>

        {this.props
          .children(this.TabContent)
          .find(tab => tab.props.label === this.state.activeTab)}
      </React.Fragment>
    );
  }
}

export default Tabs;
