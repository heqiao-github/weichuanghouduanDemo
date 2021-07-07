import React from 'react';
import {
  HashRouter,
  Switch,
} from 'react-router-dom';

import { routerConfig } from "./routerConfig";
import FrontendAuth from "../components/Auth"

const RootRouter = () => (
  <HashRouter>
    <div className="App">
      <Switch>
        <FrontendAuth config={routerConfig} />
      </Switch>
    </div>
  </HashRouter>
)

export default RootRouter;
