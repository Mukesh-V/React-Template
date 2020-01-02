import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import NavBar from '../components/NavBar/NavBar'

import Home from '../views/Home/Home'

var hist = createBrowserHistory();

var routes = [
    {path: "/",component: Home},
];

export default class App extends React.Component{

    render(){
        return(
            <div>
                <NavBar />
                <Router history={hist}>
                    <Switch>
                        {
                            routes.map((prop, key)=>{
                                return <Route exact path={prop.path} key={key} component={prop.component} />;
                            })
                        }
                    </Switch>
                </Router>
            </div>
        )
    }
}