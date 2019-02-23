import React, { Component } from 'react';
import { Carousel } from 'antd';

class Lbt extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img0: '../../../public/2016082914204633189.png',
        }
        this.props = props
    }

    render() {
        return (
            <Carousel autoplay>
                <div><img src={this.state.img0} alt=""/></div>
                <div><img src={this.state.img0} alt=""/></div>
                <div><img src={this.state.img0} alt=""/></div>
                <div><img src={this.state.img0} alt=""/></div>
            </Carousel> 
        )
    }
}

export default Lbt