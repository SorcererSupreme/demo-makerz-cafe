import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProfilePage from '../Pages/ProfilePage';
import HallOfFame from '../Pages/HallOfFame';

const Routing = () =>  (
    <Router>
        <Switch>
        	<Route exact path="/" component={HallOfFame}/>
            <Route path="/:handle" component={ProfilePage}/>
        </Switch>
    </Router>
)

export default Routing;