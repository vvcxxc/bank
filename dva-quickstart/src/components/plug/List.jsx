import React, { Component } from 'react';
// import Page from './Page';

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menus: {
                '1': '<ul><li>个人存款</li><li>个人支付结算</li><li>农户及个人贷款</li><li>中间业务</li><li>理财业务</li></ul>',
                '2': '<ul><li>单位存款</li><li>单位支付结算</li><li>企业贷款</li><li>农村经济组织类贷款</li><li>中间业务</li></ul>',
                '3': '<ul><li>国际结算</li><li>贸易融资</li><li>结售汇</li></ul>',
                '4': '<ul><li>缤纷活动</li><li>特色服务</li><li>增值服务</li><li>卡片世界</li></ul>',
                '5': '<span>总记录数：</span><span>0</span><span style={{float:"right"}}><Page /></span>'
            },
            muse: {
                '1': ['个人存款', '个人支付结算', '农户及个人贷款', '中间业务', '理财业务'],
                '2': ['单位存款', '单位支付结算', '企业贷款', '农村经济组织类贷款', '中间业务'],
                '3': ['国际结算', '贸易融资', '结售汇'],
                '4': ['缤纷活动', '特色服务', '增值服务', '卡片世界'],
                '5': []
            }
        }
        this.props = props
        console.log(this.props.show);
    };
    // componentDidMount(){
    //     document.querySelector("#jj").innerHTML=this.state.menus[this.props.show]
    // }
    lls = (e) => {
        console.log(e.target.innerText)
    }
    turnBlue=(e)=>{
        e.target.style.color='#048cde';
    }
    turnBlack=(e)=>{
        e.target.style.color='#595959';
    }
    render() {
        return (
            <div>
                {/* <div id="jj" dangerouslySetInnerHTML={{__html:this.state.menus[this.props.show]}}></div> */}
                <div id="jj" >
                   {
                    this.state.muse[this.props.show].map((item, index) => {
                        return (
                            <li key={index} style={{cursor:'pointer',color:'#595959'}}>
                                <span onClick={this.lls} onMouseMove={this.turnBlue} onMouseLeave={this.turnBlack}>{item}</span>
                                </li> 
                        )
                    })
                } 
            
                </div>
            </div>
        )
    }
}

export default List