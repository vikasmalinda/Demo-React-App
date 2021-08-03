import React, {Component} from 'react'
import Addition_of_two_numbers from './Addition_of_two_numbers'
import CurdOperation from './CrudOperation'
import Home from './Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class RouterDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Router>
            <div>
                <ul>
                
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/addition">Addition of Two Numbers</Link>
                </li>
                <li>
                    <Link to="/crud">Crud Operations</Link>
                </li>

                </ul>

                <hr />

                {/*
                A <Switch> looks through all its children <Route>
                elements and renders the first one whose path
                matches the current URL. Use a <Switch> any time
                you have multiple routes, but you want only one
                of them to render at a time
                */}
                <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/addition">
                    <Addition_of_two_numbers/>
                </Route>
                <Route path="/crud">
                    <CurdOperation/>
                </Route>
                </Switch>
            </div>
    </Router>

         );
    }
}
 
export default RouterDemo;