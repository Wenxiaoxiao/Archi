import React, { Component } from 'react';

class Websit extends Component {
  state = {
    loading: false,
  }


 

  render() {
    const clientWidth = document.getElementById('root').clientWidth-80
    return (
      <div className="rightside_page" style={{width:clientWidth}}>
         
         <div className="myzone">Websit</div>
      </div>
    );
  }
}

export default Websit;
