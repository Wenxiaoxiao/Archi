import React, { Component } from 'react';

class Book extends Component {
  state = {
    loading: false,
  }


 

  render() {
    const clientWidth = document.getElementById('root').clientWidth-80
    return (
      <div className="rightside_page" style={{width:clientWidth}}>
         <div className="myzone">Book</div>

      </div>
    );
  }
}

export default Book;
