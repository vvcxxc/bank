import React, { Component } from 'react';
import Xhead from '../components/Xhead';
import Lbt from '../components/plug/Lbt';
import Xfoot from '../components/Xfoot';
import Count from '../components/Count';

class Page_cunkuan extends Component {
    constructor(props) {
        super(props)
        this.state = {
                key:'0',
                img0: '../../public/2016083010041179386.png',
                img1: '../../public/2016083010042630694.png',
                img2: '../../public/2016083010171344182.png',
                img3: '../../public/d67ff5afae4b76805ca978c56009f1cf.png',
                img4: '../../public/2016122315424617184.png',
            
        }
        this.props = props
        // console.log(this.dd)
        
        console.log(this.state.key)
    }
    toIOS=(e)=>{
        document.getElementById("XAndroid").style.color="black";
        e.target.style.color="red";
        document.getElementById("con").src=this.state.img4;
    }
    toAndroid=(e)=>{
        document.getElementById("XIOS").style.color="black";
        e.target.style.color="red";
        document.getElementById("con").src=this.state.img3;
    }
    toP=(pkey,e)=>{
        this.setState({
            key:pkey
        })        
        console.log(pkey,e.target)
    }

   
    
    render() {
        return (
            <div >
                <Xhead />
                <div style={{ width: '100%', height: '630px' }}>
                    <div style={{ margin: '0 auto', height: '630px', width: '1000px', padding: '0' }}>
                        <div style={{ background: '#eeeeee', width: '200px', height: '100%', float: 'left' }}>
                            <div style={{ width: '200px', height: '100px', padding: '15px 30px' }}>
                                <div style={{ marginBottom: '10px' }}><img src={this.state.img0} alt="" /></div>
                                <div><img src={this.state.img1} alt="" /></div>
                            </div>
                            <div style={{ width: '200px', height: '170px', padding: '5px 30px' }}>
                                <div style={{ height: '20px', marginBottom: '10px' }}><span style={{ height: '20px', color: '#bc6668' }}><img style={{ height: '20px' }} src={this.state.img2} alt="" />网银助手下载</span></div>
                                <div style={{ width: '100%', height: '120px' }}><img style={{ width: '110px', height: '110px', margin: '2px auto' }} id="con" src={this.state.img3} alt="" /></div>
                                <div><span style={{ fontSize: '12px', marginRight: '10px', color: 'red', cursor: 'pointer' }} id="XAndroid" onClick={this.toAndroid.bind(this)}>安卓客户端</span><span style={{ fontSize: '12px', cursor: 'pointer' }} id="XIOS" onClick={this.toIOS.bind(this)}>ios客户端</span></div>
                            </div>
                            <div style={{ height: '240px', padding: '5px 30px' }}>
                                <br />
                                <ul style={{ height: '225px', color: 'white', fontWeight: 'bolder', background: '#bc6668', textAlign: 'center', listStyle: 'none' }}>
                                    <li style={{ height: '25px', cursor: 'pointer' }} onClick={this.toP.bind(this,'0')}>存款利率</li>
                                    <li style={{ height: '25px', cursor: 'pointer' }} onClick={this.toP.bind(this,'1')}>贷款利率</li>
                                    <li style={{ height: '25px', cursor: 'pointer' }} onClick={this.toP.bind(this,'2')}>外汇汇率</li>
                                    <li style={{ height: '25px', cursor: 'pointer' }} onClick={this.toP.bind(this,'3')}>证书下载</li>
                                    <li style={{ height: '25px', cursor: 'pointer' }} onClick={this.toP.bind(this,'4')}>控件下载</li>
                                    <li style={{ height: '25px', cursor: 'pointer' }} onClick={this.toP.bind(this,'5')}>成员单位</li>
                                    <li style={{ height: '25px', cursor: 'pointer' }} onClick={this.toP.bind(this,'6')}>网点ATM分布</li>
                                    <li style={{ height: '25px', cursor: 'pointer' }} onClick={this.toP.bind(this,'7')}>理财工具</li>
                                    <li style={{ height: '25px', cursor: 'pointer' }} onClick={this.toP.bind(this,'8')}>人才招聘</li>
                                </ul>
                            </div>
                        </div>
                        <div style={{ width: '800px', height: '100%', float: 'right' }}>
                            <div style={{ width: '800px', height: '290px' }}>
                                <Lbt />
                            </div>
                            <div style={{ width: '800px', height: '290px' }}>
                                <Count keys={this.state.key} />
                            </div>
                        </div>
                    </div>
                </div>
                <Xfoot />
            </div>
        )
    }
}

export default Page_cunkuan
