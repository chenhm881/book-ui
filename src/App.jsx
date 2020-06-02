import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { createBrowserHistory } from 'history';
import Index from "./views/Index";
import withRoot from './withRoot';

class App extends Component {
    render() {
        return <Router history={createBrowserHistory()}>
            {renderRoutes([{ path: '/', component: Index}])}
        </Router>
    }
}

export default withRoot(App);
