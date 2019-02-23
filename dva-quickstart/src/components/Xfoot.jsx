import React, { Component } from 'react';
// import styles from "../index.css"
class Xfoot extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.props = props
    }

    render() {
        return (
            <div style={{ background: '#eeedec', width: '100%', height: '210px' }}>
                <div style={{ background: '#f5ecdb', width: '100%', height: '195px' }}>
                    <div style={{ width: '960px', height: '195px', background: '#f5ecdb', margin: '0 auto', textAlign: 'left', fontSize: '12px', paddingTop: '20px' }}>
                        <ul style={{ float: 'left', listStyle: 'none', width: '240px', }}>
                            <span style={{ fontSize: '16px', fontWeight: 'bolder' }}>关于我们<div style={{ width: '80px' }}><hr /></div></span>
                            <li>联系我们</li>
                            <li>隐私条款</li>
                            <li>使用条款</li>
                        </ul>
                        <ul style={{ float: 'left', listStyle: 'none', width: '240px' }}>
                            <span style={{ fontSize: '16px', fontWeight: 'bolder' }}>个人用户<div style={{ width: '80px' }}><hr /></div></span>
                            <li>汇款</li>
                            <li>活期存款</li>
                            <li>个人银行本票</li>
                            <li>定期一本通存款</li>
                            <li>整存整取定期储蓄存款</li>
                        </ul>
                        <ul style={{ float: 'left', listStyle: 'none', width: '240px' }}>
                            <span style={{ fontSize: '16px', fontWeight: 'bolder' }}>企业用户<div style={{ width: '80px' }}><hr /></div></span>
                            <li>支票</li>
                            <li>单位通知存款</li>
                            <li>汇兑</li>
                            <li>银行承兑汇票</li>
                            <li>批量代收业务</li>
                        </ul>
                        <ul style={{ float: 'left', listStyle: 'none', width: '240px' }}>
                            <span style={{ fontSize: '16px', fontWeight: 'bolder' }}>友情链接<div style={{ width: '80px' }}><hr /></div></span>
                            <li>微信平台</li>
                            <li>中国人民银行</li>
                            <li>中国银监会</li>
                            <li>中国银行业协会</li>
                            <li>南浔银行</li>
                        </ul>
                    </div></div>
                <div style={{ fontSize: '14px', height: '15px', textAlign: 'center', color: '#aeaeae' }}>浙ICP备13025652号 浙公网安备33018202000412号</div>

            </div>
        )
    }
}

export default Xfoot












