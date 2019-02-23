import React, { Component } from 'react';
import List from "./plug/List"
class Xlocation extends Component {
    constructor(props) {
        super(props)
        console.log(props.lo, props.show);
        this.state = {
            imgs: {
                '1': '../../public/2016102109452354478.gif',
                '2': '../../public/2016102114353234945.gif',
                '3': '../../public/2016102114421283924.gif',
                '4': '../../public/2016102114573456039.gif',
                '5': '../../public/2016102115112491611.gif'
            }
        }
        this.props = props
    }
    componentDidMount() {
        document.querySelector("#_img").src = this.state.imgs[this.props.show]
    }
    render() {
        return (
            <div style={{ width: '800px', height: '100%', float: 'right', paddingLeft: '10PX' }}>
                <div style={{ width: '790px', height: '150px' }}>
                    <img id="_img" src="" alt="" />
                </div>
                <div style={{ width: '790px', height: '150px' }}>
                    <br />
                    <p>当前位置：<span>首页</span> > <span>{this.props.lo}</span></p>
                    <hr />
                    <div style={{ padding: '20px 30px' }}>
                        <List show={this.props.show} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Xlocation












