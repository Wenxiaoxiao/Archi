import React, { Component } from 'react';
import {Input} from 'antd';

class Login extends Component {
  state = {
    loading: false,
  }

  LoginIn = () =>{
    this.props.history.push("/Main");
  }

  render() {
    return (
      <div className="login_wrap">
        <div className="login_box">
          <div className="login_content">
            <div className="login_left">
              <div className="designAnimate">
                <div className="animated_bounce updownbounce infinite_bounce"></div>
                <div style={{marginTop:'2px'}} className="animated_bounce updownbounce1 infinite_bounce"></div>
              </div>
            </div>
            <div className="login_right">
              <div className="login_main">
                <div className="title">设计</div>
                <Input placeholder="用户名" className="username"/>
                <Input placeholder="密码" className="password"/>
                <div className="login_submit" onClick={this.LoginIn.bind(this)}>登录</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
