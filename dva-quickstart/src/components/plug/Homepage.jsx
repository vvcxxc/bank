import React, { Component } from 'react';
class Homepage extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.props = props
    }
    render() {
        return (
<div>
<div style={{ width: '800px', height: '50px',padding:'10px 10px'}}>
                    <img style={{ float:'left'}} src={this.state.img0} alt=""/>
                    <span>2017年度信息披露报告摘要</span>
                </div>
                <div style={{ width: '800px', height: '190px',padding:'10px 10px'}}>
                    <dl style={{ width: '246px',float:'left',padding:'10px 10px'}}>
                        <dt style={{ fontSize:'15px',fontWeight:'bolder',marginBottom:'8px'}}>新闻动态</dt>
                        <dd>濉溪湖商村镇银行临涣支行...</dd>
                        <dd>缅怀革命先烈-参观渡江战役...</dd>
                        <dd>一举一动建普城美景 一草一...</dd>
                        <dd>岳西湖商村镇银行参与开展...</dd>
                    </dl>
                    <dl style={{ width: '246px',float:'left',padding:'10px 10px'}}>
                        <dt style={{ fontSize:'15px',fontWeight:'bolder',marginBottom:'8px'}}>银行公告</dt>
                        <dd>湖商网银业务系统停运公告...</dd>
                        <dd>浙江德清湖商村镇银行股份...</dd>
                        <dd>第三方支付服务暂停公告</dd>
                        <dd>2017年度信息披露报告摘要</dd>
                    </dl>
                    <dl style={{ width: '246px',float:'left',padding:'10px 10px'}}>
                        <dt style={{ fontSize:'15px',fontWeight:'bolder',marginBottom:'8px'}}>村镇银行培育发展十周年</dt>
                        <dd>村镇银行十周年，风雨见证...</dd>
                        <dd>亳州银监分局不忘初心 助...</dd>
                        <dd>牢记使命 砥砺前行</dd>
                        <dd>举旗定向 共创辉煌</dd>
                    </dl>
                </div>
</div>
  )
}
}

export default Homepage