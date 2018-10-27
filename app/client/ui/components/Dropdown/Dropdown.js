// @flow
import * as React from "react";
import cx from "classnames";
import cypressify from "ui/utils/cypressify";

type Props = {
  children: Function
};

type State = {
  isOpen: boolean
};

type DropdownToggleProps = {
  children: React.Node
};

type DropdownMenuProps = {
  children: React.Node,
  className: string
};

type DropdownMenuItemProps = {
  onClick: Function,
  children: React.Node,
  className: string
};

class Dropdown extends React.Component<Props, State> {
  state = {
    isOpen: false
  };

  dropdownMenu = React.createRef();

  DropdownToggle = ({ children }: DropdownToggleProps) => (
    <div onClick={() => this.open()}>{children}</div>
  );

  DropdownMenu = ({ children, className }: DropdownMenuProps) => {
    if (!this.state.isOpen) return null;

    return (
      <div ref={this.dropdownMenu} className={cx("dropdown-menu", className)}>
        {children}
      </div>
    );
  };

  DropdownMenuItem = ({
    onClick,
    children,
    className
  }: DropdownMenuItemProps) => (
    <button
      data-cy={`dropdown-menu-item-${cypressify(children)}`}
      className={cx("dropdown-menu-item", className)}
      onClick={event => {
        this.close();
        onClick(event);
      }}
    >
      {children}
    </button>
  );

  open = () => {
    this.setState({ isOpen: true }, () => {
      document.addEventListener("click", this.handleDocumentClick);
    });
  };

  close = () => {
    this.setState({ isOpen: false }, () => {
      document.removeEventListener("click", this.handleDocumentClick);
    });
  };

  handleDocumentClick = (event: MouseEvent) => {
    // TODO refactor to use optional chaining
    if (
      this.dropdownMenu.current &&
      !this.dropdownMenu.current.contains(event.target)
    ) {
      this.close();
    }
  };

  render() {
    return (
      <div className="dropdown">
        {this.props.children({
          DropdownToggle: this.DropdownToggle,
          DropdownMenu: this.DropdownMenu,
          DropdownMenuItem: this.DropdownMenuItem
        })}
      </div>
    );
  }
}

export default Dropdown;
