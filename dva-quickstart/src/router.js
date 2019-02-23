import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Personal from './routes/Personal';
import Business from './routes/Business';
import BankCard from './routes/BankCard';
import International from './routes/International';
import Ebank from './routes/Ebank';
import Page_cunkuan from './routes/Page_cunkuan.jsx';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/Personal"  component={Personal} />
        <Route path="/Business"  component={Business} />
        <Route path="/International"  component={International} />
        <Route path="/BankCard"  component={BankCard} />
        <Route path="/Ebank" component={Ebank} />
        <Route path="//Page_cunkuan" exact component={Page_cunkuan} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
