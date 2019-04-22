import React, { Component } from 'react';
import {Input} from 'antd';

class Piece extends Component {
  state = {
    loading: false,
    colors:"#ecf1f9",
  }


  setColor = (e) =>{
    console.log(e.target.value);
   // this.state.colors.push(e.target.value);
    this.setState({colors:e.target.value},()=>{
      console.log(this.state.colors)
    })
    this.forceUpdate();//重新render
  }

  render() {
    const clientWidth = document.getElementById('root').clientWidth-80
    const {colors}=this.state
    return (
      <div className="rightside_page" style={{width:clientWidth}}>
        <div className="myzone">
            <div style={{background:colors}}>AAA</div>
            <Input type="color" onChange={this.setColor.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default Piece;
