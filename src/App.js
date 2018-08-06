import React, { Component } from 'react';
import {
  Header,
  Button
} from 'semantic-ui-react';
import sha256 from 'sha256';
class App extends Component {
  render() {
    return (
      <Header>
        <Button>Donate Us</Button>
        {console.log(sha256("Message"))}
      </Header>
    );
  }
}

export default App;
