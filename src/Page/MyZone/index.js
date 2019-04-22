import React, { Component } from 'react';

class MyZone extends Component {
  state = {
    
  }

  GetItemDetail = (key) =>{
    this.props.history.push("/"+key);
  } 

  render() {
    const clientWidth = document.getElementById('root').clientWidth-80
    // const clientHeight = document.getElementById('root').clientHeight-42
    return (
      <div className="rightside_page" style={{width:clientWidth}}>
        <div className="myzone">
          <div className="box">
            <div className="wrapper">
              <div className="item" key="Main/Note" onClick={()=>{this.GetItemDetail('Main/Note')}}>学习笔记</div>
              <div className="item" key="Main/Piece" onClick={()=>{this.GetItemDetail('Main/Piece')}}>代码片段</div>
              <div className="item" key="Main/Diary" onClick={()=>{this.GetItemDetail('Main/Diary')}}>日记</div>
              <div className="item" key="Main/Plan" onClick={()=>{this.GetItemDetail('Main/Plan')}}>学习计划</div>
            </div>
            <div className="wrapper1">
              <div className="item" key="Main/Collect" onClick={()=>{this.GetItemDetail('Main/Collect')}}>素材积累</div>
              <div className="item" key="Main/Book" onClick={()=>{this.GetItemDetail('Main/Book')}}>书单</div>
              <div className="item" key="Main/Websit" onClick={()=>{this.GetItemDetail('Main/Websit')}}>网站整理</div>
              <div className="item" key="Main/Willing" onClick={()=>{this.GetItemDetail('Main/Willing')}}>五件事</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyZone;
