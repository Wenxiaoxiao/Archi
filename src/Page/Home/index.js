import React, { Component } from 'react';

class Home extends Component {
  state = {
    loading: false,
  }



  render() {
    const clientWidth = document.getElementById('root').clientWidth-80
    // const clientHeight = document.getElementById('root').clientHeight-42
    return (
      <div className="rightside_page" style={{width:clientWidth}}>
       主页

      </div>
    );
  }
}

export default Home;
