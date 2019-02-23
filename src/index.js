import React from "react";
import ReactDOM from "react-dom";
import '@webcomponents/webcomponentsjs/webcomponents-bundle';

import {
  Grid,
  GridColumn
} from 'react-vaadin-components/src/Grid';

class ReactApp extends React.Component {

  constructor() {
    super();
    const api = [];
    for (let member in window) {
      api.push({
        name: member,
        type: typeof window[member],
        visibility: member.indexOf('_') === 0 ? 'private' : 'public'
      });
    }
    this.state = { api };
  }

  render() {
    return <div>
      <h1>Window API</h1>
      <Grid items={this.state.api} columnReorderingAllowed>
        <GridColumn path="name"></GridColumn>
        <GridColumn path="type"></GridColumn>
        <GridColumn path="visibility"></GridColumn>
      </Grid>
    </div>
  }
}

ReactDOM.render(<ReactApp />, document.getElementById("app"));
