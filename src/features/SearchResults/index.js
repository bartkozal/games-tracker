import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class SearchResults extends Component {
  render() {
    const { results } = this.props;

    return (
      <Fragment>
        {results.map(({ name, cover, platforms }) => (
          <div key={name} style={{ clear: "both", marginTop: 16 }}>
            <img
              src={cover}
              alt={name}
              width="128px"
              style={{
                float: "left",
                marginBottom: 16,
                marginRight: 16
              }}
            />
            <div>
              <div style={{ fontSize: 18 }}>{name}</div>
              <small>{platforms.join(", ")}</small>
            </div>
          </div>
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ Search }) => ({
  results: Search.results
});

export default connect(mapStateToProps)(SearchResults);
