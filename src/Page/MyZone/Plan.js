import React, { Component } from 'react';

class Plan extends Component {
  state = {
    loading: false,
  }


 

  render() {
    const clientWidth = document.getElementById('root').clientWidth-80
    return (
      <div className="rightside_page" style={{width:clientWidth}}>
         
         <div className="myzone">Plan</div>
      </div>
    );
  }
}

export default Plan;
