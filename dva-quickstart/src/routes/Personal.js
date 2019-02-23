import React from 'react';
import { connect } from 'dva';

import Xhead from '../components/Xhead';
import Xleft from '../components/Xleft';
import Xlocation from '../components/Xlocation';
import Xfoot from '../components/Xfoot';

// import styles from './IndexPage.css';
function Personal() {
  return (
    <div >
      <Xhead />
      <div style={{ width: '100%', height: '530px' }}>
        <div style={{ margin: '0 auto', height: '530px' ,width:'1000px',padding:'0'}}>
          <Xleft />
          <Xlocation lo="个人业务" show="1"/>
        </div>
      </div>
      <Xfoot />
    </div>
  );
}



export default connect()(Personal);