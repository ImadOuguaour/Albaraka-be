import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {    

  render() {
    return(
      <div>
        {this.props.data.test} hhh
      </div>
    )
  }
}

// redux providing state takeover
const mapStateToProps = (state) => {
  console.log("App State ->", state);
  return {
    data: state.data
  }
}
export default connect(mapStateToProps, { })(App)