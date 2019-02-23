import React, { Component } from 'react';
import { Pagination } from 'antd';


class Page extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.props = props
    }

    render() {
        return (
            <div>
                <Pagination size="small" total={50} />
            </div>
        )
    }
}

export default Page