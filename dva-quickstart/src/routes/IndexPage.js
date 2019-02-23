import React from 'react';
import { connect } from 'dva';

import Xhead from '../components/Xhead';
import Xleft from '../components/Xleft';
import Xcontent from '../components/Xcontent';
import Xfoot from '../components/Xfoot';

function IndexPage() {
  return (
    <div >
      <Xhead />
      <div style={{ width: '100%', height: '530px' }}>
        <div style={{ margin: '0 auto', height: '530px' ,width:'1000px',padding:'0'}}>
          <Xleft />
          <Xcontent />
        </div>
      </div>
      <Xfoot />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
