import React, { Component } from 'react';

class MyZone extends Component {
  state = {
    noteShow:false,
    pieceShow:false,
    diaryShow:false,
    planShow:false,
    colectShow:false,
    bookShow:false,
    websitShow:false,
    willingShow:false,
    boxShow:true,
    detailShow:false,
  }

  GetItemDetail = (type) =>{
    this.setState({
      boxShow:false,
      detailShow:true
    })
  }

 

  render() {
    const clientWidth = document.getElementById('root').clientWidth-80
    const {detailShow,boxShow}=this.state
    // const clientHeight = document.getElementById('root').clientHeight-42
    return (
      <div className="rightside_page" style={{width:clientWidth}}>
        <div className="myzone">
          <div className="box" style={{display:boxShow?'block':'none'}}>
            <div className="wrapper">
              <div className="item" onClick={()=>{this.GetItemDetail('note')}}>学习笔记</div>
              <div className="item" onClick={()=>{this.GetItemDetail('piece')}}>代码片段</div>
              <div className="item" onClick={()=>{this.GetItemDetail('diary')}}>日记</div>
              <div className="item" onClick={()=>{this.GetItemDetail('plan')}}>学习计划</div>
            </div>
            <div className="wrapper1">
              <div className="item" onClick={()=>{this.GetItemDetail('colect')}}>素材积累</div>
              <div className="item" onClick={()=>{this.GetItemDetail('book')}}>书单</div>
              <div className="item" onClick={()=>{this.GetItemDetail('websit')}}>网站整理</div>
              <div className="item" onClick={()=>{this.GetItemDetail('willing')}}>五件事</div>
            </div>
          </div>
          <div className="detail" style={{display:detailShow?'block':'none'}}>
            <div>敲代码,种花,卖花,写小说,游戏</div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyZone;
