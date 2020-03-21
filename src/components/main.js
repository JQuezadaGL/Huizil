import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Clientes from './clientes';
import Proveedores from './proveedores';
import Tours from './tours';
import Ayuda from './ayuda';


const Main = () => (
  <Switch>
    <Route exact path="/" component={Clientes} />
    <Route path="/clientes" component={Clientes} />
    <Route path="/proveedores" component={Proveedores} />
    <Route path="/tours" component={Tours} />
    <Route path="/ayuda" component={Ayuda} />
  </Switch>
)

export default Main;