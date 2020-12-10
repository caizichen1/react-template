import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import routers from './routers/index';
class App extends React.Component {

  generateRoute = router => {
    const finalRoutes = router.map(item => {
      const { path, component } = item;
      return (
        <Route key={path} path={path} component={component}></Route>
      );
    });
    return finalRoutes;
  };

  render() {
    console.log(this.generateRoute(routers));
    return (
      <div className="app">
        <HashRouter>
          <Switch>
            { this.generateRoute(routers) }
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
