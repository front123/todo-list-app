import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import DoneItem from '../DoneItem'
import TodoContainer from '../TodoContainer'

class BasicRoute extends React.Component{

    render(){
        return(
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={TodoContainer}/>
                    <Route exact path="/done" component={DoneItem}/>
                </Switch>
            </HashRouter>
        )
    }
}


export default BasicRoute;