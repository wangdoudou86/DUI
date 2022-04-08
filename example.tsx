import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';

import introductionDemo from './lib/introduction';

import ButtonDemo from './lib/button/buttonDemo';
import DialogDemo from './lib/dialog/dialogDemo';
import LayoutDemo from './lib/layout/layoutDemo';

import FormExample from './lib/form/form.example'

import { Layout, Header, Asider, Content, Footer } from './lib/layout/LayoutIndex';
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
                            <NavLink to='/introduction'>首页</NavLink>
                            </li>
                        </ul>
                    </Fragment>
                    <Fragment>
                    <h2>
                        组件
                    </h2>
                    <ul>
                        <li>
                            <NavLink to='/button'>Button</NavLink>
                        </li>
                        <li>
                            <NavLink to='/layout'>Layout</NavLink>
                        </li>
                        <li>
                            <NavLink to='/dialog'>Dialog</NavLink>
                        </li>
                        <li>
                            <NavLink to='/form'>Form</NavLink>
                        </li>
                    </ul>
                    </Fragment>
                </Asider>
                <Content className="site-main">
                    <div className="site-context">
                        <Route path='/introduction' component={introductionDemo} />
                        <Route path='/button' component={ButtonDemo} />
                        <Route path='/layout' component={LayoutDemo} />
                        <Route path='/dialog' component={DialogDemo} />
                        <Route path='/form' component={FormExample} />
                    </div>
                </Content>
            </Layout>
            <Footer className="site-footer">darkTi</Footer>
        </Layout>
    </Router>, document.getElementById("root")
)