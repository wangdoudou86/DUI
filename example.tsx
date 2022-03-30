import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';

import introductionDemo from './lib/introduction';

// import ButtonExample from './lib/button/button.example';
import DialogDemo from './lib/dialog/dialogDemo';
import LayoutDemo from './lib/layout/layoutDemo';

import { Layout, Header, Asider, Content, Footer } from './lib/layout/index';
import './example.scss';

ReactDOM.render(
    <Router>
        <Layout className="site-page">
            <Header className="site-header">
                <div className='logo'>
                    DUI
                </div>
            </Header>
            <Layout className="site-page">
                <Asider className="site-aside">
                    <Fragment>
                        <ul>
                            <li className='main-item'>
                            <NavLink to='/introduction'>DUI</NavLink>
                            </li>
                        </ul>
                    </Fragment>
                    <Fragment>
                    <h2>
                        组件
                    </h2>
                    <ul>
                        {/* <li>
                            <NavLink to='/button'>Button</NavLink>
                        </li> */}
                        <li>
                            <NavLink to='/dialog'>Dialog</NavLink>
                        </li>
                        <li>
                            <NavLink to='/layout'>Layout</NavLink>
                        </li>
                    </ul>
                    </Fragment>
                </Asider>
                <Content className="site-main">
                    <div className="site-context">
                        <Route path='/introduction' component={introductionDemo} />
                        {/* <Route path='/button' component={ButtonExample} /> */}
                        <Route path='/dialog' component={DialogDemo} />
                        <Route path='/layout' component={LayoutDemo} />
                    </div>
                </Content>
            </Layout>
            <Footer className="site-footer">darkTi</Footer>
        </Layout>
    </Router>, document.getElementById("root")
)