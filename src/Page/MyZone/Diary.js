import React, { Component } from 'react';

class Diary extends Component {
  state = {
    loading: false,
  }


 

  render() {
    const clientWidth = document.getElementById('root').clientWidth-80
    return (
      <div className="rightside_page" style={{width:clientWidth}}>
         <div className="myzone">Diary</div>

      </div>
    );
  }
}

export default Diary;
