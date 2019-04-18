import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,Switch
} from 'react-router-dom';
import MyZone from '../MyZone';
import Home from '../Home';

class Main extends Component {

  state = {
    current: 'Main',
  }


  componentDidMount() {
     //console.log(this.props)
     this.Aauthority(this.props);
  }

  componentWillUpdate(nextProps) {
      //console.log(nextProps)
      this.Aauthority(nextProps);
  }

  Aauthority = (props) => {

 
  }

  TitleClick= (key,name) => {
    this.setState({ current: key,});
    this.props.history.push("/"+key);
    let tmp = `leftmenu_`+name,
    leftmenu = document.getElementsByClassName('leftmenu'),
    ele = document.getElementsByClassName([tmp])[0];
    ele.classList.contains('active_menu')?this.ClickChoseActive(leftmenu,ele,'active_menu'):this.ClickChoseActive(leftmenu,ele,'active_menu')
  }

  ClickChoseActive = (arry,ele,name) =>{
    for(let item of arry){
      if(item === ele){
        item.classList.add(name)
      }
      else{
        if(item.classList.contains(name)){
          item.classList.remove(name)
        }
      }
    }
  }

  render() {
    return (
      <div className="layout_main">
        <div className="layout_header">
          <div className="title">设计</div>
        </div>
        <div className="leftside_menu">
          <div className="content">
            <div className="leftmenu leftmenu_main active_menu" onClick={()=>this.TitleClick('Main','main')} key="Main">我的地盘</div>
            <div className="leftmenu leftmenu_home" onClick={()=>this.TitleClick('Main/Home','home')} key="Main/Home">Home</div>
          </div>
        </div>
        <Router>
          <Switch> 
            <Route exact path="/Main" component={MyZone} />
            <Route path="/Main/Home" component={Home} />
          </Switch> 
         </Router>
      </div>
    );
  }
}

export default Main;
