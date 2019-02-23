import React, { Component } from 'react';
// import styles from "../index.css"
class Xhead extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Route:'1',
            img0: '../../public/servertel.png',
            img1:'../../public/logo33.png'
        }
        this.props = props
    }
    toRouter(Route){
        this.setState({
            Route
        })

        let Router = {
            '1':'#/',
            '2':'#/Personal',
            '3':'#/Business',
            '4':'#/International',
            '5':'#/BankCard',
            '6':'#/Ebank',
        }
        window.location.href = Router[Route]
    }
    render() {
        return (
            <div>
                <div style={{ background: '#eeeeee', color: '#b8b9b9', height: '30px' }}>
                    <div style={{ width: '1000px', height: '100%', margin: '0 auto' }}>
                        <ul style={{ height: '100%', width: '500px', float: 'right', listStyle: 'none' }}>
                            <li style={{ float: 'left', padding: '2px 8px', lineHeight: '30px', fontSize: '14px',cursor:'pointer'}}>人才招聘</li>
                            <li style={{ float: 'left', padding: '2px 8px', lineHeight: '30px', fontSize: '14px',cursor:'pointer'}}>加入收藏</li>
                            <li style={{ float: 'left', padding: '2px 8px', lineHeight: '30px', fontSize: '14px',cursor:'pointer'}}>联系我们</li>
                            <li style={{ float: 'left', padding: '2px 8px', lineHeight: '25px' }}><img src={this.state.img0} alt="" /></li>
                        </ul>
                    </div>
                </div>
                <div style={{ height: '100px' }}>
                    <div style={{ width: '1000px', height: '100%', margin: '0 auto',paddingRight:'100px' }}>
                      <div style={{ height: '100%', width: '300px', float: 'left',paddingTop:'10px'}}><img style={{lineHeight:'100px'}} src={this.state.img1}  alt="" /></div>
                        <ul style={{ height: '68px',lineHeight:'100px', width: '500px', float: 'right', listStyle: 'none' }}>
                            <li onClick={this.toRouter.bind(this,'1')} style={{ float: 'left', margin: '2px 8px', lineHeight: '100px', fontSize: '16px',cursor:'pointer',height:'70px'}}>首页</li>
                            <li onClick={this.toRouter.bind(this,'2')} style={{ float: 'left', margin: '2px 8px', lineHeight: '100px', fontSize: '16px',cursor:'pointer',height:'70px'}}>个人业务</li>
                            <li onClick={this.toRouter.bind(this,'3')} style={{ float: 'left', margin: '2px 8px', lineHeight: '100px', fontSize: '16px',cursor:'pointer',height:'70px'}}>公司业务</li>
                            <li onClick={this.toRouter.bind(this,'4')} style={{ float: 'left', margin: '2px 8px', lineHeight: '100px', fontSize: '16px',cursor:'pointer',height:'70px'}}>国际业务</li>
                            <li onClick={this.toRouter.bind(this,'5')} style={{ float: 'left', margin: '2px 8px', lineHeight: '100px', fontSize: '16px',cursor:'pointer',height:'70px'}}>银行卡</li>
                            <li onClick={this.toRouter.bind(this,'6')} style={{ float: 'left', margin: '2px 8px', lineHeight: '100px', fontSize: '16px',cursor:'pointer',height:'70px'}}>电子银行</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Xhead