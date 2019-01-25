// @flow
import * as React from "react";
import cx from "classnames";
import { connect } from "react-redux";

type Props = {
  showBackdrop: boolean,
  children: React.Node
};

const mapStateToProps = ({ UI }) => ({
  showBackdrop: UI.isModalOpen
});

const StickyFooterWrapper = ({ showBackdrop, children }: Props) => (
  <div className={cx("has-sticky-footer", { "has-backdrop": showBackdrop })}>
    {children}
  </div>
);

export default connect(mapStateToProps)(StickyFooterWrapper);
