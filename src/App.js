import React from 'react';
import "./App.css";
import Inicio from "./components/inicio";
import Add from "./components/add.js";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from "./components/layout";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/Add" component={Add} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
