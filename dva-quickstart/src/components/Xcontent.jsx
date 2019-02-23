import React, { Component } from 'react';
import Lbt from './plug/Lbt';
import Homepage from './plug/Homepage';
// import styles from "../index.css"
class Xcontent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img0:'../../public/2016083009542686554.jpg'
        }
        this.props = props
    }

    render() {
        return (
            <div style={{ width: '800px', height: '100%', float: 'right' }}>
                <div style={{ width: '800px', height: '290px' }}>
                    <Lbt />
                </div>
                <Homepage />
            </div>
        )
    }
}

export default Xcontent