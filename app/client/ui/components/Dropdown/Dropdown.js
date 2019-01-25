// @flow
import * as React from "react";
import cx from "classnames";
import formatTestId from "ui/utils/formatTestId";

type Props = {
  children: Function,
  className?: string
};

type State = {
  isOpen: boolean
};

type DropdownToggleProps = {
  children: React.Node,
  className?: string,
  testId?: string,
  onClick?: Function
};

type DropdownMenuProps = {
  children: React.Node,
  className?: string
};

type DropdownMenuItemProps = {
  onClick: Function,
  onMouseEnter?: Function,
  onMouseLeave?: Function,
  children: React.Node,
  className?: string,
  testId?: string
};

class Dropdown extends React.Component<Props, State> {
  state = {
    isOpen: false
  };

  dropdownMenu = React.createRef();

  DropdownToggle = ({
    children,
    className,
    testId,
    onClick
  }: DropdownToggleProps) => (
    <div
      data-cy={formatTestId("dropdown", testId)}
      className={cx("dropdown-toggle", className)}
      onClick={() => {
        onClick ? onClick() : this.open();
      }}
    >
      {children}
    </div>
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
    onMouseEnter,
    onMouseLeave,
    children,
    className,
    testId
  }: DropdownMenuItemProps) => (
    <button
      data-cy={formatTestId("dropdown-item", testId || String(children))}
      className={cx("dropdown-menu-item", className)}
      onClick={event => {
        this.close();
        onClick(event);
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
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
      <div className={cx("dropdown", this.props.className)}>
        {this.props.children(
          this.DropdownToggle,
          this.DropdownMenu,
          this.DropdownMenuItem
        )}
      </div>
    );
  }
}

export default Dropdown;
