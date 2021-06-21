import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routers from './routers/index';

function App() {
    return (
        // <h1> this is home page 12 </h1>
        <Router>
            <Switch>
                {routers.map(({ exact, path, component }, i) => {
                    return <Route key={i} exact={exact} path={path} component={component} />;
                })}
            </Switch>
        </Router>
    );
}

export default App;
