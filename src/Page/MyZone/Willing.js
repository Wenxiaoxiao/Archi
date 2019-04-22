import React, { Component } from 'react';
import { Modal,Input,Button,Form,Row,Col,message } from 'antd';
const FormItem = Form.Item;
class Willing extends Component {
  state = {
    loading: false,
    visible:true,
    PassWordValue:''
  }
  //初始化
  componentWillMount() {      
    
  }

  handleOk = () =>{
    console.log(this.state.PassWordValue);
    const {PassWordValue}=this.state
    if(PassWordValue === '6286'){
        this.setState({visible:false})
    }
    else{
        message.error('密码不正确!')
    }
  }

  handleCancel = () =>{
    this.props.history.push("/Main");
  }

  GetPassWord = (e) =>{
      //console.log(e.target.value)
      this.setState({PassWordValue:e.target.value});
  }

  render() {
    const clientWidth = document.getElementById('root').clientWidth-80
    const {visible,PassWordValue}=this.state
    return (
      <div className="rightside_page" style={{width:clientWidth}}>
         <div className="myzone" style={{display:visible?'none':'block'}}>
         敲代码,种花,卖花,写小说,游戏
         二十多岁了，我才明白，我希望做的，是一个持之以恒的人
         所以我羡慕的人，都有一个共性：就是他们能够在一个行业里面呆很久。
         </div>
         <Modal
         visible={visible}
         title="请输入密码"
         onOk={this.handleOk.bind(this)}
         onCancel={this.handleCancel}
         footer={[
            <Button key="back" onClick={this.handleCancel}>返回</Button>,
            <Button key="submit" type="primary" loading={this.state.loading} onClick={
              this.handleOk.bind(this)
            }>
              确定
        </Button>,
          ]}
         >
            <Form
            className="ant-advanced-search-form"
            span={24}
            >
            <Row gutter={24}>
                <Col span={24}>
                <FormItem label={`密码`} span={24}>
                    <div className="item" >
                    <Input value={PassWordValue} onChange={this.GetPassWord.bind(this)}/>
                    </div>
                </FormItem>
                </Col>
            </Row>
            </Form>
         </Modal>
      </div>
    );
  }
}

export default Willing;
